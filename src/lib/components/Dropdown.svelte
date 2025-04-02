<script lang="ts">
	type Props = {
		title: string;
		options: { group: string; items: string[] }[];
		onselected: (selected: { group: number; item: number }) => void;
		defaultValue?: string;
	};

	const { title, options, onselected, defaultValue = 'default' }: Props = $props();
	const id = `select_${title
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-_]/g, '')
		.replace(/^(\d)/, '_$1')}`;
	let selected = $state(defaultValue);

	const onchange = (event: Event) => {
		selected = defaultValue;
		onselected(JSON.parse((event.target as HTMLSelectElement).value));
	};
</script>

<div class="relative w-64">
	<label for={id} hidden>{title}</label>
	<select bind:value={selected} {onchange} {id}>
		<option value="default" disabled selected hidden id="default">{title}</option>

		{#each options as { group, items }, groupIndx}
			<optgroup label={group}>
				{#each items as item, itemIndx}
					<option value={JSON.stringify({ group: groupIndx, item: itemIndx })}>{item}</option>
				{/each}
			</optgroup>
		{/each}
	</select>
</div>

<style lang="scss">
	select {
		border: none;
		background-color: inherit;
		cursor: pointer;
		padding-bottom: 5px;

		option#default {
			color: blue;
		}
	}
</style>
