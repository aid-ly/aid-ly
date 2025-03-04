<script lang="ts">
	import type { Locale } from '$lib/i18n';
	import type { SafeUserWithPosts } from '$lib/types/User';
	import { Plus } from 'svelte-free-icons-solid';

	type Props = {
		locale: Locale['admin']['console'];
		organizations: SafeUserWithPosts[];
		itemsPerPage: number;
	};
	const { locale, organizations, itemsPerPage }: Props = $props();

	const postsCount = organizations.reduce((acc, curr) => acc + curr.posts.length, 0);
	const organizationsCount = organizations.length;

	let currentPage = $state(1);

	const paginatedOrgs = $derived(
		organizations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
	);

	const formatDate = (date: Date) =>
		`${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

	const nextPage = () => {
		if (currentPage < Math.ceil(organizations.length / itemsPerPage)) {
			currentPage++;
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			currentPage--;
		}
	};
</script>

<h1>{locale.title}</h1>

<section id="stats" class="shadow">
	<div>
		<strong>{locale.stats.posts}:</strong>
		{postsCount}
		<span class="mx-4">|</span>
		<strong>{locale.stats.orgs}:</strong>
		{organizationsCount}
	</div>
</section>

<section id="orgs" class="shadow">
	<div class="mb-4 flex items-center justify-between">
		<h2 class="text-2xl font-semibold">Organizations</h2>
		<a
			href="org/new"
			title={locale.orgs.create}
			class="rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
		>
			<Plus color="#fff" class="h-5 w-5" />
		</a>
	</div>

	<table class="w-full border-collapse border border-gray-300">
		<thead class="bg-gray-200">
			<tr>
				{#each locale.orgs.table.head as th}
					<th>{th}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each paginatedOrgs as org}
				<tr class="odd:bg-white even:bg-gray-50">
					<td><a href="org/{org.id}">{org.id}</a></td>
					<td>{org.username}</td>
					<td>{org.name}</td>
					<td><a href="mailto:{org.email}">{org.email}</a></td>
					<td>
						{#if org.phoneNumber}
							<a href="tel:{org.phoneNumber}">{org.phoneNumber}</a>
						{:else}
							N/A
						{/if}
					</td>
					<td><a href={org.website} target="_blank">{org.website}</a></td>
					<td>{org.description}</td>
					<td>{formatDate(org.createdAt)}</td>
					<td>{formatDate(org.updatedAt)}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div id="pagination" class="mt-4 flex items-center justify-between">
		<button onclick={prevPage} disabled={currentPage === 1}>
			{locale.orgs.table.pagination.previous}
		</button>

		<span class="text-lg">
			{locale.orgs.table.pagination.page}
			{currentPage}
			{locale.orgs.table.pagination.of}
			{Math.ceil(organizations.length / itemsPerPage)}
		</span>

		<button
			onclick={nextPage}
			disabled={currentPage >= Math.ceil(organizations.length / itemsPerPage)}
		>
			{locale.orgs.table.pagination.next}
		</button>
	</div>
</section>

<style lang="scss">
	h1 {
		margin-bottom: 1.5rem;
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
		color: #1f2937;
	}

	section {
		border-radius: 0.5rem;
		background-color: #ffffff;

		&#stats {
			padding: 1rem;
			margin-bottom: 1.5rem;

			div {
				font-size: 1.125rem;
				line-height: 1.75rem;
			}
		}

		&#orgs {
			padding: 1.5rem;

			table {
				td,
				th {
					padding: 0.5rem;
					border-width: 1px;
					border-color: #d1d5db;
				}
			}

			div#pagination {
				button {
					padding-top: 0.5rem;
					padding-bottom: 0.5rem;
					padding-left: 1rem;
					padding-right: 1rem;
					border-radius: 0.25rem;
					background-color: #d1d5db;
					cursor: pointer;

					&:disabled {
						opacity: 0.5;
						cursor: auto;
					}
				}
			}
		}
	}
</style>
