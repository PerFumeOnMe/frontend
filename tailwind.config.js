/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '393px',
      },
      width: {
        'mobile': '393px',
        'mobile-min': '373px',
      },
      minWidth: {
        'mobile': '373px',
      },
    },
  },
  plugins: [],
} 