import { getAll } from '$lib/server/posts';

export const GET = async () => {
	return new Response(JSON.stringify(await getAll()), {
		status: 200,
	});
};
