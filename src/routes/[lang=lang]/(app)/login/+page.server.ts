import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import { common } from '$project/src/lib/i18n/index';
import { sign } from '$project/src/lib/server/jwt';
import { login } from '$project/src/lib/server/users';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals, params, cookies, url }) => {
		const formData = await request.formData();
		const loginData = {
			username: formData.get('username')?.toString(),
			password: formData.get('password')?.toString(),
		};

		if (
			!loginData.username ||
			!loginData.password ||
			!(locals.user = await login(loginData.username, loginData.password))
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

		redirect(302, url.searchParams.get('to') || `/${params.lang}`);
	},
};
