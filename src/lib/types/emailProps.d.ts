import type { Language, Locale } from '$lib/i18n';
import type { SafeUser } from '$lib/types/User';

export type Welcome = {
	locale: Locale['emails']['welcome']['body'];
	lang: Language;
	org: SafeUser;
	resetToken: string;
};
