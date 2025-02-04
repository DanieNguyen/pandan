import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';
import type { Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

// Font files can be colocated inside of `app`
const sans = localFont({
	src: '../public/fonts/PPNeueMontreal-Regular.woff',
	display: 'swap',
	variable: '--font-neue',
});

const serif = localFont({
	src: [
		{
			path: '../public/fonts/PPEditorialNew-Regular.woff2',
			style: 'normal',
		},
		{
			path: '../public/fonts/PPEditorialNew-Italic.woff',
			style: 'italic',
		},
	],
	display: 'swap',
	variable: '--font-editorial',
});

export const metadata: Metadata = {
	title: 'Daniel Nguyen',
	description: 'Designer',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${sans.variable} ${serif.variable} font-sans dark:text-stone-50 dark:bg-stone-900 text-stone-800 bg-white`}>
			<body className='px-6 md:px-12'>
				{children}
				<SpeedInsights></SpeedInsights>
				<Analytics></Analytics>
			</body>
		</html>
	);
}
