<script lang="ts">
	import { env } from '$env/dynamic/public';
	import ContactsForm from '$lib/components/ContactsForm.svelte';

	const { data } = $props();
</script>

<ContactsForm
	email={env.PUBLIC_CONTACTS_EMAIL}
	selected={data.selected || 'individual'}
	searchParamsSelector={data.searchParamsSelector}
	locale={data.locale.contacts}
/>
