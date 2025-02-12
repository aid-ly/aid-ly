import { AVAILABLE_LANGUAGES } from '$lib/i18n';

export const entries = () =>
	AVAILABLE_LANGUAGES.map((lang) => {
		return { lang };
	});

export const trailingSlash = 'always';
