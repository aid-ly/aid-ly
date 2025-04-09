<script>
	import PageBanner from '$lib/components/PageBanner.svelte';
	import { common } from '$lib/i18n';

	const { data } = $props();
	const {
		locale: {
			donate: { cancel: locale },
		},
		lang,
	} = data;
</script>

<PageBanner title={{ text: locale.title, colorClass: 'text-red-600' }}>
	<p class="text-md mb-6 text-left text-gray-600">{locale.contribute.description}</p>
	<ul class="mb-6 list-inside list-disc space-y-2 text-left text-gray-700">
		<li><a href="/{lang}/#share">{locale.contribute.spread}</a></li>
		<li><a href={common.project.githubUrl}>{locale.contribute.star}</a></li>
		<li>
			<a href="{common.project.githubUrl}/blob/main/CONTRIBUTING.md">{locale.contribute.code}</a>
		</li>
	</ul>
	<p class="text-sm text-gray-600">{locale.contribute.thanks}</p>
</PageBanner>
