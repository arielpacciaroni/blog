/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Questrial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
