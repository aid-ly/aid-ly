import { sanitizeObject } from '$lib/helpers.js';
import { deleteUserById, getUserById, updateUserById } from '$lib/server/users';
import { error, redirect } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	const org = await getUserById(params.id, true);

	if (!org)
		error(404, {
			message: locals.locale.errors.org_not_found.message,
			cta: { message: locals.locale.errors.org_not_found.cta, url: `/${params.lang}/admin/` },
		});

	return { org: sanitizeObject(org, ['password']) };
};

export const actions = {
	delete: async ({ params }) => {
		await deleteUserById(params.id);
		redirect(302, `/${params.lang}/admin/`);
	},

	update: async ({ params, request }) => {
		const formData = await request.formData();
		const data: Record<string, string | null> = {};
		['name', 'username', 'email', 'phoneNumber', 'website', 'description'].forEach((input) => {
			data[input] = formData.get(input)?.toString() || null;
		});

		await updateUserById(params.id, data);
	},
};
