import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
	subsets: ['latin-ext'],
	display: 'swap',
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Pandan Studio',
	description: 'Design by Daniel Nguyen',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${inter.variable}`}>
			<body className='scroll-smooth'>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
