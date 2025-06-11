<script lang="ts">
	import FAQ from '$lib/components/FAQ.svelte';

	const { data } = $props();
	const {
		locale: { faq: locale },
	} = data;
</script>

<div>
	<h1>{locale.title}</h1>
	<section>
		<h2>{locale.volunteers}</h2>
		{#each locale.faqs.volunteers as faq}
			<FAQ {...faq} />
		{/each}
	</section>

	<section>
		<h2>{locale.organizations}</h2>
		{#each locale.faqs.organizations as faq}
			<FAQ {...faq} />
		{/each}
	</section>
</div>

<style lang="scss">
	div {
		width: 80%;
		height: 100%;

		h1 {
			font-size: 1.5rem;
			font-weight: bold;
			text-align: center;
			color: #4a4a4a;
			margin-bottom: 1.5rem;
		}

		h2 {
			font-size: 1.2rem;
			font-weight: bold;
			color: #4a4a4a;
			margin-bottom: 1.5rem;
		}

		section {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-bottom: 100px;
		}
	}
</style>
