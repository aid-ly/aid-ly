<script lang="ts">
	import { dev } from '$app/environment';
	import { common, type Locale } from '$lib/i18n';
	import cookies from 'js-cookie';
	import { onMount } from 'svelte';

	type Cookies = { essentials: boolean; analytics: boolean };
	type Props = { locale: Locale['gdpr']['banner']; initAnalytics: () => void };
	const { locale, initAnalytics }: Props = $props();

	let selectedCookies: Cookies | undefined = $state(undefined);
	let showBanner = $state(false);

	const rejectAll = () => {
		selectedCookies = { analytics: false, essentials: true };
	};

	const acceptAll = () => {
		selectedCookies = { analytics: true, essentials: true };
	};

	$effect(() => {
		if (selectedCookies) {
			cookies.set(common.cookies.gdpr, JSON.stringify(selectedCookies), {
				expires: selectedCookies.analytics ? 14 : 7,
				secure: !dev,
			});
			showBanner = false;

			if (selectedCookies.analytics) {
				initAnalytics();
			}
		}
	});

	onMount(() => {
		let data = cookies.get(common.cookies.gdpr);
		if (!data) return void (showBanner = true);

		selectedCookies = JSON.parse(data);

		if (!selectedCookies) return void (showBanner = true);

		if (selectedCookies.analytics) {
			initAnalytics();
		}
	});
</script>

{#if showBanner}
	<div
		class="cookies"
		role="dialog"
		aria-labelledby="cookie-banner-title"
		aria-describedby="cookie-banner-description"
	>
		<div>
			<h2 id="cookie-banner-title">{locale.title}</h2>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<p id="cookie-banner-description">{@html locale.description}</p>
		</div>

		<div class="actions">
			<button onclick={rejectAll} id="accept-cookies">{locale.buttons.rejectAll}</button>
			<button onclick={acceptAll}>{locale.buttons.acceptAll}</button>
		</div>
	</div>
{/if}

<style lang="scss">
	.cookies {
		z-index: 9999;
		position: fixed;
		bottom: 1vh;
		right: 1vw;
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 500px;
		background-color: #ee0000;
		color: white;
		padding: 20px;
		border-radius: 10px;

		h2 {
			font-size: larger;
			font-weight: 500;
		}

		.actions {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 15px;

			button {
				cursor: pointer;
				padding: 10px;
				border: 2px solid white;
				transition: all 0.5s;

				&:last-child,
				&:hover {
					background-color: rgba(128, 128, 128, 0.2);
				}
			}
		}
	}
</style>
