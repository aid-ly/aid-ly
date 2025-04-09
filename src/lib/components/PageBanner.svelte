<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: {
			text: string;
			colorClass?: string;
		};
		children: Snippet;
	};
	const { title, children }: Props = $props();
</script>

<section class="m-auto w-full max-w-2xl rounded-2xl bg-white p-10 text-center shadow-xl">
	<h1 class="mb-6 text-4xl font-bold {title.colorClass}">{title.text}</h1>

	{@render children()}
</section>
