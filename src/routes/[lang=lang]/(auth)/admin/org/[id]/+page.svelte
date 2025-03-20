<script lang="ts">
	import OrgView from '$lib/components/admin/OrgView.svelte';

	const { data } = $props();
	const { org, locale } = data;
</script>

<OrgView locale={locale.admin.org.view} {org} />
