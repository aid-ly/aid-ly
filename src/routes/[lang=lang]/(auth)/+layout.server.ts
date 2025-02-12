import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const load = ({ url, locals }) => {
	if (!locals.user) {
		redirect(302, `/${locals.lang}/login?to=${url.pathname}`);
	}
};
