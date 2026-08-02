import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Rounded geometric sans for display, Inter for body
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Indigo / violet primary (kept as `brand-*`)
        brand: {
          50: '#eeecfd',
          100: '#dcd8fb',
          200: '#bbb2f7',
          300: '#9a8bf3',
          400: '#8b7bff',
          500: '#6c5ce7',
          600: '#5a4bd1',
          700: '#4638a8',
          800: '#352b80',
          900: '#272060',
          950: '#161138',
        },
        // Deep night-sky navy used behind the hero
        navy: {
          900: '#0b0b2e',
          800: '#141248',
          700: '#1e1a63',
        },
        accent: {
          pink: '#ff5c8a',
          coral: '#ff6b6b',
          cyan: '#22d3ee',
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(23, 17, 56, 0.18)',
        'soft-lg': '0 24px 60px -20px rgba(23, 17, 56, 0.25)',
        glow: '0 12px 40px -8px rgba(108, 92, 231, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
