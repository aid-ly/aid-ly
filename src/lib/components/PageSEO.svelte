<script lang="ts">
	import { common, type Language, type Locale } from '$lib/i18n';
	import Seo from './SEO.svelte';

	type Props = { locale: Locale['seo']; lang: Language; page: keyof Locale['seo'] };
	const { locale, lang, page }: Props = $props();

	const info = locale[page.split('/')[0] as keyof Locale['seo']];
</script>

<svelte:head>
	<Seo
		title={`${common.project.name} | ${info.title}`}
		description={info.description}
		{lang}
		{page}
	/>
</svelte:head>
