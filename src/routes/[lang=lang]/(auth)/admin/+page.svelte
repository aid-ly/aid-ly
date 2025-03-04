<script lang="ts">
	import AdminConsole from '$lib/components/admin/Console.svelte';

	const { data } = $props();
	const { locale, organizations } = data;
</script>

<AdminConsole locale={locale.admin.console} {organizations} itemsPerPage={10} />
