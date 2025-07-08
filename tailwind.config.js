/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayscale: {
          1000: '#1C1C1E',
          900: '#343437',
          800: '#4C4C52',
          700: '#65656C',
          600: '#7E7E86',
          500: '#98989F',
          400: '#B2B2B8',
          300: '#CDCDD0',
          200: '#E7E7E9',
        }
      }
    },
  },
  plugins: [],
}
