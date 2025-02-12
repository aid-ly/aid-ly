<script lang="ts">
	import { animateScroll } from 'svelte-scrollto-element';
	import Map from '$lib/components/Map.svelte';
	import type { SafePostWithUser as Post } from '$lib/types/User';
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import { page } from '$app/state';
	import ShareButtons from '$project/src/lib/components/ShareButtons.svelte';

	const { data } = $props();
	const { locale, lang } = data;
	let posts: Post[] = $state([]);

	onMount(() => {
		const { hash } = window.location;
		if (hash) {
			animateScroll.scrollTo({ element: hash });
			setTimeout(() => replaceState(page.url.pathname + page.url.search, ''), 2000);
		}

		fetch('/api/posts').then(async (res) => {
			posts = await res.json();
		});
	});
</script>

<section class="bg-white p-8 text-gray-900" id="intro">
	<h1 class="text-4xl font-bold text-red-600">{locale.home.title}</h1>
	<p class="mt-4 text-lg">{locale.home.motto}</p>
</section>

<section class="bg-gray-100 p-8" id="map-section">
	<div>
		<h2 class="text-3xl font-semibold text-gray-900">{locale.home.map.title}</h2>
		<p class="mt-2 text-lg text-gray-700">{locale.home.map.description}</p>

		<div class="map">
			<Map bind:posts locale={locale.map} {lang} />
		</div>
	</div>
</section>

<section id="share" class="bg-white p-8 text-center">
	<h2 class="text-3xl font-semibold text-gray-900">{locale.home.share.title}</h2>
	<ShareButtons locale={locale.home.share} />
</section>

<style lang="scss">
	section {
		&#intro {
			text-align: center;
		}

		&#map-section {
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 10px;

			> div {
				width: 90vw;

				.map {
					height: 80vh;
					border-radius: 8px;
					margin-top: 15px;
					box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
				}
			}

			h2 {
				width: 100%;
			}
		}

		&#share {
			h2 {
				text-align: center;
				color: #353535;
				font-family: 'Cormorant Garamond', serif;
				margin-bottom: 10px;
				text-decoration: underline;
				text-decoration-color: var(--color-red-400);
				text-decoration-thickness: 2px;
			}
		}
	}
</style>
