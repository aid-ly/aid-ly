import fs from 'fs';
import path from 'path';

export const GET = async ({ params }) => {
	const imageStream = fs.createReadStream(
		path.join('src', 'lib', 'static', 'img', 'social-preview', `${params.lang}.png`),
	);

	const readableStream = new ReadableStream({
		start(controller) {
			imageStream.on('data', (chunk) => {
				controller.enqueue(chunk);
			});

			imageStream.on('end', () => {
				controller.close();
			});

			imageStream.on('error', (err) => {
				controller.error(err);
			});
		},
	});

	return new Response(readableStream, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=864000',
		},
	});
};
