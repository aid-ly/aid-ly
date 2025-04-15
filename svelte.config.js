import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { csp } from '@nosecone/sveltekit';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			precompress: true,
		}),
		csp: csp(),
		alias: {
			'$project/package.json': './package.json',
		},
	},
};

export default config;
