import { create, deleteById, updateById } from '$lib/server/posts';
import { updateUserById } from '$lib/server/users.js';

export const trailingSlash = 'always';

const validateData = <T extends Record<string, string | number>>(data: T) => {
	Object.entries(data).forEach(([key, value]) => {
		if (value === null || value === undefined) {
			throw new Error(`${key} must not be null or undefined`);
		}
		if (typeof value === 'number' && isNaN(value)) {
			throw new Error(`${key} must be a valid number`);
		}
	});

	return data as { [K in keyof T]: NonNullable<T[K]> };
};
const getPostFormData = (formData: FormData, addID = false) =>
	validateData({
		title: formData.get('title')?.toString() || '',
		lng: parseFloat(formData.get('lng')?.toString() || '0'),
		lat: parseFloat(formData.get('lat')?.toString() || '0'),
		description: formData.get('description')?.toString() || '',
		...(addID ? { id: formData.get('id')?.toString() || '' } : {}),
	});

export const actions = {
	editUser: async ({ request, locals }) => {
		const formData = await request.formData();

		try {
			const data = {
				username: formData.get('username')?.toString(),
				name: formData.get('name')?.toString(),
				email: formData.get('email')?.toString(),
				phoneNumber: formData.get('phoneNumber')?.toString(),
				website: formData.get('website')?.toString(),
				description: formData.get('description')?.toString(),
			};
			return { user: await updateUserById(locals.user!.id, data) };
		} catch (err) {
			return { error: (err as Error).message };
		}
	},

	newPost: async ({ request, locals }) => {
		const formData = await request.formData();

		try {
			const data = {
				...getPostFormData(formData),
				user: {
					connect: {
						id: locals.user!.id,
					},
				},
			};

			return {
				post: await create(data),
			};
		} catch (err) {
			return { error: (err as Error).message };
		}
	},

	editPost: async ({ request }) => {
		const formData = await request.formData();
		try {
			const data = getPostFormData(formData, true);
			return { post: await updateById(data.id!, data) };
		} catch (err) {
			return { error: (err as Error).message };
		}
	},

	deletePost: async ({ request, locals }) => {
		const formData = await request.formData();
		const id = formData.get('id')?.toString();
		if (!id) {
			return {
				error: 'You must specify the id',
			};
		}

		await deleteById(id, locals.user!.id);
	},
};
