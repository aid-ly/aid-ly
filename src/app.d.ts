import type { Locale } from '$lib/i18n';
import type { ErrorCTA } from '$lib/types/Error';
import type { SafeUser } from '$lib/types/User';

declare global {
	namespace App {
		interface Locals {
			locale: Locale;
			user?: SafeUser;
		}
		interface Error {
			cta?: ErrorCTA;
		}
	}
}

export {};
