<script lang="ts">
	import { enhance } from '$app/forms';

	type Props = {
		title: string;
		inputs: {
			type: string;
			label: string;
			placeholder?: string;
			name: string;
			required: boolean;
			value?: string;
		}[];
		submit: string;
		onsubmit?: (cancel: () => void) => void;
		error?: string;
	};
	const { title, inputs, error = $bindable(), submit, onsubmit }: Props = $props();

	const _onsubmit = (cancel: () => void) => {
		if (onsubmit) {
			return onsubmit(cancel);
		}
	};
</script>

<form method="post" use:enhance={({ cancel }) => _onsubmit(cancel)}>
	<h1>{title}</h1>

	{#each inputs as input}
		<label for={input.name}>{input.label}</label>
		<input
			type={input.type}
			name={input.name}
			id={input.name}
			required={input.required}
			placeholder={input.placeholder}
			bind:value={input.value}
		/>
	{/each}

	{#if error}
		<p class="error">{error}</p>
	{/if}

	<button type="submit">{submit}</button>
</form>

<style lang="scss">
	form {
		max-width: 20rem;
		width: 500px;
		margin: auto;
		padding: 1.5rem;
		padding-top: 0;
		background-color: white;
		border-radius: 0.75rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

		h1 {
			font-size: 1.5rem;
			font-weight: bold;
			text-align: center;
			color: #4a4a4a;
			margin-bottom: 1.5rem;
		}

		label {
			display: block;
			font-size: 0.875rem;
			font-weight: 500;
			color: #4a4a4a;
			margin: 0.5rem 0;
		}

		input {
			width: 100%;
			padding: 0.5rem 1rem;
			border: 1px solid #d1d5db;
			border-radius: 0.375rem;
			outline: none;

			&:focus {
				border-color: var(--color-red-400);
				box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
			}
		}

		p.error {
			color: var(--color-red-600);
			padding-top: 10px;
			text-align: center;
			font-weight: 450;
		}

		button {
			width: 100%;
			background-color: var(--color-red-400);
			color: white;
			padding: 0.5rem;
			border-radius: 0.375rem;
			font-weight: 500;
			cursor: pointer;
			outline: none;
			margin-top: 10px;

			&:hover {
				background-color: var(--color-red-500);
			}

			&:focus {
				box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
			}
		}
	}
</style>
