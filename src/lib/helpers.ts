import { redirect } from '@sveltejs/kit';
import { getFullLocale, type Language } from './i18n';

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

export class MapBox {
	baseUrl = 'https://api.mapbox.com';
	api_token: string;
	lang: Language;

	constructor(api_token: string, lang: Language) {
		this.api_token = api_token;
		this.lang = lang;
	}

	async reverseGeocode(lat: number, lng: number): Promise<string> {
		return (
			await (
				await fetch(
					`${this.baseUrl}/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${this.api_token}&language=${getFullLocale(this.lang)}`,
				)
			).json()
		).features[0]?.place_name;
	}

	async forwardGeocode(query: string) {
		const coordinates = (
			await (
				await fetch(
					`${this.baseUrl}/search/geocode/v6/forward?q=${query}&access_token=${this.api_token}&lang=${this.lang}&types=place,address&limit=1`,
				)
			).json()
		).features[0]?.properties?.coordinates;

		return { lng: coordinates?.longitude, lat: coordinates?.latitude } as {
			lng: number;
			lat: number;
		};
	}
}
