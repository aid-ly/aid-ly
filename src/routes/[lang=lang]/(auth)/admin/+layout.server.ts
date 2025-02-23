import { redirect } from '@sveltejs/kit';

export const load = ({ locals, params, url }) => {
	if (locals.user?.role !== 'ADMIN') {
		redirect(302, `/${params.lang}/login?to=${url.pathname}`);
	}
};
