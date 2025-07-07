import common from './common';

const formInputs = {
	username: 'Username',
	email: 'Email',
	phoneNumber: 'Phone Number',
	website: 'Website',
	name: 'Name',
	description: 'Description',
};

export default {
	errors: {
		invalid_jwt: 'Invalid session token',
		reset_token_not_found: { message: 'Reset Password Token not found', cta: 'Go back home' },
		org_not_found: { message: 'Organization was not found', cta: 'Go Back' },
		post_not_found: { message: 'Post was not found', cta: 'Go Back' },
	},
	gdpr: {
		banner: {
			title: 'We Use Cookies',
			description:
				"We use cookies to offer a better browsing experience and analyze site traffic. By clicking \"Accept All\", you consent to our <a href='/en/privacy-policy' class='underline'>privacy policy</a> and <a href='/en/terms-of-use' class='underline'>terms and conditions</a>.",
			buttons: {
				acceptAll: 'Accept All',
				rejectAll: 'Necessary Only',
				customize: {
					label: 'Customize',
					chooseLabel: 'Choose Wich Cookies To Enable',
					confirmLabel: 'Confirm My Choices',
				},
			},
			choices: {
				essentials: {
					label: 'Essentials',
					description: "Used for cookie control and login information. Can't be turned off.",
				},
				analytics: {
					label: 'Analytics',
					description: 'Used to check website traffic.',
				},
			},
		},
	},
	seo: {
		'': {
			title: 'Connecting Volunteers with Nonprofits',
			description:
				'Join aid-ly in building stronger communities through volunteer efforts. Our platform connects volunteers with local nonprofits in need of help—making a difference together.',
		},
		contacts: {
			title: 'Contacts',
			description:
				'Get in touch with aid-ly and connect directly for inquiries, collaborations, or any questions you may have.',
		},
		login: {
			title: 'Login',
			description: 'Login portal for nonprofit organizations.',
		},
		faq: {
			title: 'FAQs',
			description:
				'Frequently Asked Questions about aid-ly. Find answers to the most common questions here.',
		},
		donate: {
			title: 'Donate',
			description: 'Support the project by donating even a small amount.',
		},
		org: {
			title: 'Nonprofit Organization',
			description: 'View the nonprofit organization.',
		},
		post: {
			title: 'Post',
			description: 'View complete infomation about this post.',
		},
		admin: {
			title: 'Admin Console',
			description: 'The admin console.',
		},
		'terms-of-use': {
			title: 'Terms of Use',
			description:
				'Read about our general terms of use and the legal implications of using aid-ly.',
		},
		'privacy-policy': {
			title: 'Privacy Policy',
			description:
				'In our privacy policy we inform you how aid-ly collects data and also state your rights with regards to processing the data.',
		},
	},
	map: {
		more: 'Learn more',
		by: 'Posted by',
	},
	home: {
		title: 'Our Mission',
		motto:
			'We believe in building stronger communities through volunteer efforts. Our platform connects volunteers with local nonprofit organizations in need of help. Join us in making a difference!',
		map: {
			title: 'Find a volunteering location near you',
			description: {
				teaser: "Want to become a volunteer but don't know where to start? Try the aid-ly map!",
				full: "Find nearby locations where you can contribute your time and skills to meaningful causes. Whether you're interested in supporting local communities, environmental projects, or international initiatives, our map will guide you to organizations that need your help. Start your volunteering journey today!",
			},
		},
		share: {
			title: 'Share the project',
			shareOn: 'Share on ',
		},
	},
	contacts: {
		mail: {
			subject: 'Request to Become an Active Contributor to aid-ly.org',
			about: 'About the organization',
			contacts: 'Contacts',
		},
		selector: {
			org: 'Organization',
			ind: 'Individual',
		},
		org: {
			title: 'Became an active contributor of the map',
			name: 'Organization Name',
			message: 'Describe your organization',
			phone_number: 'The phone number people will use to contact the organization',
			email: 'The email people will use to contact the organization',
			website: "The organization's website",
		},
		ind: {
			title: 'Contact Us',
			name: 'Full Name',
			subject: 'Subject',
			message: 'Message',
		},
		submit: 'Submit',
	},
	donate: {
		title: 'Support Aid-ly',
		description:
			'Your donations help us cover essential expenses such as domain registration, server hosting, maintenance and future developments.',
		cta: 'Every contribution makes a difference, even yours!',
		paypalButton: {
			title: 'Make a donation with PayPal',
			alt: 'Donate with PayPal',
		},
		thanks: {
			title: 'Thank you!',
			description:
				'Your generous contribution helps keep Aid-ly running. We are incredibly grateful for your support.',
			motto:
				'Together, we are making it easier for volunteers and non-profits to connect and create positive change.',
		},
		cancel: {
			title: 'Donation Cancelled',
			contribute: {
				description: 'There are still many ways you can support Aid-ly and help us grow:',
				spread: 'Spread the word.',
				star: 'Star the project on GitHub.',
				code: 'Contribute to the source code.',
				thanks: 'Thank you for your time and interest in Aid-ly.',
			},
		},
	},
	org: {
		title: 'Collaborate with {{orgName}}',
		subtitle: 'Become a volunteer by collaborating with {{orgName}}.',
		about: 'About Us',
		contacts: {
			title: 'Contacts',
			website: 'Website',
			email: 'Email',
			phoneNumber: 'Phone Number',
		},
		form: {
			title: 'Get in Touch',
			inputs: {
				name: {
					label: 'Full Name',
					placeholder: 'Your full name',
				},
				subject: {
					label: 'Subject',
					placeholder: 'The subject',
				},
				message: {
					label: 'Message',
					placeholder: 'What you want to say',
				},
			},
			submit: 'Send',
		},
		posts: {
			title: 'Our Locations',
		},
		pageTitle: `{{orgName}} on ${common.project.name}`,
	},
	post: {
		location: 'Location',
		postedBy: 'Posted by',
	},
	login: {
		form: {
			title: 'LogIn',
			email: 'Email',
			password: 'Password',
			submit: 'Login',
		},
		error: {
			invalidCredentials: 'Invalid email or password',
		},

		resetPassword: {
			form: {
				title: 'Reset Password',
			},
			passwords_dont_match: "The passwords don't match",
		},
	},
	faq: {
		title: 'Frequently Asked Questions',
		volunteers: 'Volunteers',
		organizations: 'Organizations',
		faqs: {
			volunteers: [
				{
					question: 'What is Aid-Ly?',
					answer:
						'Aid-Ly is a project designed to bridge the gap between nonprofit organizations and aspiring volunteers. It was born out of the need to find places to serve without spending hours searching for organizations in need of help.',
				},
				{
					question: 'How do I sign up?',
					answer:
						'No registration is required. Just search the map for places to volunteer and contact the organizations directly.',
				},
				{
					question: 'How can I help?',
					answer:
						"There are several ways to help. If you'd like to support us financially, you can make a donation. Otherwise, if you have the skills, you can contribute by translating or developing the site—don’t hesitate to get in touch.",
				},
				{
					question: 'Who can volunteer?',
					answer:
						'Anyone willing to donate their time can volunteer. There are no age limits or specific requirements, except those set by individual organizations.',
				},
				{
					question: 'Can I see volunteer opportunities without signing up?',
					answer:
						'Yes, you can explore the map and available opportunities without registering. The platform is open and transparent.',
				},
				{
					question: 'How can I contact an organization?',
					answer:
						'Each organization’s profile includes the necessary contact information (email, website, social media, etc.). You can reach out directly to offer your availability.',
				},
				{
					question: 'Is Aid-Ly available in other languages?',
					answer:
						"The site is currently available in Italian and English. If you'd like to help with additional translations, get in touch!",
				},
				{
					question: 'Does the site collect or store my data?',
					answer:
						'Aid-Ly minimizes data collection. Please read our Privacy Policy for more details.',
				},
				{
					question: 'How do I report an error or issue on the site?',
					answer:
						"You can use the contact form in the 'Contacts' section to report any technical issues or incorrect content.",
				},
				{
					question: 'What are Aid-Ly’s costs?',
					answer:
						'Aid-Ly was created to be as low-cost as possible to keep online, but there are recurring maintenance costs including: domain (€7/year), hosting (€5.31/month); totaling €70.72 per year.',
				},
			],
			organizations: [
				{
					question: 'How can an organization join Aid-Ly?',
					answer:
						"An organization can contact us via the form in the 'Contacts' section. After a brief verification, we’ll publish its profile and it will be visible on the platform.",
				},
				{
					question: 'What should an organization profile include?',
					answer:
						'The profile should include a clear description of its mission, the types of activities it carries out, and contact information. This helps volunteers better understand how they can contribute.',
				},
				{
					question: 'Do organizations have to pay to be listed on the platform?',
					answer:
						'No, participation on Aid-Ly is free for organizations as well. Our goal is to facilitate volunteering, not profit from it.',
				},
				{
					question: 'Who manages the content on an organization’s page?',
					answer: 'Content is published independently by each organization.',
				},
			],
		},
	},
	header: {
		logo: {
			alt: "aid-ly's logo",
		},
		ul: {
			home: 'Home',
			contacts: 'Contacts',
			faq: 'FAQs',
			contribute: {
				label: 'Contribute',
				options: [
					{
						group: 'Individuals',
						items: ['Become a volunteer', 'Share', 'Donate'],
					},
					{
						group: 'Organizations',
						items: ['Post a location on the map'],
					},
				],
			},
		},
		language: 'Select Language',
	},
	footer: {
		resources: {
			title: 'Resources',
			contacts: {
				url: '/en/contacts',
				display: 'Contacts',
			},
			faq: {
				url: '/en/faq',
				display: 'FAQs',
			},
			donate: {
				url: '/en/donate',
				display: 'Donations',
			},
			login: {
				url: '/en/login',
				display: 'Login',
			},
			orgPortal: {
				url: '/en/org',
				display: 'Organization Portal',
			},
		},
		legal: {
			title: 'Legal',
			policy: {
				url: '/en/privacy-policy',
				display: 'Privacy Policy',
			},
			terms: {
				url: '/en/terms-of-use',
				display: 'Terms & Conditions',
			},
			license: 'License',
		},
		credits: {
			title: 'Credits',
			creator: 'Creator',
			maps: 'Maps',
			icons: 'Icons',
		},
		license: {
			by: 'by',
			under: 'is licensed under',
		},
	},
	admin: {
		console: {
			title: 'Admin Console',
			stats: {
				posts: 'Total Posts',
				orgs: 'Total Organizations',
			},
			orgs: {
				create: 'Create a new organization',
				table: {
					head: [
						'ID',
						'Username',
						'Name',
						'Email',
						'Phone',
						'Website',
						'Description',
						'Created At',
						'Updated At',
					],
					pagination: {
						page: 'Page',
						of: 'of',
						next: 'Next',
						previous: 'Previous',
					},
				},
			},
		},
		org: {
			new: {
				title: 'Create a new Organization',
				form: { ...formInputs, submit: 'Create' },
			},
			view: {
				title: 'Edit Organization',
				form: { ...formInputs, delete: 'Delete Organization', update: 'Save Changes' },
				confirmDelete: 'Are you sure you want delete this organization?',
			},
		},
	},
	orgAdmin: {
		form: {
			title: 'Organization Information',
			inputs: {
				username: {
					label: 'Username',
					placeholder: "The organization's username",
				},
				name: {
					label: 'Name',
					placeholder: "The organization's display name",
				},
				email: {
					label: 'Email',
					placeholder: "The organization's email",
				},
				phoneNumber: {
					label: 'Phone Number',
					placeholder: "The organization's phone number",
				},
				website: {
					label: 'Website',
					placeholder: "The organization's website",
				},
				description: {
					label: 'Description',
					placeholder: "The organization's description",
				},
			},
			submit: 'Save Changes',
		},
		posts: {
			create: {
				title: 'Create a New Post',
				submit: 'Create',
			},
			title: 'Post',
			inputs: {
				title: {
					label: 'Title',
					placeholder: 'Post title',
				},
				place: {
					label: 'Place',
					placeholder: 'The location on the map',
					loading: 'Loading...',
				},
				expireDate: 'Post expiration',
				description: {
					label: 'Description',
					placeholder: 'Post description',
				},
			},
		},
	},
	emails: {
		welcome: {
			subject: 'Welcome to Aid-ly!',
			body: {
				welcome: 'Welcome to Aid-ly {{name}}!',
				body: "Dear Organization Admin,\nWe are excited to have you on board! To get started, please create your password by clicking the button below.\nOnce you've set your password, you can log in to your admin dashboard to manage your organization.",
				createPassword: 'Create Password',
				footer: 'If you have any questions, feel free to contact our support team.',
			},
		},
	},
};
