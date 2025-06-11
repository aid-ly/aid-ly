<script lang="ts">
	import { Bars } from 'svelte-free-icons-solid';
	import { AVAILABLE_LANGUAGES, icons, type Language, type Locale } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { animateScroll } from 'svelte-scrollto-element';
	import { page } from '$app/state';
	import Dropdown from './Dropdown.svelte';

	type Props = { locale: Locale['header']; lang: Language; currPage: string };
	const { locale, lang, currPage }: Props = $props();

	let showMenu = $state(false);

	const toggleNavbar = () => {
		showMenu = !showMenu;
	};

	const scrollTo = (element: string) => {
		if (!AVAILABLE_LANGUAGES.includes(page.url.pathname.replaceAll('/', '') as Language)) {
			goto(`/${lang}/${element}`);
		}

		animateScroll.scrollTo({ element });
	};

	const contributeActions = [
		[() => scrollTo('#map-section'), () => scrollTo('#share'), () => goto(`/${lang}/donate`)],
		[() => goto(`/${lang}/contacts?type=organization`)],
	];

	const changeLanguage = (e: Event & { target: { value: string } }) => {
		window.location.href = `/${e.target.value}/${currPage}`;
	};
</script>

<header>
	<nav class="container mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
		<div class="flex w-[100%] items-center justify-between">
			<a class="no-style text-xl font-bold hover:text-red-400 md:text-2xl" href="/">
				<img src="/logo.svg" alt={locale.logo.alt} width="70" height="70" />
				<span>aid-ly</span>
			</a>

			<div class="flex items-center gap-4">
				<div class="mr-1 md:mr-10">
					<label for="language">
						<span class="sr-only">{locale.language}</span>
					</label>
					<select
						id="language"
						name="language"
						class="px-3 text-sm"
						onchange={(e) => changeLanguage(e as unknown as Event & { target: { value: string } })}
						aria-label={locale.language}
					>
						{#each AVAILABLE_LANGUAGES as language}
							<option value={language} selected={language === lang} disabled={language === lang}>
								{icons[language]}
								{language.toUpperCase()}
							</option>
						{/each}
					</select>
				</div>

				<div class="md:hidden">
					<button type="button" onclick={toggleNavbar} aria-label="burger">
						<Bars color="black" size="20px" />
					</button>
				</div>
			</div>
		</div>

		<ul
			class="mt-2 flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10"
			class:hidden={!showMenu}
			class:flex={showMenu}
		>
			<li>
				<a href="/{lang}/">
					{locale.ul.home}
				</a>
			</li>

			<li>
				<a href="/{lang}/contacts">
					{locale.ul.contacts}
				</a>
			</li>
			<li>
				<a href="/{lang}/faq">
					{locale.ul.faq}
				</a>
			</li>
			<li>
				<Dropdown
					title={locale.ul.contribute.label}
					options={locale.ul.contribute.options}
					onselected={(selected) => contributeActions[selected.group][selected.item]()}
				/>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		position: sticky;
		color: #000000;

		nav {
			> div {
				a {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
				}

				button {
					cursor: pointer;
					padding: 10px;
					margin-right: 5px;
				}
			}

			@media (max-width: 768px) {
				ul {
					border: 1px solid rgba(55, 65, 81, 0.5);
					border-radius: 0.5rem;
					background-color: rgba(0, 0, 0, 0.05);

					li {
						padding: 0 20px;

						&:first-child {
							padding-top: 15px;
						}

						&:last-child {
							padding-bottom: 15px;
						}
					}
				}
			}
		}
	}
</style>
