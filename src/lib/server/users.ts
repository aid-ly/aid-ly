import type { Post, Prisma, Role, User } from '@prisma/client';
import { sanitizeObject } from '../helpers';
import type { SafeUser } from '../types/User';
import prisma from './prisma';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export const hashPassword = (password: string) => bcrypt.hashSync(password);

export const getUserById = <T extends boolean>(id: string, includePosts: T = false as T) =>
	prisma.user.findUnique({
		where: { id },
		include: includePosts ? { posts: true } : undefined,
	}) as Promise<T extends true ? (User & { posts: Post[] }) | null : User | null>;

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
			password: hashPassword(password),
			name,
			description,
			email,
			phoneNumber,
			website,
			role,
		},
	});

export const deleteUserById = (id: string) => prisma.user.delete({ where: { id } });

export const updateUserById = (id: string, data: Prisma.UserUpdateInput) =>
	prisma.user.update({ where: { id }, data });

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
