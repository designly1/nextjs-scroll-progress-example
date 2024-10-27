// src/components/Header.tsx

'use client';

import React from 'react';
import { Link } from 'nextjs13-progress';
import GitHubButton from './GitHubButton';

import { usePathname } from 'next/navigation';

interface ButtonProps {
	href: string;
	children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
	const currentPath = usePathname();

	const isActive = currentPath === href;

	return (
		<Link
			className={`flex font-bold items-center justify-center text-xl md:text-2xl ${
				isActive ? 'bg-secondary text-base-300' : 'bg-base-300 text-secondary'
			}`}
			href={href}
		>
			{children}
		</Link>
	);
}

export default function Header() {
	return (
		<>
			<header className="h-20 w-full grid grid-cols-2 fixed z-20">
				<Button href="/">Document Scroll</Button>
				<Button href="/div">Div Scroll</Button>
			</header>
			<div className="h-20" />
			<GitHubButton />
		</>
	);
}
