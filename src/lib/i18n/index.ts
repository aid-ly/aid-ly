import en from './locales/en';
import it from './locales/it';
import common from './locales/common';

export const locales = { en, it };

export type Language = keyof typeof locales;
export type Locale = typeof en | typeof it;

export const AVAILABLE_LANGUAGES: Language[] = Object.keys(locales) as Language[];

export const FALLBACK: Language = 'en';

export const getFullLocale = (lang: Language, separator = '-') => {
	return {
		it: `it${separator}IT`,
		en: `en${separator}US`,
	}[lang];
};

export const icons = {
	it: `🇮🇹`,
	en: `🇬🇧`,
};

export { common };
