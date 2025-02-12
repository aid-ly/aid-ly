<script lang="ts">
	import CookieBanner from '$lib/components/CookieBanner.svelte';

	const { children, data } = $props();
	const { locale } = data;

	const initAnalytics = () => {
		document.body.appendChild(
			Object.assign(document.createElement('script'), {
				src: 'https://scripts.simpleanalyticscdn.com/latest.js',
				async: true,
			}),
		);
	};
</script>

{@render children()}

<CookieBanner {initAnalytics} locale={locale.gdpr.banner} />
