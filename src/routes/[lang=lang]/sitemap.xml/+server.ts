import { getAllOrganizationIds } from '$project/src/lib/server/users';

export const GET = async ({ url, params }) => {
	const host = `${url.protocol}//${url.host}/${params.lang}`;
	const organizations = (await getAllOrganizationIds())
		.map(
			(org) => `\t<url>
		<loc>${host}/org/${org.id}</loc>
		<lastmod>${org.updatedAt.toISOString().split('T')[0]}</lastmod>
		<priority>0.7</priority>
	</url>`,
		)
		.join('\n');

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
		<loc>${host}/</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>1</priority>
	</url>
	<url>
		<loc>${host}/contacts</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.7</priority>
	</url>
${organizations}
	<url>
		<loc>${host}/privacy-policy</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${host}/terms-of-use</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${host}/donate</loc>
		<lastmod>2025-02-23</lastmod>
		<priority>0.6</priority>
	</url>
	<url>
		<loc>${host}/login</loc>
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
