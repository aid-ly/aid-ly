<script lang="ts">
	const { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style lang="scss">
	main {
		margin: auto;
		padding: 1.5rem;
	}
</style>
