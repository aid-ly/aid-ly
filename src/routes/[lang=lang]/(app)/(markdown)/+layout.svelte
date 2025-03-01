<script lang="ts">
	import './style.css';
	const { children, data } = $props();
</script>

{@render children()}

<div class="md">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.html}
</div>

<style lang="scss">
	div {
		padding: 1.5rem;
		margin: 2.5rem 0;
		border-radius: 0.5rem;
		max-width: 48rem;
		background-color: #ffffff;
		box-shadow:
			0 10px 15px -3px rgba(0, 0, 0, 0.1),
			0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
</style>
