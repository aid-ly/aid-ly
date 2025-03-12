<script lang="ts">
	import NewOrgForm from '$lib/components/admin/NewOrgForm.svelte';

	const { data } = $props();
	const { locale } = data;
</script>

<NewOrgForm locale={locale.admin.org.new} />
