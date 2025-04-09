<script lang="ts">
	import PageBanner from '$lib/components/PageBanner.svelte';

	const { data } = $props();
	const {
		locale: {
			donate: { thanks: locale },
		},
	} = data;
</script>

<PageBanner title={{ text: locale.title, colorClass: 'text-green-700' }}>
	<p class="mb-4 text-lg text-gray-700">{locale.description}</p>
	<p class="text-md text-gray-600">{locale.motto}</p>
</PageBanner>
