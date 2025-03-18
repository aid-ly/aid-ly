import { getUserById } from '$lib/server/users';
import { error } from '@sveltejs/kit';

export const load = async ({ params, locals }) => {
	const org = await getUserById(params.id);

	if (!org)
		error(404, {
			message: locals.locale.errors.org_not_found.message,
			cta: { message: locals.locale.errors.org_not_found.cta, url: `/${params.lang}/admin/` },
		});

	return { org };
};
