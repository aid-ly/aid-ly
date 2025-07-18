<script lang="ts">
	import { CookieBanner } from 'svelte-cookie-consent';
	import PageSEO from '$lib/components/PageSEO.svelte';

	const { children, data } = $props();
	const { locale, lang, page } = data;

	const choices = $state({
		necessary: {
			label: locale.gdpr.banner.choices.necessary.label,
			description: locale.gdpr.banner.choices.necessary.description,
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
	});
</script>

{@render children()}

<CookieBanner
	heading={locale.gdpr.banner.title}
	description={locale.gdpr.banner.description}
	acceptAllLabel={locale.gdpr.banner.buttons.acceptAll}
	rejectAllLabel={locale.gdpr.banner.buttons.rejectAll}
	customize={locale.gdpr.banner.buttons.customize}
	bgColor="#ee0000"
	{choices}
	cookie={{
		name: 'gdpr-cookie',
		path: '/',
		secure: true,
		sameSite: 'strict',
	}}
/>

<PageSEO locale={locale.seo} {lang} page={page as keyof typeof locale.seo} />
