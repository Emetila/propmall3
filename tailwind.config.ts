import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xsm: '320px',
  		sm: '500px',
  		md: '768px',
  		lg: '976px',
  		xl: '1440px'
  	},
  	fontSize: {
  		sm: '0.8rem',
  		base: '1rem',
  		xl: '1.25rem',
  		'2xl': '1.563rem',
  		'3xl': '1.953rem',
  		'4xl': '2.441rem',
  		'5xl': '3.052rem'
  	},
  	colors: {
  		transparent: 'transparent',
  		current: 'currentColor',
		overlay: 'rgba(4, 3, 3, 0.40);',
		'shadow': 'rgba(198, 198, 198, 0.25)',
  		green: '#57B890',
		'green-active': '#469373',
  		'light-green': '#EEF8F4',
  		'light-green-active': '#CBE9DD',
  		'dark-green': '#275341',
  		black: '#000000',
  		violet: '#1C0B54',
  		'dark-violet': '#0A041D',
  		'light-violet': '#E8E7EE',
  		'light-white': '#FEFFFF',
  		'box-shadow': 'rgba(217, 217, 217, 0.25)'
  	},
  	fontFamily: {
  		sans: ['Montserrat', 'Open Sans']
  	},
  	borderRadius: {
  		DEFAULT: '32px'
  	},
  	extend: {
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  
  plugins: []
};
export default config;
