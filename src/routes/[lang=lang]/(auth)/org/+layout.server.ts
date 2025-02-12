import { getByUserId } from '$project/src/lib/server/posts.js';

export const load = async ({ locals }) => {
	return {
		user: locals.user!,
		posts: await getByUserId(locals.user!.id),
	};
};
