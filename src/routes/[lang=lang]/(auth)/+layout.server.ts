import { redirect } from '@sveltejs/kit';

export const prerender = false;

export const trailingSlash = 'always';

export const load = ({ url, locals, params }) => {
	if (!locals.user) {
		redirect(302, `/${params.lang}/login?to=${url.pathname}`);
	}
};
