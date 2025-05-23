<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { common, type Language, type Locale } from '$lib/i18n';
	import type { SafePostWithUser as Post } from '$lib/types/User';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import { onMount, onDestroy } from 'svelte';
	import md2html from '$lib/md2html';

	type Props = {
		posts: Post[];
		locale: Locale['map'];
		lang: Language;
		requestGeolocation?: boolean;
		init?: { lng: number; lat: number; zoom: number };
	};
	const {
		posts = $bindable(),
		requestGeolocation = true,
		init = { lng: 1.0760175, lat: 47.5907202, zoom: 4.5 },
		locale,
		lang,
	}: Props = $props();

	let map: mapboxgl.Map;
	let mapContainer: HTMLDivElement;

	onMount(() => {
		map = new mapboxgl.Map({
			container: mapContainer,
			accessToken: env.PUBLIC_MAPBOX_TOKEN,
			center: [init.lng, init.lat],
			zoom: init.zoom,
			customAttribution: common.project.name,
			style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
			projection: 'equirectangular',
		});

		if (requestGeolocation && 'geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					map.flyTo({
						center: { lng: position.coords.longitude, lat: position.coords.latitude },
						zoom: 11,
					});
				},
				({ message }) => console.log('geolocation error:', message),
			);
		}

		$effect(() => {
			posts.forEach((post) => {
				const org = post.user;
				new mapboxgl.Marker({
					color: '#fb2c36',
					draggable: false,
				})
					.setLngLat({ lng: post.lng, lat: post.lat })
					.setPopup(
						new mapboxgl.Popup({
							anchor: 'bottom',
							closeButton: false,
							closeOnClick: true,
							closeOnMove: true,
						}).setHTML(`
            <h3 class="text-lg font-semibold text-gray-800">${post.title}</h3>
            <p class="text-sm text-gray-600 mt-2">${md2html(post.description.length > 128 ? post.description.slice(0, 128) + '...' : post.description, 4)}</p>

            <div class="mt-4 border-t pt-3">
              <p class="text-xs text-gray-500">
              ${locale.by}
                <a href="/${lang}/org/${org.username}" title="${org.description.length > 32 ? org.description.slice(0, 32) + '...' : org.description}" class="text-blue-500 visited:text-blue-500 hover:underline">
                  ${org.name}
                </a>
              </p>
              <p>
                <a href="mailto:${org.email}" class="text-blue-500 visited:text-blue-500 hover:underline">${org.email}</a>
              </p>
              <p>
								${org.phoneNumber ? `<a href="tel:${org.phoneNumber}" class="text-blue-500 visited:text-blue-500 hover:underline">${org.phoneNumber}</a>` : ''}
              </p>
            </div>

            <a href="/${lang}/post/${post.id}"
              class="text-blue-500 visited:text-blue-500 hover:underline mt-3 inline-block">
              ${locale.more}
            </a>
          `),
					)
					.addTo(map);
			});
		});
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

<div id="map" bind:this={mapContainer}></div>

<style>
	#map {
		border-radius: 20px;
		width: 100%;
		height: 100%;
	}
</style>
