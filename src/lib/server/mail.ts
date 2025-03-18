import { env } from '$env/dynamic/private';
import type { Welcome as WelcomeProps } from '$lib/types/emailProps';
import Welcome from '$lib/components/email/Welcome.svelte';
import nodemailer from 'nodemailer';
import { render } from 'svelte/server';

const transporter = nodemailer.createTransport({
	service: env.MAIL_SERVICE_PROVIDER,
	auth: {
		user: env.MAIL_USERNAME,
		pass: env.MAIL_PASSWORD,
	},
});

export const templates = {
	welcome: (props: WelcomeProps) => render(Welcome, { props }).body,
};

export const sendMail = (from: string, to: string, subject: string, html: string) =>
	transporter.sendMail({ from, to, subject, html });
