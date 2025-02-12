<script lang="ts">
	export let data;
	export let form;

	const { locale } = data;
</script>

<form method="post">
	<h1>{locale.login.form.title}</h1>
	<label for="username">{locale.login.form.username}</label>
	<input type="text" name="username" id="username" required />

	<label for="password">{locale.login.form.password}</label>
	<input type="password" name="password" id="password" required />

	{#if form?.error}
		<p>{form.error}</p>
	{/if}

	<button type="submit">{locale.login.form.submit}</button>
</form>

<style lang="scss">
	form {
		max-width: 20rem;
		margin: auto;
		padding: 1.5rem;
		background-color: white;
		border-radius: 0.75rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

		h1 {
			font-size: 1.5rem;
			font-weight: bold;
			text-align: center;
			color: #4a4a4a;
			margin-bottom: 1.5rem;
		}

		label {
			display: block;
			font-size: 0.875rem;
			font-weight: 500;
			color: #4a4a4a;
			margin: 0.5rem 0;
		}

		input {
			width: 100%;
			padding: 0.5rem 1rem;
			border: 1px solid #d1d5db;
			border-radius: 0.375rem;
			outline: none;

			&:focus {
				border-color: var(--color-red-400);
				box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
			}
		}

		p {
			color: var(--color-red-600);
			padding-top: 10px;
		}

		button {
			width: 100%;
			background-color: var(--color-red-400);
			color: white;
			padding: 0.5rem;
			border-radius: 0.375rem;
			font-weight: 500;
			cursor: pointer;
			outline: none;
			margin-top: 10px;

			&:hover {
				background-color: var(--color-red-500);
			}

			&:focus {
				box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
			}
		}
	}
</style>
