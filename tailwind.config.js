
import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: ({ colors }) => ({
				primary: '#FFC115',
				secondary: '#000000',
				...colors
			}),
			container: {
				// you can configure the container to be centered
				center: true,

				// or have default horizontal padding
				padding: '1rem',

				// default breakpoints but with 40px removed
				screens: {
					sm: '600px',
					md: '768px',
					lg: '984px',
					xl: '1240px',
					'2xl': '1496px',
					'3xl': '1700px',
					// '4xl': '1800px',
				},
			},
		},
	},
	plugins: [
		addDynamicIconSelectors()
	],
}
