<script lang="ts">
	import { env } from '$env/dynamic/public';
	import ContactsForm from '$project/src/lib/components/ContactsForm.svelte';

	export let data;
</script>

<ContactsForm
	email={env.PUBLIC_CONTACTS_EMAIL}
	selected={data.selected || 'individual'}
	searchParamsSelector={data.searchParamsSelector}
	locale={data.locale.contacts}
/>
