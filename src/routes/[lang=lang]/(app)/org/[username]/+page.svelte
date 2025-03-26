<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ModularForm from '$lib/components/ModularForm.svelte';

	const { data } = $props();
	const { org, locale, lang } = data;
	const posts = org.posts.map((post) => {
		return { ...post, user: org };
	});
</script>

<section class="container p-8">
	<h1 class="text-center text-4xl font-bold text-gray-800">
		{locale.org.title.replace('{{orgName}}', org.name)}
	</h1>
	<p class="mt-2 text-center text-gray-600">
		{locale.org.subtitle.replace('{{orgName}}', org.name)}
	</p>

	<div class="mt-8 grid gap-8 md:grid-cols-2">
		<div>
			<h2 class="text-2xl font-semibold text-gray-700">{locale.org.about}</h2>
			<p class="text-gray-600">{org.description}</p>

			<h2 class="mt-6 text-2xl font-semibold text-gray-700">{locale.org.contacts.title}</h2>
			<ul class="mt-3 list-disc pl-5 text-gray-600">
				<li>
					<b>{locale.org.contacts.website}</b>:
					<a href={org.website} target="_blank">{org.website}</a>
				</li>
				<li><b>{locale.org.contacts.email}</b>: <a href="mailto:{org.email}">{org.email}</a></li>
				{#if org.phoneNumber}
					<li>
						<b>{locale.org.contacts.phoneNumber}</b>:
						<a href="tel:{org.phoneNumber}">{org.phoneNumber}</a>
					</li>
				{/if}
			</ul>
		</div>

		<ModularForm
			title={{ text: locale.org.form.title, level: 'h2' }}
			method="get"
			action="mailto:{org.email}"
			inputs={[
				{
					type: 'text',
					name: 'name',
					label: locale.org.form.inputs.name.label,
					required: true,
					placeholder: locale.org.form.inputs.name.placeholder,
				},
				{
					type: 'text',
					name: 'subject',
					label: locale.org.form.inputs.subject.label,
					required: true,
					placeholder: locale.org.form.inputs.subject.placeholder,
				},
				{
					type: 'textarea',
					name: 'body',
					label: locale.org.form.inputs.message.label,
					required: true,
					placeholder: locale.org.form.inputs.message.placeholder,
				},
			]}
			submit={locale.org.form.submit}
		/>
	</div>
</section>

<section id="map">
	<h2 class="m-2 text-center text-3xl font-semibold text-gray-700">{locale.org.posts.title}</h2>
	<Map {posts} locale={locale.map} {lang} />
</section>

<style lang="scss">
	#map {
		height: 80vh;
		width: 80vw;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin: 50px 0 100px 0;
	}
</style>
