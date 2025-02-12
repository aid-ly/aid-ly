import type { Language, Locale } from '$lib/i18n';
import type { SafeUser } from '$lib/types/User';

declare global {
	namespace App {
		interface Locals {
			locale: Locale;
			lang: Language;
			user?: SafeUser;
		}
	}
}

export {};
