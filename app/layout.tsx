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
			className='font-sans dark:text-white dark:bg-stone-900 text-stone-800 bg-white'>
			<body>
				{children}
				<SpeedInsights></SpeedInsights>
				<Analytics></Analytics>
			</body>
		</html>
	);
}
