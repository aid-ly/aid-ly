import { env } from '$env/dynamic/public';
import type { Language } from '$lib/i18n';
import { sendMail, templates } from '$lib/server/mail';
import { createOrganization, genResetPasswordToken, resetPasswordRequest } from '$lib/server/users';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, params, locals }) => {
		const formData = await request.formData();

		const normalize = (name: string) => formData.get(name)!.toString();

		try {
			const org = await createOrganization(
				normalize('username'),
				normalize('name'),
				normalize('description'),
				normalize('email'),
				normalize('website'),
				normalize('phoneNumber') || undefined,
			);

			resetPasswordRequest(org.id, genResetPasswordToken()).then((reset) => {
				sendMail(
					env.PUBLIC_CONTACTS_EMAIL,
					org.email,
					locals.locale.emails.welcome.subject,
					templates.welcome({
						locale: locals.locale.emails.welcome.body,
						lang: params.lang as Language,
						org,
						resetToken: reset.token,
					}),
				);
			});

			redirect(301, `/${params.lang}/admin/`);
		} catch (err) {
			console.error(err);
		}
	},
};
