import { redirectFromSearchParams } from '$lib/helpers.js';
import type { Locale } from '$lib/i18n';
import { getById, reset } from '$lib/server/password-reset';
import { error } from '@sveltejs/kit';

const getReset = async (
	token: string,
	locale: Locale['errors']['reset_token_not_found'],
	lang: string,
) => {
	const reset = await getById(token);

	if (!reset) {
		error(404, {
			message: locale.message,
			cta: { message: locale.cta, url: `/${lang}/` },
		});
	}

	return reset;
};

export const load = async ({ params, locals }) => {
	await getReset(params.token, locals.locale.errors.reset_token_not_found, params.lang);
};

export const actions = {
	default: async ({ request, params, locals, url }) => {
		const formData = await request.formData();
		const passwordReset = await getReset(
			params.token,
			locals.locale.errors.reset_token_not_found,
			params.lang,
		);

		const password = formData.get('password')!.toString();

		await reset(passwordReset, password);

		redirectFromSearchParams(url.searchParams, `/${params.lang}/login`);
	},
};
