<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Map from '$lib/components/Map.svelte';
	import ModularForm from '$lib/components/ModularForm.svelte';
	import Post from '$lib/components/org/Post.svelte';
	import { MapBox } from '$lib/helpers';
	import type { ActionResult } from '@sveltejs/kit';

	const { data } = $props();
	const { user, locale, lang } = data;
	let posts = $state(data.posts);

	let newPostInputs = $state([
		{
			type: 'text',
			label: locale.orgAdmin.posts.inputs.title.label,
			name: 'title',
			placeholder: locale.orgAdmin.posts.inputs.title.placeholder,
			required: true,
		},
		{
			type: 'text',
			label: locale.orgAdmin.posts.inputs.place.label,
			name: 'place',
			placeholder: locale.orgAdmin.posts.inputs.place.placeholder,
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
			label: locale.orgAdmin.posts.inputs.description.label,
			name: 'description',
			placeholder: locale.orgAdmin.posts.inputs.description.placeholder,
			required: true,
		},
	]);

	const mapbox = new MapBox(env.PUBLIC_MAPBOX_TOKEN, lang);

	const createNewPost = async (_: () => void, formData: FormData) => {
		const coordinates = await mapbox.forwardGeocode(newPostInputs[1].value!);
		formData.set('lng', coordinates.lng.toString());
		formData.set('lat', coordinates.lat.toString());

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
			title={locale.orgAdmin.form.title}
			action="?/editUser"
			inputs={[
				{
					type: 'text',
					name: 'username',
					label: locale.orgAdmin.form.inputs.username.label,
					required: true,
					placeholder: locale.orgAdmin.form.inputs.username.placeholder,
					value: user.username,
				},
				{
					type: 'text',
					name: 'name',
					label: locale.orgAdmin.form.inputs.name.label,
					required: true,
					placeholder: locale.orgAdmin.form.inputs.name.placeholder,
					value: user.name,
				},
				{
					type: 'email',
					name: 'email',
					label: locale.orgAdmin.form.inputs.email.label,
					required: true,
					placeholder: locale.orgAdmin.form.inputs.email.placeholder,
					value: user.email,
				},
				{
					type: 'tel',
					name: 'phoneNumber',
					label: locale.orgAdmin.form.inputs.phoneNumber.label,
					required: false,
					placeholder: locale.orgAdmin.form.inputs.phoneNumber.placeholder,
					value: user.phoneNumber || undefined,
				},
				{
					type: 'text',
					name: 'website',
					label: locale.orgAdmin.form.inputs.website.label,
					required: true,
					placeholder: locale.orgAdmin.form.inputs.website.placeholder,
					value: user.website,
				},
				{
					type: 'textarea',
					name: 'description',
					label: locale.orgAdmin.form.inputs.description.label,
					required: true,
					placeholder: locale.orgAdmin.form.inputs.description.placeholder,
					value: user.description,
				},
			]}
			submit={[{ text: locale.orgAdmin.form.submit, primary: true }]}
			onsubmit={() => () => {}}
		/>
	</section>

	<section id="posts">
		<ModularForm
			title={{ text: locale.orgAdmin.posts.create.title, level: 'h2' }}
			bind:inputs={newPostInputs}
			submit={[{ text: locale.orgAdmin.posts.create.submit, action: '?/newPost', primary: true }]}
			onsubmit={createNewPost}
		/>

		{#each posts as post}
			<Post {post} {mapbox} {lang} locale={locale.orgAdmin.posts} />
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
