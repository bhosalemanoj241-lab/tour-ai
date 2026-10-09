/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        travel: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        slate: {
          850: '#172033',
          950: '#0A0F1D',
        },
        coral: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
        sand: {
          50: '#FAF9F6',
          100: '#F5F4F0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F7F9FC',
          subtle: '#F1F5F9',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -1px rgba(0, 0, 0, 0.04), 0 1px 3px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 28px -4px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'modal': '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
        'float': '0 8px 24px -4px rgba(2, 132, 199, 0.25)',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
