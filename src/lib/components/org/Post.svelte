<script lang="ts">
	import { env } from '$env/dynamic/public';
	import type { SafePostWithUser } from '$lib/types/User';
	import { onMount } from 'svelte';

	const { post }: { post: SafePostWithUser } = $props();

	const reverseGeocode = async (lat: number, lng: number) =>
		(
			await (
				await fetch(
					`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${env.PUBLIC_MAPBOX_TOKEN}`,
				)
			).json()
		).features[0]?.place_name;

	let place = $state('loading...');

	onMount(async () => {
		place = await reverseGeocode(post.lat, post.lng);
	});
</script>

	<form action="?/post" method="post" class="space-y-4">
		<input type="hidden" name="id" value={post.id} />

		<div>
			<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
			<input type="text" name="title" id="tile" value={post.title} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
		</div>

		<div>
			<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
			<input type="text" name="description" id="tile" value={post.description} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
		</div>

		<div>
			<label for="Place" class="block text-sm font-medium text-gray-700">Place</label>
			<input type="text" name="Place" id="tile" bind:value={place}  class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" disabled />
		</div>

		<button type="submit" class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500">Save Changes</button>
	</form>
