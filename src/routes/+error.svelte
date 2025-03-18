<script lang="ts">
	import { page } from '$app/state';
	import Error from '$lib/components/Error.svelte';
</script>

<Error
	code={page.status}
	error={page.error?.message}
	cta={page.error?.cta || { message: 'Go back home', url: '/' }}
/>
