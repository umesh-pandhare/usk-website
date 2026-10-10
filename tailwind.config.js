import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy surfaces
        navy: {
          950: '#060A1C',
          900: '#0A1030',
          800: '#101A45',
          700: '#1A2760',
          600: '#27377F',
        },
        // Blue-violet accent
        brand: {
          50: '#EFF1FF',
          100: '#E0E4FF',
          200: '#C6CCFF',
          300: '#A3ABFF',
          400: '#7F87FB',
          500: '#6064F2',
          600: '#4A46E0',
          700: '#3C37C4',
          800: '#322F9E',
          900: '#2B2A7A',
        },
        // Cool neutral surface for light sections
        mist: '#F5F7FC',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk Variable"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 16, 48, 0.04), 0 8px 24px -12px rgba(10, 16, 48, 0.12)',
        lift: '0 2px 4px rgba(10, 16, 48, 0.05), 0 24px 40px -20px rgba(43, 42, 122, 0.35)',
        glow: '0 0 0 1px rgba(127, 135, 251, 0.25), 0 30px 80px -30px rgba(96, 100, 242, 0.55)',
      },
      maxWidth: {
        content: '76rem',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(163,171,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,171,255,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
