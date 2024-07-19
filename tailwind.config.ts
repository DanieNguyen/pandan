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
				zebra: 'url(/images/homepage/zebra.svg) 24 24, pointer',
				rubrik: 'url(/images/homepage/rubrik.svg) 24 24, pointer',
				poof: 'url(/images/homepage/poof.svg) 24 24, pointer',
			},

			screens: {
				mac: '1360px',
			},
		},
	},
	plugins: [require('tailwindcss-opentype')],
};
export default config;
