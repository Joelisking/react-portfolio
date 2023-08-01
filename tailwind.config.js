/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				spin: {
					'100%': {
						transform: 'rotate(- 360deg)',
					},
				},
			},
			animation: {
				spin: 'spin 3s linear infinite',
			},
			fontFamily: {
				burtons: 'burtons',
        architect: 'architect',
        poppins: 'poppins',
			},
		},
	},
	plugins: [],
}
