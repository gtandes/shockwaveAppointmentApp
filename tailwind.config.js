/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				fadeOut: 'fadeOut 1.5s ease-out',
				leftSidebarFold: 'slideInRight 0.5s ease-in-out',
				leftSidebarUnfold: 'slideInLeft 0.5s ease-in-out',
			},

			// that is actual animation
			keyframes: () => ({
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				fadeOut: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				},
				slideInRight: {
					'0%': { width: 240 },
					'100%': { width: 120 },
				},
				slideInLeft: {
					'0%': { width: 120 },
					'100%': { width: 240 },
				},
			}),

			colors: {
				white: '#fff',
				gray: 'rgba(28, 28, 30, 0.4)',
				'gray-gray-80': 'rgba(255, 255, 255, 0.2)',
				'gray-gray-100': '#1c1c1e',
				orangered: '#ff630b',
				coral: '#ff9447',
				blueviolet: '#9747ff',
				lightgray: '#d8d3cc',
				darkgray: '#9d9c9c',
				whitesmoke: '#f2f2f1',
				antiquewhite: '#fedfce',
				'lorem-text': '#6a8eae',
			},
			fill: {
				current: 'currentColor',
				orangered: '#ff630b',
			},
			fontFamily: {
				urbanist: 'Urbanist',
			},
			borderRadius: {
				'17xl': '36px',
				'81xl': '100px',
			},
		},
		fontSize: {
			'3xs': '0.25rem',
			'2xs': '0.5rem',
			xs: '0.75rem',
			base: '1rem',
			'2xl': '1.25rem',
			'5xl': '1.5rem',
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
	],
	corePlugins: {
		preflight: false,
	},
};
