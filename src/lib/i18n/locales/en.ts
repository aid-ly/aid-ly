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
				rejectAll: 'Reject All',
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
			description:
				"Find nearby locations where you can contribute your time and skills to meaningful causes. Whether you're interested in supporting local communities, environmental projects, or international initiatives, our map will guide you to organizations that need your help. Start your volunteering journey today!",
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
			username: 'Username or email',
			password: 'Password',
			submit: 'Login',
		},
		error: {
			invalidCredentials: 'Invalid username or password',
		},

		resetPassword: {
			form: {
				title: 'Reset Password',
			},
			passwords_dont_match: "The passwords don't match",
		},
	},
	header: {
		logo: {
			alt: "aid-ly's logo",
		},
		ul: {
			home: 'Home',
			contacts: 'Contacts',
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
	},
	footer: {
		resources: {
			title: 'Resources',
			contacts: {
				url: '/en/contacts',
				display: 'Contacts',
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
