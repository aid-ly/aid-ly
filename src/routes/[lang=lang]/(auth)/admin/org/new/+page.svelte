<script lang="ts">
	import type { Locale } from '$lib/i18n';

	const { locale }: { locale: Locale['admin']['org']['new'] } = $props();
</script>

<section>
	<h1 class="mb-6 text-2xl font-semibold text-gray-800">{locale.title}</h1>

	<form method="post" class="space-y-4">
		<div>
			<label for="username" class="block text-sm font-medium text-gray-700">
				{locale.form.username}
			</label>
			<input
				type="text"
				name="username"
				id="username"
				required
				class="focus:ring focus:ring-blue-300 focus:outline-none"
			/>
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-gray-700">{locale.form.email}</label>
			<input
				type="email"
				name="email"
				id="email"
				required
				class="focus:ring focus:ring-blue-300 focus:outline-none"
			/>
		</div>

		<div>
			<label for="phoneNumber" class="block text-sm font-medium text-gray-700"
				>{locale.form.phoneNumber}</label
			>
			<input
				type="tel"
				name="phoneNumber"
				id="phoneNumber"
				class="focus:ring focus:ring-blue-300 focus:outline-none"
			/>
		</div>

		<div>
			<label for="website" class="block text-sm font-medium text-gray-700"
				>{locale.form.website}</label
			>
			<input
				type="text"
				name="website"
				id="website"
				required
				class="focus:ring focus:ring-blue-300 focus:outline-none"
			/>
		</div>

		<div>
			<label for="name" class="block text-sm font-medium text-gray-700">{locale.form.name}</label>
			<input
				type="text"
				name="name"
				id="name"
				required
				class="focus:ring focus:ring-blue-300 focus:outline-none"
			/>
		</div>

		<div>
			<label for="description" class="block text-sm font-medium text-gray-700"
				>{locale.form.description}</label
			>
			<textarea
				name="description"
				id="description"
				required
				rows="4"
				class="focus:ring focus:ring-blue-300 focus:outline-none"
			></textarea>
		</div>

		<button
			type="submit"
			class="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
		>
			{locale.form.submit}
		</button>
	</form>
</section>

<style lang="scss">
	section {
		max-width: 500px;
		min-height: 100vh;
		margin: auto;

		form {
			div {
				input,
				textarea {
					padding: 0.5rem;
					margin-top: 0.25rem;
					border-radius: 0.375rem;
					border-width: 1px;
					width: 100%;
				}
			}
		}
	}
</style>
