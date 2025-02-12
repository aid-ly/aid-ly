<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	const { children, data } = $props();
</script>

<Header locale={data.locale.header} lang={data.lang} />

<main>
	{@render children()}
</main>

<Footer locale={data.locale.footer} version={data.version} />

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 70vh;
	}
</style>
