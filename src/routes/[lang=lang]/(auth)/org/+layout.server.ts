import { getByUserId } from '$lib/server/posts';

export const load = async ({ locals }) => {
	return {
		user: locals.user!,
		posts: await getByUserId(locals.user!.id),
	};
};

// TODO: support actions
