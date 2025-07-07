<script lang="ts">
	import { CookieBanner } from 'svelte-cookie-banner';
	import PageSEO from '$lib/components/PageSEO.svelte';

	const { children, data } = $props();
	const { locale, lang, page } = data;
</script>

{@render children()}

<!-- <CookieBanner {initAnalytics} locale={locale.gdpr.banner} /> -->
<CookieBanner
	heading={locale.gdpr.banner.title}
	description={locale.gdpr.banner.description}
	acceptAllLabel={locale.gdpr.banner.buttons.acceptAll}
	rejectAllLabel={locale.gdpr.banner.buttons.rejectAll}
	customize={locale.gdpr.banner.buttons.customize}
	bgColor="#ee0000"
	choices={{
		essentials: {
			label: locale.gdpr.banner.choices.essentials.label,
			description: locale.gdpr.banner.choices.essentials.description,
			value: true,
			mandatory: true,
		},
		analytics: {
			label: locale.gdpr.banner.choices.analytics.label,
			description: locale.gdpr.banner.choices.analytics.description,
			value: true,
			onAccepted() {
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
			},
		},
	}}
/>

<PageSEO locale={locale.seo} {lang} page={page as keyof typeof locale.seo} />
