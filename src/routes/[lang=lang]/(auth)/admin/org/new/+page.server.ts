import { createOrganization } from '$lib/server/users';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();

		const normalize = (name: string) => formData.get(name)!.toString();

		try {
			await createOrganization(
				normalize('username'),
				normalize('name'),
				normalize('description'),
				normalize('email'),
				normalize('website'),
				normalize('phoneNumber') || undefined,
			);

			redirect(301, `/${params.lang}/admin/`);
		} catch (err) {
			console.error(err);
		}
	},
};
