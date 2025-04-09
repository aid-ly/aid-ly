import common from './common';

const formInputs = {
	username: 'Username',
	email: 'Email',
	phoneNumber: 'Numero di Telefono',
	website: 'Sito Web',
	name: 'Nome',
	description: 'Descrizione',
	submit: 'Crea',
};

export default {
	errors: {
		invalid_jwt: 'Token di sessione non valido',
		reset_token_not_found: {
			message: 'Token di Reset della Password non trovato',
			cta: 'Vai alla home',
		},
		org_not_found: { message: "L'organizzazione non è stata trovata", cta: 'Torna indietro' },
		post_not_found: { message: 'Post non trovato', cta: 'Torna indietro' },
	},
	gdpr: {
		banner: {
			title: 'Usiamo i Cookies',
			description:
				"Usiamo i cookie per offrire una migliore esperienza di navigazione e analizzare il traffico del sito. Facendo clic su \"Accetta Tutti\", si accetta la nostra <a href='/en/privacy-policy' class='underline'>politica sulla privacy</a> e i nostri <a href='/en/terms-of-use' class='underline'>termini e condizioni</a>.",
			buttons: {
				acceptAll: 'Accetta Tutti',
				rejectAll: 'Rifiuta Tutti',
			},
		},
	},
	seo: {
		'': {
			title: 'Connette i Volontari con le Non Profit',
			description:
				'Unisciti ad Aid-ly per costruire comunità più forti attraverso il volontariato. La nostra piattaforma mette in contatto i volontari con le organizzazioni non profit locali che hanno bisogno di aiuto, per fare la differenza insieme.',
		},
		contacts: {
			title: 'Contatti',
			description:
				'Mettiti in contatto con aid-ly e collegati direttamente per richieste di informazioni, collaborazioni o qualsiasi altra domanda.',
		},
		login: {
			title: 'Login',
			description: 'Portale di login per le organizzazioni non profit.',
		},
		donate: {
			title: 'Donazioni',
			description: 'Sostieni il progetto con una donazione, anche minima.',
		},
		org: {
			title: 'Organizzazione non profit',
			description: "Visualizza l'organizzazione non profit.",
		},
		post: {
			title: 'Post',
			description: 'Visualizza le informazioni complete su questo post.',
		},
		admin: {
			title: 'Console Admin',
			description: 'La console degli admin.',
		},
		'terms-of-use': {
			title: 'Termini di Utilizzo',
			description:
				"Leggi le nostre condizioni generali di utilizzo e le implicazioni legali sull'uso di aid-ly.",
		},
		'privacy-policy': {
			title: 'Privacy Policy',
			description:
				'Nella nostra informativa sulla privacy ti informiamo sulle modalità di raccolta dei dati da parte di aid-ly e sui tuoi diritti in merito al trattamento dei dati.',
		},
	},
	map: {
		more: 'Di più',
		by: 'Creato da',
	},
	home: {
		title: 'La nostra Missione',
		motto:
			'Crediamo nella costruzione di comunità più forti attraverso il volontariato. La nostra piattaforma mette in contatto i volontari con le organizzazioni non profit locali che hanno bisogno di aiuto. Unisciti a noi per fare la differenza!',
		map: {
			title: 'Trova del volontariato vicino a te',
			description: {
				teaser:
					'Vuoi diventare un volontario ma non sai da dove iniziare? Prova con la mappa di aid-ly!',
				full: 'Trova i luoghi più vicini dove poter contribuire con il tuo tempo e le tue capacità a cause significative. Se sei interessato a sostenere le comunità locali, progetti ambientali o iniziative internazionali, la nostra mappa ti guiderà verso le organizzazioni che hanno bisogno del tuo aiuto. Inizia il tuo viaggio nel volontariato oggi stesso!',
			},
		},
		share: {
			title: 'Condividi il progetto',
			shareOn: 'Condividi su',
		},
	},
	contacts: {
		mail: {
			subject: 'Richiesta per diventare un contributore di aid-ly.org',
			about: "L'organizzazione",
			contacts: 'Contatti',
		},
		selector: {
			org: 'Organizzazione',
			ind: 'Individuo',
		},
		org: {
			title: 'Diventa un contributore della mappa',
			name: "Nome dell'organizzazione",
			message: "Descrivi l'organizzazione",
			phone_number: "Il numero di telefono che le persone useranno per contattare l'organizzazione",
			email: "L'email che le persone useranno per contattare l'organizzazione",
			website: "Il sito web dell'organizzazione",
		},
		ind: {
			title: 'Contattaci',
			name: 'Nome completo',
			subject: 'Oggetto',
			message: 'Messaggio',
		},
		submit: 'Invia',
	},
	donate: {
		title: 'Supporta Aid-ly',
		description:
			"Le donazioni ci aiutano a coprire le spese essenziali come la registrazione del dominio, l'hosting del server, la manutenzione e gli sviluppi futuri.",
		cta: 'Ogni contributo fa la differenza, anche il tuo!',
		paypalButton: {
			title: 'Fai una donazione con PayPal',
			alt: 'Dona con PayPal',
		},
	},
	org: {
		title: 'Collabora con {{orgName}}',
		subtitle: 'Diventa un volontario collaborando con {{orgName}}.',
		about: 'Su di noi',
		contacts: {
			title: 'Contacts',
			website: 'Website',
			email: 'Email',
			phoneNumber: 'Phone Number',
		},
		form: {
			title: 'Contattaci',
			inputs: {
				name: {
					label: 'Nome completo',
					placeholder: 'Il tuo nome completo',
				},
				subject: {
					label: 'Oggetto',
					placeholder: "L'oggetto dell'email",
				},
				message: {
					label: 'Messaggio',
					placeholder: 'Cosa vuoi dire',
				},
			},
			submit: 'Invia',
		},
		posts: {
			title: 'I nostri Luoghi',
		},
		pageTitle: `{{orgName}} su ${common.project.name}`,
	},
	post: {
		location: 'Luogo',
		postedBy: 'Pubblicato da',
	},
	login: {
		form: {
			title: 'LogIn',
			email: 'Email',
			password: 'Password',
			submit: 'Login',
		},
		error: {
			invalidCredentials: 'Email o password non corrette',
		},

		resetPassword: {
			form: {
				title: 'Reimposta Password',
			},
			passwords_dont_match: 'Le password non sono uguali',
		},
	},
	header: {
		logo: {
			alt: 'Logo di aid-ly',
		},
		ul: {
			home: 'Home',
			contacts: 'Contatti',
			contribute: {
				label: 'Contribuisci',
				options: [
					{
						group: 'Volontari',
						items: ['Diventa un volontario', 'Condividi', 'Dona'],
					},
					{
						group: 'Organizzazioni',
						items: ['Pubblica una luogo sulla mappa'],
					},
				],
			},
		},
	},
	footer: {
		resources: {
			title: 'Risorse',
			contacts: {
				url: '/it/contacts',
				display: 'Contatti',
			},
			donate: {
				url: '/it/donate',
				display: 'Donazioni',
			},
			login: {
				url: '/it/login',
				display: 'Login',
			},
			orgPortal: {
				url: '/it/org',
				display: 'Portale per Organizzazioni',
			},
		},
		legal: {
			title: 'Legali',
			policy: {
				url: '/it/privacy-policy',
				display: 'Privacy Policy',
			},
			terms: {
				url: '/it/terms-of-use',
				display: 'Termini & Condizioni',
			},
			license: 'Licenza',
		},
		credits: {
			title: 'Crediti',
			creator: 'Fondatore',
			maps: 'Mappe',
			icons: 'Icone',
		},

		license: {
			by: 'di',
			under: 'è rilasciato sotto',
		},
	},
	admin: {
		console: {
			title: 'Console Admin',
			stats: {
				posts: 'Numero Post',
				orgs: 'Numero Organizzazioni',
			},
			orgs: {
				create: 'Crea una nuova organizzazione',
				table: {
					head: [
						'ID',
						'Username',
						'Nome',
						'Email',
						'Telefono',
						'Sito Web',
						'Descrizione',
						'Creata Il',
						'Aggiornata Il',
					],
					pagination: {
						page: 'Pagina',
						of: 'di',
						next: 'Prossima',
						previous: 'Precedente',
					},
				},
			},
		},
		org: {
			new: {
				title: 'Crea una nuova Organizzazione',
				form: formInputs,
			},
			view: {
				title: 'Modifica Organizzazione',
				form: { ...formInputs, delete: 'Rimuovi Organizzazione', update: 'Salva' },
				confirmDelete: 'Sei sicuro di voler eliminare questa organizzazione?',
			},
		},
	},
	orgAdmin: {
		form: {
			title: "Informazioni sull'Organizzazione",
			inputs: {
				username: {
					label: 'Username',
					placeholder: "Lo username dell'organizzazione",
				},
				name: {
					label: 'Nome',
					placeholder: "Il nome dell'organizzazione",
				},
				email: {
					label: 'Email',
					placeholder: "L'email dell'organizzazione",
				},
				phoneNumber: {
					label: 'Numero di Telefono',
					placeholder: "Il numero di telefono dell'organizzazione",
				},
				website: {
					label: 'Sito Web',
					placeholder: "Il sito web dell'organizzazione",
				},
				description: {
					label: 'Descrizione',
					placeholder: "La descrizione dell'organizzazione",
				},
			},
			submit: 'Salva',
		},
		posts: {
			create: {
				title: 'Crea un Nuovo Post',
				submit: 'Crea',
			},
			title: 'Post',
			inputs: {
				title: {
					label: 'Titolo',
					placeholder: 'Il Titolo del post',
				},
				place: {
					label: 'Posto',
					placeholder: 'Il luogo sulla mappa',
					loading: 'Caricando...',
				},
				description: {
					label: 'Descrizione',
					placeholder: 'La descrizione del post',
				},
			},
		},
	},
	emails: {
		welcome: {
			subject: 'Benvenuti a Aid-ly!',
			body: {
				welcome: 'Benvenuto a Aid-ly {{name}}!',
				body: "Caro admin dell'organizzazione,\nSiamo lieti di averti a bordo! Per iniziare, per favore crea la password associata all'organizzazione schiacciando il bottone qui sotto.\nUna volta impostata la password, puoi loggarti nella dashboard dell'organizzazione.",
				createPassword: 'Crea Password',
				footer: 'Se hai qualche domanda non esitare a contattare il nostro team di supporto.',
			},
		},
	},
};
