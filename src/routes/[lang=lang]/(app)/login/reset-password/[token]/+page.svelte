<script lang="ts">
	import ModularForm from '$lib/components/ModularForm.svelte';

	const { data } = $props();
	const locale = data.locale.login.resetPassword;

	let error: string | undefined = $state();

	const inputs = [
		{
			type: 'password',
			label: 'New password',
			name: 'password',
			placeholder: 'New Password',
			required: true,
			value: '',
		},
		{
			type: 'password',
			label: 'Confirm password',
			name: 'confirm_password',
			placeholder: 'Confirm the new password',
			required: true,
			value: '',
		},
	];

	const onsubmit = (cancel: () => void) => {
		if (inputs[0].value !== inputs[1].value) {
			error = locale.passwords_dont_match;
			cancel();
		}
	};
</script>

<ModularForm title={locale.form.title} {inputs} submit="Reset" bind:error {onsubmit} />
