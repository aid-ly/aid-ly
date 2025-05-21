import { getAll } from '$lib/server/posts';

export const GET = async () => {
	console.log(await getAll(), await getAll(true));
	return new Response(JSON.stringify(await getAll()), {
		status: 200,
	});
};
