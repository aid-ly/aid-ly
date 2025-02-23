import { AVAILABLE_LANGUAGES } from '$project/src/lib/i18n';

export const prerender = true;

export const GET = ({ url }) => {
	const host = `${url.protocol}//${url.host}`;
	const sitemaps = AVAILABLE_LANGUAGES.map((lang) => `Sitemap: ${host}/${lang}/sitemap.xml`).join(
		'\n',
	);

	return new Response(`User-agent: *
Disallow: /api/
Disallow: /en/org/
Disallow: /it/org/
Disallow: /en/admin/
Disallow: /it/admin/

Allow: /it/
Allow: /en/

${sitemaps}
`);
};
