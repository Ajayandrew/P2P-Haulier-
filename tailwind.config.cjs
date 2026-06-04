/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F6921E',
          blue: '#0D3B66',
          dark: '#0B3154',
        }
      }
    },
  },
  plugins: [],
}