import md2html from '$lib/md2html';

const files = import.meta.glob('$lib/static/md/**/*.md', {
	query: '?raw',
	import: 'default',
}) as Record<string, () => Promise<string>>;

export const load = async ({ params, url }) => {
	return {
		html: md2html(
			await files[`/src/lib/static/md/${url.pathname.split('/').at(-1)!}/${params.lang}.md`](),
			1,
		),
	};
};
