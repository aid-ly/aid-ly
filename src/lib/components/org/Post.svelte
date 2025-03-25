<script lang="ts">
	import ModularForm from '$lib/components/ModularForm.svelte';
	import { env } from '$env/dynamic/public';
	import type { SafePostWithUser } from '$lib/types/User';
	import { onMount } from 'svelte';
	import { getFullLocale, type Language, type Locale } from '$lib/i18n';
	import type { ActionResult } from '@sveltejs/kit';

	type Props = {
		post: SafePostWithUser;
		forwardGeocode: (query: string) => Promise<{ lat: number; lng: number }>;
		locale: Locale['org']['posts'];
		lang: Language;
	};

	const { post, forwardGeocode, locale, lang }: Props = $props();

	let inputs = $state([
		{
			type: 'text',
			label: locale.inputs.title.label,
			name: 'title',
			placeholder: locale.inputs.title.placeholder,
			required: true,
			value: post.title,
		},
		{
			type: 'text',
			label: locale.inputs.place.label,
			name: 'place',
			placeholder: locale.inputs.place.placeholder,
			required: true,
			value: locale.inputs.place.loading,
		},
		{
			type: 'hidden',
			label: '',
			name: 'lng',
			required: true,
			value: post.lng.toString(),
		},
		{
			type: 'hidden',
			label: '',
			name: 'lat',
			required: true,
			value: post.lat.toString(),
		},
		{
			type: 'textarea',
			label: locale.inputs.description.label,
			name: 'description',
			placeholder: locale.inputs.description.placeholder,
			required: true,
			value: post.description,
		},
		{
			type: 'hidden',
			label: '',
			name: 'id',
			required: true,
			value: post.id,
		},
	]);

	let show = $state(true);

	const reverseGeocode = async (lat: number, lng: number) =>
		(
			await (
				await fetch(
					`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${env.PUBLIC_MAPBOX_TOKEN}&language=${getFullLocale(lang)}`,
				)
			).json()
		).features[0]?.place_name;

	const onsubmit = async (_: () => void, formData: FormData) => {
		const coordinates = await forwardGeocode(inputs[1].value!);
		formData.set('lng', coordinates.lng?.toString());
		formData.set('lat', coordinates.lat?.toString());

		return ({ result }: { result: ActionResult }) => {
			if (result.type === 'success') {
				if (!result.data?.post) {
					show = false;
				}
			}
		};
	};

	const confirmDelete = (e: Event) => {
		if (!confirm('Do you really want to delete this post?')) {
			e.preventDefault();
		}
	};

	onMount(async () => {
		inputs[1].value = await reverseGeocode(post.lat, post.lng);
	});
</script>

{#if show}
	<ModularForm
		title={{ text: locale.title, url: `/${lang}/post/${post.id}`, target: '_blank' }}
		bind:inputs
		submit={[
			{ text: 'Save Post', action: '?/editPost', primary: true },
			{ text: 'Delete Post', action: '?/deletePost', onclick: confirmDelete },
		]}
		{onsubmit}
	/>
{/if}
