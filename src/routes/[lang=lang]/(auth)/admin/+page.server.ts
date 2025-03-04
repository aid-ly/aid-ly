import { getAllOrganizations } from '$lib/server/users';

export const load = async () => {
	return {
		organizations: await getAllOrganizations(),
	};
};
