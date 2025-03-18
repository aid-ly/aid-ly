import { getAllOrganizations } from '$lib/server/users';

export const trailingSlash = 'always';

export const load = async () => {
	return {
		organizations: await getAllOrganizations(),
	};
};
