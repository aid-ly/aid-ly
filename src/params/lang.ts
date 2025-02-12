import { AVAILABLE_LANGUAGES, type Language } from '$lib/i18n';

export const match = (param) => AVAILABLE_LANGUAGES.includes(param as Language);
