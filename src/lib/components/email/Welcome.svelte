<script lang="ts">
	import { common } from '$lib/i18n';
	import type { Welcome } from '$lib/types/emailProps';

	const { locale, lang, org, resetToken }: Welcome = $props();
</script>

<body>
	<div class="container">
		<h1>{locale.welcome.replace('{{name}}', org.name)}</h1>

		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p>{@html locale.body.replaceAll('\n', '</p><p>')}</p>
		<a
			href="{common.project.url}/{lang}/login/reset-password/{resetToken}?to={encodeURIComponent(
				`/${lang}/login?to=/${lang}/org/`,
			)}"
			class="button"
		>
			{locale.createPassword}
		</a>
		<p class="footer">{locale.footer}</p>
	</div>
</body>

<style>
	body {
		font-family: Arial, sans-serif;
		background-color: #f4f4f4;
		margin: 0;
		padding: 0;
	}

	.container {
		max-width: 600px;
		background: #ffffff;
		padding: 20px;
		margin: 20px auto;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #333;
	}

	p {
		color: #555;
		line-height: 1.6;
	}

	.button {
		display: inline-block;
		padding: 12px 20px;
		margin-top: 20px;
		background: #007bff;
		color: #ffffff;
		text-decoration: none;
		border-radius: 5px;
	}

	.footer {
		margin-top: 20px;
		font-size: 12px;
		color: #777;
		text-align: center;
	}
</style>
