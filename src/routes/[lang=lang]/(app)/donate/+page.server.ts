import { env } from '$env/dynamic/public';
import { redirect } from '@sveltejs/kit';

export const load = () => {
	redirect(302, env.PUBLIC_DONATE_REDIRECT_URL);
};
