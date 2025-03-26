<script lang="ts">
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import PageSEO from '$lib/components/PageSEO.svelte';

	const { children, data } = $props();
	const { locale, lang, page } = data;

	const initAnalytics = () => {
		document.body.append(
			Object.assign(document.createElement('script'), {
				src: 'https://scripts.simpleanalyticscdn.com/latest.js',
				async: true,
			}),
			Object.assign(document.createElement('script'), {
				src: 'https://scripts.simpleanalyticscdn.com/auto-events.js',
				async: true,
				'data-full-urls': true,
			}),
		);
	};
</script>

{@render children()}

<CookieBanner {initAnalytics} locale={locale.gdpr.banner} />

<PageSEO locale={locale.seo} {lang} page={page as keyof typeof locale.seo} />
