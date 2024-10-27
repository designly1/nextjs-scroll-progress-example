import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				halloween: {
					primary: '#f28c18',
					'primary-focus': '#c9710d',
					'primary-content': '#131616',

					secondary: '#6d3b9b',
					'secondary-focus': '#532c77',
					'secondary-content': '#ffffff',

					accent: '#4fa300',
					'accent-focus': '#367000',
					'accent-content': '#ffffff',

					neutral: '#1b1d1d',
					'neutral-focus': '#131616',
					'neutral-content': '#ffffff',

					'base-100': '#1f1f1f',
					'base-200': '#1b1d1d',
					'base-300': '#131616',
					'base-content': '#ffffff',

					info: '#66c7ff',
					success: '#87cf3a',
					warning: '#e1d460',
					error: '#ff6b6b',

					'--rounded-box': '1rem',
					'--rounded-btn': '.5rem',
					'--rounded-badge': '1.9rem',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',
				},
			},
		],
	},
};
export default config;
