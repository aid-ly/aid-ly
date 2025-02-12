import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';
import type { JwtPayload } from '$lib/types/JwtPayload';

export const sign = (user_id: string) =>
	jwt.sign({ user_id }, env.SESSION_SECRET, { expiresIn: +env.SESSION_EXPIRATION });

export const verify = (token: string) => jwt.verify(token, env.SESSION_SECRET) as JwtPayload;
