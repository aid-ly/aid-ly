<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import type { SafeUser } from '$lib/types/User';

	const { org, locale }: { org: SafeUser; locale: Locale['admin']['org']['view'] } = $props();

	const confirmDelete = (e: Event) => !confirm(locale.confirmDelete) && e.preventDefault();
</script>

<form action="?/update" method="post" class="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow">
	<h1 class="text-2xl font-bold">{locale.title}</h1>

	<label class="mt-4 block">
		<span class="text-gray-700">{locale.form.name}</span>
		<input
			type="text"
			name="name"
			value={org.name}
			class="mt-1 w-full rounded border p-2"
			required
		/>
	</label>

	<label class="mt-4 block">
		<span class="text-gray-700">{locale.form.username}</span>
		<input
			type="text"
			name="username"
			value={org.username}
			class="mt-1 w-full rounded border p-2"
			required
		/>
	</label>

	<label class="mt-4 block">
		<span class="text-gray-700">{locale.form.email}</span>
		<input
			type="email"
			name="email"
			value={org.email}
			class="mt-1 w-full rounded border p-2"
			required
		/>
	</label>

	<label class="mt-4 block">
		<span class="text-gray-700">{locale.form.phoneNumber}</span>
		<input
			type="tel"
			name="phoneNumber"
			value={org.phoneNumber}
			class="mt-1 w-full rounded border p-2"
		/>
	</label>

	<label class="mt-4 block">
		<span class="text-gray-700">{locale.form.website}</span>
		<input
			type="url"
			name="website"
			value={org.website}
			class="mt-1 w-full rounded border p-2"
			required
		/>
	</label>

	<label class="mt-4 block">
		<span class="text-gray-700">{locale.form.description}</span>
		<textarea
			name="description"
			value={org.description}
			class="mt-1 w-full rounded border p-2"
			required
		></textarea>
	</label>

	<button type="submit" class="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
		>{locale.form.update}</button
	>
	<button
		type="submit"
		class="mt-4 rounded bg-red-500 px-4 py-2 text-white"
		formaction="?/delete"
		onclick={confirmDelete}>{locale.form.delete}</button
	>
</form>
