import './globals.css';
import type { Metadata } from 'next';

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
		<html lang='en' className='font-sans'>
			<body>{children}</body>
		</html>
	);
}
