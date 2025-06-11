<script lang="ts">
	import { common, type Locale } from '$lib/i18n';
	import { Github } from 'svelte-free-icons-brands';

	const { locale, version }: { locale: Locale['footer']; version: string } = $props();

	const year = new Date().getFullYear();
</script>

<footer>
	<div id="links" class="justify-between sm:justify-around">
		<div>
			<h2>
				{locale.resources.title}
			</h2>
			<ul>
				<li>
					<a href={locale.resources.contacts.url}>{locale.resources.contacts.display}</a>
				</li>
				<li>
					<a href={locale.resources.faq.url}>{locale.resources.faq.display}</a>
				</li>
				<li>
					<a href={locale.resources.donate.url}>{locale.resources.donate.display}</a>
				</li>
				<li>
					<a href={locale.resources.login.url}>{locale.resources.login.display}</a>
				</li>
				<li>
					<a href={locale.resources.orgPortal.url}>{locale.resources.orgPortal.display}</a>
				</li>
			</ul>
		</div>

		<div>
			<h2>
				{locale.legal.title}
			</h2>
			<ul>
				<li>
					<a href={locale.legal.policy.url}>{locale.legal.policy.display}</a>
				</li>
				<li>
					<a href={locale.legal.terms.url}>{locale.legal.terms.display}</a>
				</li>
				<li>
					<a href={common.license.url}>{locale.legal.license}</a>
				</li>
			</ul>
		</div>

		<div>
			<h2>
				{locale.credits.title}
			</h2>
			<ul>
				<li>
					<a href={common.project.owner.website} title={locale.credits.creator}>
						{common.project.owner.name}
					</a>
				</li>
				<li>
					<a href={common.credits.icons} target="_blank" rel="noopener noreferrer"
						>{locale.credits.icons}</a
					>
				</li>
				<li>
					<a href={common.credits.maps} target="_blank" rel="noopener noreferrer"
						>{locale.credits.maps}</a
					>
				</li>
			</ul>
		</div>
	</div>

	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

	<div id="socials" class="sm:flex sm:items-center sm:justify-between">
		<span class="sm:text-center">
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

<style lang="scss">
	footer {
		background-color: var(--color-gray-800);
		padding: 1rem;
		width: 100vw;

		> div {
			&#links {
				display: flex;

				gap: 20px;
				flex-direction: row;
				flex-wrap: wrap;

				> div {
					padding: 10px;

					h2 {
						margin-bottom: 1.5rem;
						font-size: 0.875rem;
						line-height: 1.25rem;
						font-weight: 600;
						color: #ffffff;
						text-transform: uppercase;
					}

					ul {
						color: var(--color-gray-400);

						li {
							margin-bottom: 1rem;
						}
					}
				}
			}

			&#socials {
				span {
					display: block;
					font-size: 0.875rem;
					line-height: 1.25rem;
					color: var(--color-gray-400);
				}
			}
		}
	}
</style>
