import showdown from 'showdown';
import sanitizeHtml from 'sanitize-html';

const classMap = {
	h1: 'text-2xl font-bold text-gray-900',
	h2: 'text-xl font-semibold text-gray-800',
	h3: 'text-x font-semibold text-gray-700',
	h4: 'text-md font-semibold text-gray-700',
	h5: 'text-sm font-medium text-gray-700',
	p: 'text text-gray-600',
};

const bindings = Object.keys(classMap).map((key) => ({
	type: 'output',
	regex: new RegExp(`<${key}(.*)>`, 'g'),
	replace: `<${key} class="${classMap[key as keyof typeof classMap]}" $1>`,
}));

const converter = new showdown.Converter({
	noHeaderId: true,
	simplifiedAutoLink: true,
	openLinksInNewWindow: true,
	backslashEscapesHTMLTags: true,
	emoji: true,
	extensions: [...bindings],
});

const md2html = (text: string, headerLevelStart: number) => {
	converter.setOption('headerLevelStart', headerLevelStart);
	return sanitizeHtml(converter.makeHtml(text), {
		allowedAttributes: {
			h1: ['class'],
			h2: ['class'],
			h3: ['class'],
			h4: ['class'],
			h5: ['class'],
			p: ['class'],
		},
	});
};

export default md2html;
