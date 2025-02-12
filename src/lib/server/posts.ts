import type { SafePostWithUser } from '$lib/types/User';
import prisma from './prisma';

const userSelect = {
	id: true,
	username: true,
	name: true,
	description: true,
	email: true,
	phoneNumber: true,
	website: true,
	createdAt: true,
	role: true,
};

export const getAll = (): Promise<SafePostWithUser[]> =>
	prisma.post.findMany({
		include: {
			user: {
				select: userSelect,
			},
		},
	});

export const getByUserId = (userId: string): Promise<SafePostWithUser[]> =>
	prisma.post.findMany({
		where: { userId },
		include: {
			user: {
				select: userSelect,
			},
		},
	});
