import { env } from '$env/dynamic/private';
import { AVAILABLE_LANGUAGES, type Language } from '$lib/i18n';

const buttonIds: Record<Language, string> = env.PAYPAL_DONATE_BUTTONS_IDS.split(' ').reduce(
	(acc, id, indx) => {
		acc[AVAILABLE_LANGUAGES[indx]] = id;
		return acc;
	},
	{} as Record<Language, string>,
);

export const load = ({ params }) => {
	return {
		buttonId: buttonIds[params.lang as Language],
	};
};
