
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
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
				enigma: {
					dark: '#000000',
					accent: '#9b87f5',
					secondary: '#7E69AB',
					light: '#F1F0FB',
					'light-accent': '#E5DEFF',
					'light-secondary': '#D3E4FD',
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
				typewriter: {
					to: {
						left: '100%'
					}
				},
				blink: {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '0.4'
					},
					'50%': {
						opacity: '1'
					}
				},
				'matrix-flow': {
					'0%': {
						transform: 'translateY(-100%)'
					},
					'100%': {
						transform: 'translateY(100%)'
					}
				},
				'noise-animation': {
					'0%, 100%': {
						'background-position': '0 0'
					},
					'10%': {
						'background-position': '-5% -5%'
					},
					'20%': {
						'background-position': '-10% 5%'
					},
					'30%': {
						'background-position': '5% -10%'
					},
					'40%': {
						'background-position': '-15% 15%'
					},
					'50%': {
						'background-position': '15% 5%'
					},
					'60%': {
						'background-position': '-10% -5%'
					},
					'70%': {
						'background-position': '15% 15%'
					},
					'80%': {
						'background-position': '-5% 5%'
					},
					'90%': {
						'background-position': '10% 10%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				typewriter: 'typewriter 4s steps(40) infinite',
				blink: 'blink 1s step-end infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'bounce-slow': 'bounce-slow 3s infinite',
				'glow-pulse': 'glow-pulse 2s infinite',
				'matrix-flow': 'matrix-flow 20s linear infinite',
				'noise-anim': 'noise-animation 8s steps(10) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
