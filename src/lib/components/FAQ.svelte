<script lang="ts">
	const { question, answer }: { question: string; answer: string } = $props();
</script>

<details class="group rounded-xl border border-gray-200 bg-white p-4 shadow">
	<summary class="flex cursor-pointer items-center justify-between text-lg font-medium">
		{question}
		<span class="ml-2 transition-transform group-open:rotate-180"> ▼ </span>
	</summary>
	<p class="mt-2 text-gray-600">
		{answer}
	</p>
</details>

<style lang="scss">
	details[open] {
		summary ~ p {
			animation: expand 0.3s ease-in-out forwards;
		}
	}

	@keyframes expand {
		from {
			opacity: 0;
			transform: translateY(-5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
