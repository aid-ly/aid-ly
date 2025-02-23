import { marked } from 'marked';
import fs from 'fs';
import path from 'path';

export const load = async ({ params, url }) => {
	const html = await marked.parse(
		fs.readFileSync(
			path.join('server_static', url.pathname.split('/').at(-1)!, `${params.lang}.md`),
			'utf8',
		),
	);

	return { html };
};
