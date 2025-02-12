export const load = ({ url }) => {
	const searchParamsSelector = 'type';
	return {
		selected: url.searchParams.get('type'),
		searchParamsSelector,
	};
};
