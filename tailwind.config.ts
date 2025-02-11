import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class', // Use 'class' strategy for dark mode
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-neue)', 'system-ui'],
				serif: ['var(--font-editorial)', 'ui-serif'],
			},
			cursor: {
				zebra: 'url(/images/homepage/zebra.svg) 24 24, pointer',
				rubrik: 'url(/images/homepage/rubrik.svg) 24 24, pointer',
				poof: 'url(/images/homepage/poof.svg) 24 24, pointer',
			},
			screens: {
				xl: '1400px',
				'12': '1280px',
				'2xl': '1700px',
			},
		},
	},
};
export default config;
