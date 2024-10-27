// src/app/div/View.tsx

'use client';

import React, { useRef } from 'react';
import StoryComponent from '@/components/Story';
import HappyHalloween from '@/components/HappyHalloween';
import ScrollProgress from '@/components/ScrollProgress';

export default function DivView() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div className="h-screen p-6 flex items-center justify-center">
			<div
				className="h-[50vh] overflow-y-auto w-full max-w-2xl border-4 border-secondary p-6 rounded-3xl"
				ref={containerRef}
			>
				<ScrollProgress containerRef={containerRef} />
				<StoryComponent />
				<HappyHalloween />
			</div>
		</div>
	);
}
