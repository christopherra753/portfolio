/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        first: '#08536d',
        second: '#f7f7f7'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
