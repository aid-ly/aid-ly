<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import Post from '$lib/components/org/Post.svelte';

	export let data;

	const { user, posts, locale, lang } = data;
</script>

<main class="mx-auto max-w-4xl space-y-8 p-8">
	<section class="rounded-lg bg-white p-6 shadow-lg">
		<form action="?/user" method="post" class="space-y-6">
			<h1 class="text-3xl font-semibold text-gray-800">Organization Information</h1>

			<div>
				<label for="username" class="block text-sm font-medium text-gray-700">Username</label>
				<input
					class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					type="text"
					name="username"
					id="username"
					value={user.username}
				/>
			</div>

			<div>
				<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
				<input
					class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					type="text"
					name="name"
					id="name"
					value={user.name}
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<input
					class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					type="text"
					name="email"
					id="email"
					value={user.email}
				/>
			</div>

			<div>
				<label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label
				>
				<input
					class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					type="text"
					name="phoneNumber"
					id="phoneNumber"
					value={user.phoneNumber}
				/>
			</div>

			<div>
				<label for="website" class="block text-sm font-medium text-gray-700">Website</label>
				<input
					class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					type="text"
					name="website"
					id="website"
					value={user.website}
				/>
			</div>

			<div>
				<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
				<textarea
					name="description"
					id="description"
					class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
					rows="4">{user.description}</textarea
				>
			</div>

			<button type="submit">Save Changes</button>
		</form>
	</section>

	<section class="rounded-lg bg-white p-6 shadow-lg">
		<h2 class="text-2xl font-semibold text-gray-800">Posts</h2>
		<ul class="mt-4 space-y-6">
			{#each posts as post}
				<li>
					<Post {post} />
				</li>
			{/each}
		</ul>
	</section>

	<div class="map">
		<Map {posts} locale={locale.map} {lang} />
	</div>
</main>

<style lang="scss">
	.map {
		height: 80vh;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
