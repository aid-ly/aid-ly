import { getByUserId, create, deleteById, updateById } from '$lib/server/posts';
import { updateUserById } from '$lib/server/users';

export const trailingSlash = 'always';

export const load = async ({ locals }) => {
	return {
		user: locals.user!,
		posts: await getByUserId(locals.user!.id),
	};
};

const validateData = <T extends Record<string, string | number | Date | null>>(data: T) => {
	Object.entries(data).forEach(([key, value]) => {
		if (key !== 'expireDate' && (value === null || value === undefined)) {
			throw new Error(`${key} must not be null or undefined`);
		}

		if (value instanceof Date) {
			if (isNaN(value.getTime())) {
				throw new Error(`${key} must be a valid Date`);
			}
		}

		if (typeof value === 'number' && isNaN(value)) {
			throw new Error(`${key} must be a valid number`);
		}
	});

	return data;
};
const getPostFormData = (formData: FormData, addID = false) =>
	validateData({
		title: formData.get('title')?.toString() || '',
		lng: parseFloat(formData.get('lng')?.toString() || '0'),
		lat: parseFloat(formData.get('lat')?.toString() || '0'),
		expireDate: formData.get('expireDate')
			? new Date(`${formData.get('expireDate')!.toString()}`)
			: null,
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
