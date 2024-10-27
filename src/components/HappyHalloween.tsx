import React from 'react';
import Image from 'next/image';

import jack from '@/assets/svg/jack.svg';

export default function HappyHalloween() {
	return (
		<div className="mt-20 flex flex-col gap-10 items-center">
			<Image src={jack} alt="Jack-o-lantern" />
			<h1 className="text-primary font-bold text-3xl md:text-6xl">Happy Halloween!</h1>
		</div>
	);
}
