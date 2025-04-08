<script lang="ts">
	import { AVAILABLE_LANGUAGES, common, FALLBACK, type Language } from '$lib/i18n';

	type Props = {
		title: string;
		description: string;
		lang: Language;
		page: string;
	};
	const { title, description, lang, page }: Props = $props();

	const ld = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: common.project.name,
		url: common.project.url,
		logo: `${common.project.url}/logo.svg`,
		description: description,
	};
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `${'<'}script type="application/ld+json">${JSON.stringify(ld)}</script>`}

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="description" content={description} />
<meta name="author" content={common.project.owner.name} />
<link rel="canonical" href="{common.project.url}/{lang}/" />

<!-- Alternate Language Versions -->
{#each AVAILABLE_LANGUAGES as language}
	<link rel="alternate" hreflang={language} href="{common.project.url}/{language}/{page}" />
{/each}
<link rel="alternate" href="{common.project.url}/{FALLBACK}/{page}" hreflang="x-default" />

<!-- Open Graph / Facebook -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:url" content="{common.project.url}/en/" />
<meta property="og:site_name" content="aid-ly" />
<meta property="og:locale" content={lang} />
<meta property="og:image" content="{common.project.url}/{lang}/social-preview" />
<meta name="twitter:card" content="summary_large_image" />

<!-- Twitter -->
<meta name="twitter:url" content={common.project.url} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="{common.project.url}/{lang}/social-preview" />
