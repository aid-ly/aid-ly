export default {
	project: {
		name: 'aid-ly',
		url: 'https://aid-ly.org',
		githubUrl: 'https://github.com/aid-ly/aid-ly',
		owner: {
			name: 'Sebastiano Racca',
			website: 'https://racca.me',
		},
	},
	license: {
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
		name: 'CC BY-NC-SA 4.0',
	},
	socials: {
		github: 'https://github.com/aid-ly',
	},
	credits: {
		maps: 'https://www.mapbox.com/',
		icons: 'https://free-icons.github.io/free-icons/',
	},
	cookies: {
		gdpr: 'aidly_gpdr',
		jwt: 'aidly_session',
	},
	map: {
		init: { lng: 1.0760175, lat: 47.5907202, zoom: 4.5 },
	},
	share: (source: string, medium: string, content: string) => {
		const params = new URLSearchParams({
			utm_source: source,
			utm_medium: medium,
			utm_content: content,
		});

		return `https://aid-ly.org/?${params.toString()}`;
	},
};
