import { redirect } from '@sveltejs/kit';

export const sanitizeObject = <T extends object, K extends keyof T>(
	obj: T,
	fields: K[],
): Omit<T, K> => {
	const sanitized = { ...obj };
	fields.forEach((field) => {
		delete sanitized[field];
	});

	return sanitized;
};

export const redirectFromSearchParams = (searchParams: URLSearchParams, fallback: string) =>
	redirect(302, decodeURIComponent(searchParams.get('to') || fallback));
