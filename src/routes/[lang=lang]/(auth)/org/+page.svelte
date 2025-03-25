<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Map from '$lib/components/Map.svelte';
	import ModularForm from '$lib/components/ModularForm.svelte';
	import Post from '$lib/components/org/Post.svelte';
	import type { ActionResult } from '@sveltejs/kit';

	const { data } = $props();
	const { user, locale, lang } = data;
	let posts = $state(data.posts);

	const forwardGeocode = async (query: string) => {
		const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${query}&access_token=${env.PUBLIC_MAPBOX_TOKEN}&lang=${lang}&types=place,address&limit=1`;
		const res = await (await fetch(url)).json();
		const coordinates = res.features[0]?.properties?.coordinates;
		return { lng: coordinates?.longitude, lat: coordinates?.latitude };
	};

	let newPostInputs = $state([
		{
			type: 'text',
			label: 'Title',
			name: 'title',
			placeholder: 'Post title',
			required: true,
		},
		{
			type: 'text',
			label: 'Place',
			name: 'place',
			placeholder: 'The location of the post',
			required: true,
			value: '',
		},
		{
			type: 'hidden',
			label: '',
			name: 'lng',
			required: true,
		},
		{
			type: 'hidden',
			label: '',
			name: 'lat',
			required: true,
		},
		{
			type: 'textarea',
			label: 'Description',
			name: 'description',
			placeholder: 'Post description',
			required: true,
		},
	]);

	const createNewPost = async (_: () => void, formData: FormData) => {
		const coordinates = await forwardGeocode(newPostInputs[1].value!);
		formData.set('lng', coordinates.lng);
		formData.set('lat', coordinates.lat);

		return ({ result, update }: { result: ActionResult; update: () => void }) => {
			if (result.type === 'success') {
				posts.push(result.data?.post);
			}

			update();
		};
	};

	const updateUser = () => {
		return () => {};
	};
</script>

<div class="mx-auto max-w-4xl space-y-8 p-8">
	<section id="org">
		<ModularForm
			title="Organization Information"
			action="?/editUser"
			inputs={[
				{
					type: 'text',
					name: 'username',
					label: 'Username',
					required: true,
					placeholder: "The organization's username",
					value: user.username,
				},
				{
					type: 'text',
					name: 'name',
					label: 'Name',
					required: true,
					placeholder: "The organization's display name",
					value: user.name,
				},
				{
					type: 'email',
					name: 'email',
					label: 'Email',
					required: true,
					placeholder: "The organization's email",
					value: user.email,
				},
				{
					type: 'tel',
					name: 'phoneNumber',
					label: 'Phone Number',
					required: false,
					placeholder: "The organization's phone number",
					value: user.phoneNumber || undefined,
				},
				{
					type: 'text',
					name: 'website',
					label: 'Website',
					required: true,
					placeholder: "The organization's website",
					value: user.website,
				},
				{
					type: 'textarea',
					name: 'description',
					label: 'Description',
					required: true,
					placeholder: "The organization's description",
					value: user.description,
				},
			]}
			submit={[{ text: 'Save Changes', primary: true }]}
			onsubmit={updateUser}
		/>
	</section>

	<section id="posts">
		<ModularForm
			title={'Create a new Post'}
			titleLevel="h2"
			bind:inputs={newPostInputs}
			submit={[{ text: 'Create', action: '?/newPost', primary: true }]}
			onsubmit={createNewPost}
		/>

		{#each posts as post}
			<Post {post} {forwardGeocode} {lang} />
		{/each}
	</section>

	<section id="map">
		<Map bind:posts locale={locale.map} {lang} />
	</section>
</div>

<style lang="scss">
	#posts {
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
		flex-wrap: wrap;
	}

	#map {
		height: 80vh;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
