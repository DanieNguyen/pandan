import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { Viewport } from 'next';

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
		<html lang='en' className='font-sans bg-white'>
			<body>{children}</body>
		</html>
	);
}
