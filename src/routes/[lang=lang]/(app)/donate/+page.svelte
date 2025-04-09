<script lang="ts">
	import PageBanner from '$lib/components/PageBanner.svelte';
	import { getFullLocale } from '$lib/i18n';
	import { onMount } from 'svelte';

	const { data } = $props();
	const {
		buttonId,
		locale: { donate: locale },
		lang,
	} = data;

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
		script.onload = () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(window as any).PayPal.Donation.Button({
				env: 'production',
				hosted_button_id: buttonId,
				image: {
					src: `https://www.paypalobjects.com/${getFullLocale(lang, '_')}/i/btn/btn_donate_LG.gif`,
					alt: locale.paypalButton.alt,
					title: locale.paypalButton.title,
				},
			}).render('#donate-button');
		};
		document.body.appendChild(script);
	});
</script>

<PageBanner title={{ text: locale.title }}>
	<p class="mb-4 text-lg text-gray-600">{locale.description}</p>
	<p class="text-md mb-6 text-gray-600">{locale.cta}</p>

	<div id="donate-button-container" class="flex justify-center">
		<div id="donate-button"></div>
	</div>
</PageBanner>
