import React from 'react';

export default function Footer() {
	return (
		<footer className="mt-auto text-sm py-2 flex justify-center bg-base-100">
			<p>
				&copy; {new Date().getFullYear()} | Made with ❤️ by{' '}
				<a className="link-accent" href="https://designly.biz" target="_blank" rel="noopener noreferrer">
					Designly
				</a>
			</p>
		</footer>
	);
}
