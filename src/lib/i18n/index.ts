import en from './locales/en';
import it from './locales/it';
import common from './locales/common';

const locales = { en, it };

type Language = keyof typeof locales;
type Locale = typeof en | typeof it;

const AVAILABLE_LANGUAGES: Language[] = Object.keys(locales) as (keyof typeof locales)[];

const FALLBACK: Language = 'it';

export { locales, common, FALLBACK, AVAILABLE_LANGUAGES, type Language, type Locale };
