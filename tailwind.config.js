/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Baloo Bhai 2"', 'sans'],
        test: ['"Playwrite CU"', 'cursive'],
      },
      colors: {
        'primary-bg': 'var(--bg-primary)',
      }
    },
  },
  plugins: [],
}

