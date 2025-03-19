
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
          50: '#faf6f0',
          100: '#f5ead8',
          200: '#edd4b0',
          300: '#e5be88',
          400: '#dca366',
          500: '#d28b4a',
          600: '#c3783e',
          700: '#a15d34',
          800: '#834b30',
          900: '#6c3f2b',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        bronze: {
          50: '#fbf7f2',
          100: '#f5ead8',
          200: '#edd4b0',
          300: '#e5be88',
          400: '#d9a064',
          500: '#c7854a',
          600: '#b46b3b',
          700: '#955330',
          800: '#7a472d',
          900: '#653c27',
        },
        gold: {
          50: '#fcfaf5',
          100: '#faf0d7',
          200: '#f5e1b0',
          300: '#f0cf84',
          400: '#e9b552',
          500: '#e0982a',
          600: '#cc7e22',
          700: '#a85d1e',
          800: '#884920',
          900: '#713c1e',
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
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
				},
        shimmer: {
          '0%': { backgroundPosition: '-40rem 0' },
          '100%': { backgroundPosition: '40rem 0' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s infinite linear'
			},
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
