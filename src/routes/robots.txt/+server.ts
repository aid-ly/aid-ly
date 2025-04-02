import { AVAILABLE_LANGUAGES, common } from '$lib/i18n';

export const prerender = true;

export const GET = () => {
	const base = common.project.url;
	const sitemaps = AVAILABLE_LANGUAGES.map((lang) => `Sitemap: ${base}/${lang}/sitemap.xml`).join(
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
