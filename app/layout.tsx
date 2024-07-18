import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

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
		<html lang='en' className='font-sansc bg-stone-950'>
			<body>{children}</body>
		</html>
	);
}
