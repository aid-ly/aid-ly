<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	type Input = {
		type: string;
		label: string;
		placeholder?: string;
		name: string;
		required: boolean;
		value?: string;
	};

	type Props = {
		/* global HTMLElementTagNameMap */
		title:
			| string
			| { text: string; level?: keyof HTMLElementTagNameMap; url?: string; target?: string };
		action?: string;
		method?: 'get' | 'post';
		inputs: Input[];
		submit:
			| string
			| { text: string; action?: string; primary?: boolean; onclick?: (e: Event) => void }[];
		onsubmit?: (cancel: () => void, formData: FormData) => void;
		error?: string;
		classes?: string;
	};

	const {
		title,
		action,
		classes,
		method = 'post',
		inputs = $bindable(),
		error = $bindable(),
		submit,
		onsubmit,
	}: Props = $props();

	let form: HTMLFormElement;

	const _onsubmit = (cancel: () => void, formData: FormData) => {
		if (onsubmit) {
			return onsubmit(cancel, formData);
		}
	};

	onMount(() => {
		if (method === 'post') {
			enhance(form, ({ cancel, formData }: { cancel: () => void; formData: FormData }) =>
				_onsubmit(cancel, formData),
			);
		}
	});
</script>

<form {action} {method} bind:this={form} class={classes}>
	{#if typeof title === 'string'}
		<h1 class="title">{title}</h1>
	{:else}
		<svelte:element this={title.level ?? 'h1'} class="title">
			{#if title.url}
				<a href={title.url} target={title.target}>{title.text}</a>
			{:else}
				{title.text}
			{/if}
		</svelte:element>
	{/if}

	{#each inputs as input}
		<label for={input.name}>{input.label}</label>
		{#if input.type === 'textarea'}
			<textarea {...input} id={input.name} bind:value={input.value} rows="4" class="w-[100%]"
			></textarea>
		{:else}
			<input {...input} id={input.name} bind:value={input.value} />
		{/if}
	{/each}

	{#if error}
		<p class="error">{error}</p>
	{/if}

	{#if typeof submit === 'string'}
		<button type="submit">{submit}</button>
	{:else}
		<div class="actions">
			{#each submit as btn}
				<button
					type="submit"
					formaction={btn.action}
					class:primary={btn.primary}
					onclick={btn.onclick}
				>
					{btn.text}
				</button>
			{/each}
		</div>
	{/if}
</form>

<style lang="scss">
	form {
		margin: auto;
		padding: 1.5rem;
		padding-top: 0;
		background-color: white;
		border-radius: 0.75rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		max-width: 100%;

		.title {
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

		input,
		textarea {
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

		.actions {
			display: flex;
			gap: 20px;
			align-items: center;
			justify-content: space-between;
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
			transition: background-color 0.15s ease;

			&:hover {
				background-color: var(--color-red-500);
			}

			&.primary {
				background-color: var(--color-indigo-500);

				&:hover {
					background-color: var(--color-indigo-700);
				}
			}

			&:focus {
				box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
			}
		}
	}
</style>
