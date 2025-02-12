import { marked } from 'marked';

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

const mdRenderer = new marked.Renderer();
mdRenderer.heading = (token) => {
	const styling = [
		'text-4xl font-bold text-gray-900 mb-6 border-b pb-2',
		'text-2xl font-semibold text-gray-800 mt-6',
	];
	return `<h${token.depth} class="${styling[token.depth - 1] ?? ''}">${token.text}</h${token.depth}>`;
};
mdRenderer.paragraph = (token) => {
	return `<p class="text-gray-600 mt-2">${token.text}</p>`;
};
mdRenderer.list = (token) => {
	const listItems = token.items
		.map((item) => `<li class="text-gray-700">${item.text}</li>`)
		.join('');

	if (token.ordered) {
		return `<ol class="list-decimal pl-5 space-y-2 mt-4 text-gray-700">${listItems}</ol>`;
	}

	return `<ul class="space-y-2 mt-4 text-gray-700">${listItems}</ul>`;
};

export { mdRenderer };
