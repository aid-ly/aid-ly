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
			label: locale.org.posts.inputs.title.label,
			name: 'title',
			placeholder: locale.org.posts.inputs.title.placeholder,
			required: true,
		},
		{
			type: 'text',
			label: locale.org.posts.inputs.place.label,
			name: 'place',
			placeholder: locale.org.posts.inputs.place.placeholder,
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
			label: locale.org.posts.inputs.description.label,
			name: 'description',
			placeholder: locale.org.posts.inputs.description.placeholder,
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
</script>

<div class="mx-auto max-w-4xl space-y-8 p-8">
	<section id="org">
		<ModularForm
			title={locale.org.form.title}
			action="?/editUser"
			inputs={[
				{
					type: 'text',
					name: 'username',
					label: locale.org.form.inputs.username.label,
					required: true,
					placeholder: locale.org.form.inputs.username.placeholder,
					value: user.username,
				},
				{
					type: 'text',
					name: 'name',
					label: locale.org.form.inputs.name.label,
					required: true,
					placeholder: locale.org.form.inputs.name.placeholder,
					value: user.name,
				},
				{
					type: 'email',
					name: 'email',
					label: locale.org.form.inputs.email.label,
					required: true,
					placeholder: locale.org.form.inputs.email.placeholder,
					value: user.email,
				},
				{
					type: 'tel',
					name: 'phoneNumber',
					label: locale.org.form.inputs.phoneNumber.label,
					required: false,
					placeholder: locale.org.form.inputs.phoneNumber.placeholder,
					value: user.phoneNumber || undefined,
				},
				{
					type: 'text',
					name: 'website',
					label: locale.org.form.inputs.website.label,
					required: true,
					placeholder: locale.org.form.inputs.website.placeholder,
					value: user.website,
				},
				{
					type: 'textarea',
					name: 'description',
					label: locale.org.form.inputs.description.label,
					required: true,
					placeholder: locale.org.form.inputs.description.placeholder,
					value: user.description,
				},
			]}
			submit={[{ text: locale.org.form.submit, primary: true }]}
			onsubmit={() => () => {}}
		/>
	</section>

	<section id="posts">
		<ModularForm
			title={{ text: locale.org.posts.create.title, level: 'h2' }}
			bind:inputs={newPostInputs}
			submit={[{ text: locale.org.posts.create.submit, action: '?/newPost', primary: true }]}
			onsubmit={createNewPost}
		/>

		{#each posts as post}
			<Post {post} {forwardGeocode} {lang} locale={locale.org.posts} />
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
