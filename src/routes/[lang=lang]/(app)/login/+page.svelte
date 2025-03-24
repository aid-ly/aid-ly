<script lang="ts">
	import ModularForm from '$lib/components/ModularForm.svelte';

	const { data, form } = $props();

	const { locale } = data;
	let error = $state(form?.error);
</script>

<ModularForm
	title={locale.login.form.title}
	inputs={[
		{ type: 'text', name: 'username', label: locale.login.form.username, required: true },
		{ type: 'password', name: 'password', label: locale.login.form.password, required: true },
	]}
	submit={locale.login.form.submit}
	bind:error
/>
