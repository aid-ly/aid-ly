<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	const { children, data } = $props();
	const { locale, lang, version, page } = data;
</script>

<Header locale={locale.header} {lang} currPage={page} />

<main>
	{@render children()}
</main>

<Footer locale={locale.footer} {version} />

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 70vh;
	}
</style>
