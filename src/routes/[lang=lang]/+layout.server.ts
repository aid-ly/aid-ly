export const load = ({ locals, params }) => {
	return {
		locale: locals.locale,
		lang: params.lang,
	};
};
