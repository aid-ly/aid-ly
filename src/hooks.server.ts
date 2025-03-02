import parser from 'accept-language-parser';
import { type Language, AVAILABLE_LANGUAGES, common, FALLBACK, locales } from '$lib/i18n';
import { verify } from '$lib/server/jwt';
import { getUserById } from '$lib/server/users';
import { sanitizeObject } from '$lib/helpers';

const NO_LANG_ROUTES = ['/robots.txt', '/api'];

export const handle = async ({ event, resolve }) => {
	const { url, request, locals, cookies } = event;
	let [, lang] = url.pathname.split('/');

	if (NO_LANG_ROUTES.some((item) => url.pathname.startsWith(item))) {
		return resolve(event);
	}

	if (!AVAILABLE_LANGUAGES.includes(lang as Language)) {
		const acceptLanguage = request.headers.get('accept-language');
		const parsedLangs = acceptLanguage ? parser.parse(acceptLanguage) : [];
		lang = parsedLangs.length > 0 ? parsedLangs[0].code : FALLBACK;

		if (!AVAILABLE_LANGUAGES.includes(lang as Language)) {
			lang = FALLBACK;
		}

		return new Response(null, {
			status: 302,
			headers: {
				Location: `/${lang}${url.pathname}${url.search}`,
			},
		});
	}

	locals.locale = locales[lang as Language];

	const jwt_cookie = cookies.get(common.cookies.jwt);

	if (jwt_cookie) {
		try {
			const jwt = verify(jwt_cookie);
			const user = await getUserById(jwt.user_id);

			if (!user) {
				throw new Error(`User with ID ${jwt.user_id} not found`);
			}

			locals.user = sanitizeObject(user, ['password', 'updatedAt']);
		} catch (_err) {
			cookies.delete(common.cookies.jwt, { path: '/' });
		}
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replaceAll('%lang%', lang),
	});
};
