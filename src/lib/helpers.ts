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
