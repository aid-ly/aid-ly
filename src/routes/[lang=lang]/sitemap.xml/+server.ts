import { common } from '$lib/i18n';
import { getAllPostIds } from '$lib/server/posts.js';
import { getAllOrganizationUsernames } from '$lib/server/users';

export const GET = async () => {
	const base = common.project.url;
	const organizations = (await getAllOrganizationUsernames())
		.map(
			(org) => `\t<url>
		<loc>${base}/org/${org.username}</loc>
		<lastmod>${org.updatedAt.toISOString().split('T')[0]}</lastmod>
		<priority>0.7</priority>
	</url>`,
		)
		.join('\n');
	const posts = (await getAllPostIds()).map(
		(post) => `\t<url>
		<loc>${base}/post/${post.id}</loc>
		<lastmod>${post.updatedAt.toISOString().split('T')[0]}</lastmod>
		<priority>0.7</priority>
	</url>`,
	);

	return new Response(
		`
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
	<url>
		<loc>${base}/</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>1</priority>
	</url>
	<url>
		<loc>${base}/contacts</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.7</priority>
	</url>
${organizations}
${posts}
	<url>
		<loc>${base}/privacy-policy</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${base}/terms-of-use</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${base}/donate</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${base}/login</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.5</priority>
	</url>
</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
};
