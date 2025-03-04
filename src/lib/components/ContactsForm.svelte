<script lang="ts">
	import type { Locale } from '../i18n';
	import { User, Building } from 'svelte-free-icons-solid';

	type Props = {
		email: string;
		selected: string;
		searchParamsSelector: string;
		locale: Locale['contacts'];
	};
	const { email, selected, searchParamsSelector, locale }: Props = $props();

	const updateSelection = (selection: string) => {
		const url = new URL(window.location.href);
		url.searchParams.set(searchParamsSelector, selection);
		window.history.replaceState(null, '', url);
	};

	let selection = $state(selected);

	$effect(() => {
		updateSelection(selection);
	});

	const submit = (e: Event) => {
		e.preventDefault();
		let url = `mailto:${email}`;

		if (selection === 'organization') {
			const contact = Object.entries(contacts)
				.map(([key, value]) => `${key}: ${value}`)
				.join('\n');
			url += `?subject=${encodeURIComponent(locale.mail.subject)}&body=${encodeURIComponent(`${locale.mail.about}\n${body}\n\n${locale.mail.contacts}\n${contact}\n${locale.org.name}: ${name}`)}`;
		} else {
			url += `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${body}\n\n${name}`)}`;
		}

		window.location.href = url;
	};

	let name = $state('');
	let body = $state('');
	let subject = $state('');
	let contacts = $state({ phone_number: '', email: '', website: '' });
</script>

<div class="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
	<!-- Tab Selection -->
	<div class="selection-tab mb-6 space-x-4">
		<button class:selected={selection === 'individual'} onclick={() => (selection = 'individual')}>
			<User color="#fff" />
			{locale.selector.ind}
		</button>
		<button
			class:selected={selection === 'organization'}
			onclick={() => (selection = 'organization')}
		>
			<Building color="#fff" />
			{locale.selector.org}
		</button>
	</div>

	<!-- Contact Form -->
	<form onsubmit={submit}>
		<h1 class="pb-1 text-2xl font-bold">
			{(selection === 'individual' ? locale.ind : locale.org).title}
		</h1>
		<div class="space-y-4">
			<div>
				<label for="name">{(selection === 'individual' ? locale.ind : locale.org).name}</label>
				<input type="text" id="name" required bind:value={name} />
			</div>

			{#if selection === 'individual'}
				<div>
					<label for="subject">{locale.ind.subject}</label>
					<input type="text" name="subject" id="subject" required bind:value={subject} />
				</div>
			{:else if selection === 'organization'}
				<div>
					<label for="phone_number">{locale.org.phone_number}</label>
					<input
						type="tel"
						name="phone_number"
						id="phone_number"
						required
						bind:value={contacts.phone_number}
					/>
				</div>
				<div>
					<label for="email">{locale.org.email}</label>
					<input type="email" name="email" id="email" required bind:value={contacts.email} />
				</div>
				<div>
					<label for="website">{locale.org.website}</label>
					<input type="text" name="website" id="website" required bind:value={contacts.website} />
				</div>
			{/if}
		</div>

		<div class="mt-6">
			<label for="message" class="block text-sm font-medium text-gray-700"
				>{(selection === 'individual' ? locale.ind : locale.org).message}</label
			>
			<textarea
				id="message"
				rows="5"
				cols="30"
				name="body"
				class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
				required
				bind:value={body}
			></textarea>
		</div>

		<div class="mt-6 text-center">
			<button
				type="submit"
				class="rounded-md bg-red-500 px-6 py-3 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
			>
				{locale.submit}
			</button>
		</div>
	</form>
</div>

<style lang="scss">
	button {
		cursor: pointer;
		color: #fff;
	}

	.selection-tab {
		display: flex;
		align-items: center;
		justify-content: center;

		button {
			padding: 12px;
			border-radius: 10px;
			display: flex;
			align-items: center;
			gap: 10px;
			background-color: #e54330;

			&.selected {
				cursor: auto;
				background-color: #fd331c;
			}
		}
	}

	form {
		label {
			display: block;
			font-size: 0.875rem;
			line-height: 1.25rem;
			font-weight: 500;
			color: #374151;
		}

		input {
			display: block;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			padding-left: 0.75rem;
			padding-right: 0.75rem;
			margin-top: 0.25rem;
			border-radius: 0.375rem;
			border-width: 1px;
			border-color: #d1d5db;
			width: 100%;
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		}
	}
</style>
