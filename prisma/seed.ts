import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import prisma from '../src/lib/server/prisma';
import { create } from '../src/lib/server/users';

const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;

const main = async () => {
	if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
		throw new Error('You must set ADMIN_USERNAME and ADMIN_PASSWORD as environment variables');
	}

	try {
		await create(
			ADMIN_USERNAME,
			ADMIN_PASSWORD,
			'Admin',
			'',
			'hello@aid-ly.org',
			'https://aid-ly.org/contacts',
			undefined,
			'ADMIN',
		);
	} catch (e) {
		if (e instanceof PrismaClientKnownRequestError) {
			if (e.code === 'P2002') {
				console.warn(`The user admin already exists`);
				return;
			}
		}

		throw e;
	}
};

main()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
