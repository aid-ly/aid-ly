import prisma from './prisma';
import type { Prisma } from '@prisma/client';

const userSelect = {
	id: true,
	username: true,
	name: true,
	description: true,
	email: true,
	phoneNumber: true,
	website: true,
	createdAt: true,
	updatedAt: true,
	role: true,
};

export const create = (data: Prisma.PostCreateInput) =>
	prisma.post.create({ data, include: { user: { select: userSelect } } });

export const getAll = () =>
	prisma.post.findMany({
		include: {
			user: {
				select: userSelect,
			},
		},
	});

export const getAllPostIds = () => prisma.post.findMany({ select: { id: true, updatedAt: true } });

export const getPostById = (id: string) =>
	prisma.post.findUnique({ where: { id }, include: { user: true } });

export const getByUserId = (userId: string) =>
	prisma.post.findMany({
		where: { userId },
		include: {
			user: {
				select: userSelect,
			},
		},
	});

export const updateById = (id: string, data: Prisma.PostUpdateInput) =>
	prisma.post.update({ where: { id }, data });

export const deleteById = (id: string, userId: string) =>
	prisma.post.delete({ where: { id, userId } });
