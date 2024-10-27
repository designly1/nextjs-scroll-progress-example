import React from 'react';
import StoryComponent from '@/components/Story';
import HappyHalloween from '@/components/HappyHalloween';

export default function HomePage() {
	return (
		<div className="w-full max-w-2xl mx-auto py-20 px-8">
			<h1 className="text-3xl font-bold text-center mb-12 text-primary">A Halloween Horror Story</h1>
			<StoryComponent />
			<HappyHalloween />
		</div>
	);
}
