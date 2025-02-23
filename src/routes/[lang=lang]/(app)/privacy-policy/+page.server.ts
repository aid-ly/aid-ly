import { marked } from 'marked';
import { mdRenderer } from '$project/src/lib/helpers';
import fs from 'fs';
import path from 'path';

export const load = async ({ params }) => {
	marked.setOptions({ renderer: mdRenderer });

	const html = await marked.parse(
		fs.readFileSync(path.join('server_static', 'privacy-policy', `${params.lang}.md`), 'utf8'),
	);
	return { html };
};
