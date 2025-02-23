import type { Locale } from '$lib/i18n';
import type { SafeUser } from '$lib/types/User';

declare global {
	namespace App {
		interface Locals {
			locale: Locale;
			user?: SafeUser;
		}
	}
}

export {};
