import type { Role } from '@prisma/client';
import { sanitizeObject } from '../helpers';
import type { SafeUser } from '../types/User';
import prisma from './prisma';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export const getUserById = (id: string) => prisma.user.findUnique({ where: { id } });

export const create = (
	username: string,
	password: string,
	name: string,
	description: string,
	email: string,
	website: string,
	phoneNumber?: string,
	role?: Role,
) =>
	prisma.user.create({
		data: {
			username,
			password: bcrypt.hashSync(password),
			name,
			description,
			email,
			phoneNumber,
			website,
			role,
		},
	});

export const genResetPasswordToken = () =>
	crypto.createHash('sha256').update(crypto.randomBytes(32).toString('hex')).digest('hex');

export const resetPasswordRequest = async (userId: string, token: string) =>
	prisma.passwordReset.create({
		data: {
			userId,
			token,
		},
		include: {
			user: true,
		},
	});

export const createOrganization = async (
	username: string,
	name: string,
	description: string,
	email: string,
	website: string,
	phoneNumber?: string,
) =>
	create(
		username,
		genResetPasswordToken(),
		name,
		description,
		email,
		website,
		phoneNumber,
		'ORGANIZATION',
	);

export const login = async (username: string, password: string): Promise<undefined | SafeUser> => {
	const user = await prisma.user.findFirst({ where: { OR: [{ username }, { email: username }] } });

	if (!user || !bcrypt.compareSync(password, user.password)) {
		return undefined;
	}

	return sanitizeObject(user, ['password']);
};

export const getAllOrganizationIds = () =>
	prisma.user.findMany({ select: { id: true, updatedAt: true } });

export const getAllOrganizations = () => prisma.user.findMany({ include: { posts: true } });
