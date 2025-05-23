<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Map from '$lib/components/Map.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { MapBox } from '$lib/helpers';
	import { onMount } from 'svelte';
	import md2html from '$lib/md2html';

	const { data } = $props();
	const { post, locale, lang, page } = data;
	let place = $state(locale.orgAdmin.posts.inputs.place.loading);

	const mapbox = new MapBox(env.PUBLIC_MAPBOX_TOKEN, lang);

	onMount(async () => {
		place = await mapbox.reverseGeocode(post.lat, post.lng);
	});

	let geoUrl = $derived(`geo:${post.lat},${post.lng}?q=${encodeURIComponent(place)}`);

	// TODO: when the `geo:` scheme will be supported on most platforms, remove this handler
	const handleGeoUrl = (e: Event) => {
		e.preventDefault();
		const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;
		window.open(mapsLink, '_system');
	};
</script>

<svelte:head>
	<SEO title={`${post.title} - ${post.user.name}`} description={post.description} {lang} {page} />
</svelte:head>

<section id="post" class="mx-auto space-y-4 rounded-2xl bg-white p-6 shadow-md">
	<h1 class="text-2xl font-bold text-gray-800">{post.title}</h1>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p class="text-gray-600">{@html md2html(post.description, 2)}</p>

	<a class="block rounded-lg bg-gray-100 p-4" href={geoUrl} onclick={handleGeoUrl}>
		<p class="font-semibold text-gray-800">{locale.post.location}</p>
		<p class="text-gray-600">{place}</p>
	</a>

	<p class="text-gray-800">
		{locale.post.postedBy}
		<a class="font-semibold" href="/{lang}/org/{post.user.username}" target="_blank">
			{post.user.name}
		</a>
	</p>
</section>

<section id="map">
	<Map
		posts={[post]}
		locale={locale.map}
		{lang}
		requestGeolocation={false}
		init={{ lng: post.lng, lat: post.lat, zoom: 12 }}
	/>
</section>

<style lang="scss">
	#post {
		width: clap(100px, 50vw, 400px);
		max-width: 80%;
		margin: 0 20px;
	}

	#map {
		height: 80vh;
		width: 80vw;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin: 50px 0 100px 0;
	}
</style>
