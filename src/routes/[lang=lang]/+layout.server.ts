import type { Language } from '$lib/i18n';

export const load = ({ locals, params, url }) => {
	return {
		locale: locals.locale,
		lang: params.lang as Language,
		page: url.pathname.replace(`/${params.lang}/`, ''),
	};
};
