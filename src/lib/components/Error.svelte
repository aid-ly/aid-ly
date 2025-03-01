<script lang="ts">
	type Props = { code: number; error?: string; cta: string | null };
	const { code, error, cta }: Props = $props();
</script>

<div>
	<h1>{code}</h1>
	{#if error}
		<p>{error}</p>
	{/if}
	{#if cta}
		<a href="/">{cta}</a>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;

		h1 {
			font-size: 6rem;
			line-height: 1;
			font-weight: 700;
			color: var(--color-red-500);
		}

		p {
			font-size: 2.25rem;
			line-height: 2.5rem;
			font-weight: 500;
			color: var(--color-gray-800);
		}

		a {
			margin-top: 1rem;
			font-size: 1.25rem;
			line-height: 1.75rem;
			color: var(--color-blue-600);
		}
	}
</style>
