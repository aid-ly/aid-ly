import type { PasswordReset } from '@prisma/client';
import prisma from './prisma';
import { hashPassword, updateUserById } from './users';

export const getById = (token: string) => prisma.passwordReset.findUnique({ where: { token } });

export const reset = (passwordReset: PasswordReset, newPassword: string) =>
	prisma.$transaction([
		updateUserById(passwordReset.userId, { password: hashPassword(newPassword) }),
		prisma.passwordReset.delete({ where: passwordReset }),
	]);
