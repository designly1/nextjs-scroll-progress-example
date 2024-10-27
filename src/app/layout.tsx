import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import ScrollProgress from '@/components/ScrollProgress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Next13NProgress } from 'nextjs13-progress';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'A Halloween Horror Story',
	description: 'A spooky tale of web development gone awry.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black hw-bg`}>
				<main className="min-h-screen flex flex-col text-base-content">
					<ScrollProgress />
					<Header />
					{children}
					<Footer />
				</main>
				<Next13NProgress color="#f28c18" height={7} />
			</body>
		</html>
	);
}
