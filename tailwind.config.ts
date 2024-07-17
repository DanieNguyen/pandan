import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Neue Montreal', 'system-ui'],
				serif: ['Editorial', 'ui-serif'],
			},
			cursor: {
				zebra: 'url(/images/zebra.svg) 24 24, pointer',
				rubrik: 'url(/images/rubrik.svg) 24 24, pointer',
				poof: 'url(/images/poof.svg) 24 24, pointer',
			},
		},
	},
	plugins: [require('tailwindcss-opentype')],
};
export default config;
