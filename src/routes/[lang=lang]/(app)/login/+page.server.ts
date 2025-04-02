import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { redirectFromSearchParams } from '$lib/helpers';
import { common } from '$lib/i18n';
import { sign } from '$lib/server/jwt';
import { login } from '$lib/server/users';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals, params, cookies, url }) => {
		const formData = await request.formData();
		const loginData = {
			email: formData.get('email')?.toString(),
			password: formData.get('password')?.toString(),
		};

		if (
			!loginData.email ||
			!loginData.password ||
			!(locals.user = await login(loginData.email, loginData.password))
		) {
			return fail(401, { error: locals.locale.login.error.invalidCredentials });
		}

		cookies.set(common.cookies.jwt, sign(locals.user.id), {
			path: '/',
			httpOnly: true,
			expires: new Date(Date.now() + +env.SESSION_EXPIRATION * 1000),
			secure: !dev,
			sameSite: 'strict',
		});

		redirectFromSearchParams(url.searchParams, `/${params.lang}/`);
	},
};
