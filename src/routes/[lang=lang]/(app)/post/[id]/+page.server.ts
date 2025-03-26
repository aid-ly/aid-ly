import { getPostById } from '$lib/server/posts.js';
import { error } from '@sveltejs/kit';

export const prerender = false;

export const load = async ({ params, locals }) => {
	const post = await getPostById(params.id);

	if (!post) {
		error(404, {
			message: locals.locale.errors.post_not_found.message,
			cta: { message: locals.locale.errors.post_not_found.cta, url: `/${params.lang}/` },
		});
	}

	return { post };
};
