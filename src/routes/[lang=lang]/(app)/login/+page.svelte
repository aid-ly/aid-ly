<script lang="ts">
	import ModularForm from '$lib/components/ModularForm.svelte';

	const { data, form } = $props();

	const { locale } = data;
	let error = $derived(form?.error);

	let inputs = $state([
		{ type: 'email', name: 'email', label: locale.login.form.email, required: true },
		{ type: 'password', name: 'password', label: locale.login.form.password, required: true },
	]);
</script>

<ModularForm
	title={locale.login.form.title}
	bind:inputs
	submit={locale.login.form.submit}
	classes="w-100"
	{error}
/>
