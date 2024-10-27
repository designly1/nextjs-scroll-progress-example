 Sometimes the simplest addition to a website can make a huge impact on the user experience. Progress bars are one of those things. People like to have visual feedback from the app they are interfacing with. It makes it seem more responsive and animated.

![Demo Progress Bar](https://cdn.designly.biz/blog_files/how-to-create-a-scroll-progress-bar-in-next-js-react/image1.gif)

Having a progress bar for the scroll position of the page or even a `div` element is no different. It's not strictly necessary, but it adds a pleasing visual effect to the page. And the best part is that we can accomplish this with very little code and zero dependencies. So why not give it a try?

There will be a link to a demo site as well as its GitHub repository at the bottom of this article. The project was bootstrapped using `npx create-next-app@latest`, which as of the writing of this article is version 15. I am also using TailwindCSS for styling. You could just as easily use `create-react-app` as well, as there is nothing Next.js-specific about this example.

Now on to the coding!

## Creating Our Reusable Component

First, let's create the actual progress bar component that we will be able to import into any app:

```ts
// src/components/ScrollProgress.tsx

'use client';

import React, { useEffect, useState } from 'react';

interface Props {
	containerRef?: React.RefObject<HTMLDivElement>;
	className?: string;
	height?: number;
}

export default function ScrollProgress(props: Props) {
	// Props
	const { containerRef, className = '', height = 7 } = props;

	// State
	const [scrollProgress, setScrollProgress] = useState(0);

	// Effects
	useEffect(() => {
		const handleScroll = () => {
			/**
			 * Determine the target element to calculate scroll progress.
			 * If a containerRef is provided, use that element; otherwise, use the document element.
			 */
			const target = containerRef?.current || document.documentElement;

			// Calculate the scroll progress based on the target element's scroll position
			const { scrollTop, scrollHeight, clientHeight } = target;
			const totalHeight = scrollHeight - clientHeight;
			const progress = (scrollTop / totalHeight) * 100;

			// Update the scroll progress state
			setScrollProgress(progress);
		};

		const target = containerRef?.current || window;

		// Add a scroll event listener to the target element
		target.addEventListener('scroll', handleScroll);

		return () => {
			// Remove the scroll event listener when the component is unmounted
			target.removeEventListener('scroll', handleScroll);
		};
	}, [containerRef]);

	return (
		<div
			className={`fixed top-0 left-0 w-full bg-primary ${className}`}
			style={{ width: `${scrollProgress}%`, height: `${height}px`, zIndex: 99999 }}
		/>
	);
}
```

This component accepts three props:

1. `containerRef`: optional ref to use if we are attaching to a div
2. `className`: additional class names to pass to the progress bar
3. `height`: optional height (thickness) of the progress bar

The color is determined by the `bg-primary` class, which you can either extend in `tailwind.config.json` or by using `daisyui`, a Tailwind plugin.

If we do not supply a `containerRef`, then the scroll event will be attached to the document by default.

## Using the Component

Now that we have our component, here's how you can add it to your app. In this example, we are going to place it in `layout.tsx` because I am using Next.js App Router:

```ts
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
```

## Thank You!

Thank you for taking the time to read my article and I hope you found it useful (or at the very least, mildly entertaining). For more great information about web dev, systems administration and cloud computing, please read the [Designly Blog](https://blog.designly.biz). Also, please leave your comments! I love to hear thoughts from my readers.

If you want to support me, please follow me on [Spotify](https://open.spotify.com/album/2fq9S51ULwPmRM6EdCJAaJ?si=USeZDsmYSKSaGpcrSJJsGg)!

### Current Projects

- [Snoozle.io](https://snoozle.io)- An AI app that generates bedtime stories for kids ❤️
- [react-poptart](https://react-poptart.vercel.app/) - A React Notification / Alerts Library (under 20kB)
- [Spectravert](https://spectravert.com/) - A cross-platform video converter (ffmpeg GUI)
- [Smartname.app](https://smartname.app/) - An AI name generator for a variety of purposes

Looking for a web developer? I'm available for hire! To inquire, please fill out a [contact form](https://designly.biz/contact).