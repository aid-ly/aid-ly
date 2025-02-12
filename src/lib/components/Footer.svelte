<script lang="ts">
	import { common, type Locale } from '$lib/i18n';
	import { Github } from 'svelte-free-icons-brands';

	const { locale, version }: { locale: Locale['footer']; version: string } = $props();

	const year = new Date().getFullYear();
</script>

<footer class="bg-white p-4 sm:p-6 dark:bg-gray-800">
	<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
				{locale.resources.title}
			</h2>
			<ul class="text-gray-600 dark:text-gray-400">
				<li class="mb-4">
					<a href={locale.resources.contacts.url}>{locale.resources.contacts.display}</a>
				</li>
				<li class="mb-4">
					<a href={locale.resources.donate.url}>{locale.resources.donate.display}</a>
				</li>
				<li class="mb-4">
					<a href={locale.resources.login.url}>{locale.resources.login.display}</a>
				</li>
				<li class="mb-4">
					<a href={locale.resources.orgPortal.url}>{locale.resources.orgPortal.display}</a>
				</li>
			</ul>
		</div>

		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
				{locale.legal.title}
			</h2>
			<ul class="text-gray-600 dark:text-gray-400">
				<li class="mb-4">
					<a href={locale.legal.policy.url}>{locale.legal.policy.display}</a>
				</li>
				<li class="mb-4">
					<a href={locale.legal.terms.url}>{locale.legal.terms.display}</a>
				</li>
				<li class="mb-4">
					<a href={common.license.url}>{locale.legal.license}</a>
				</li>
			</ul>
		</div>

		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
				{locale.credits.title}
			</h2>
			<ul class="text-gray-600 dark:text-gray-400">
				<li class="mb-4">
					<a href={common.project.owner.website} title={locale.credits.creator}>
						{common.project.owner.name}
					</a>
				</li>
				<li class="mb-4">
					<a href={common.credits.icons} target="_blank" rel="noopener noreferrer"
						>{locale.credits.icons}</a
					>
				</li>
				<li class="mb-4">
					<a href={common.credits.maps} target="_blank" rel="noopener noreferrer"
						>{locale.credits.maps}</a
					>
				</li>
			</ul>
		</div>
	</div>

	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

	<div class="sm:flex sm:items-center sm:justify-between">
		<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
			&copy; 2025 {year === 2025 ? '' : `- ${year}`}
			<a property="dct:title" rel="cc:attributionURL" href={common.project.url}
				>{common.project.name} v{version}</a
			>
			{locale.license.by}
			<a
				rel="cc:attributionURL dct:creator"
				property="cc:attributionName"
				href={common.project.owner.website}
			>
				{common.project.owner.name}
			</a>
			{locale.license.under}
			<a href={common.license.url} target="_blank" rel="license noopener noreferrer">
				{common.license.name}
			</a>
		</span>

		<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
			<a href={common.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub">
				<Github color="grey" />
			</a>
		</div>
	</div>
</footer>
