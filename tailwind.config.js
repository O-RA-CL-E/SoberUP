/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"], // On cible le HTML dans le dossier public
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Urbanist', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a0a0c',
          gray: '#141418',
          cyan: '#00f2ff',
          lime: '#b1ff00',
          text: '#a1a1aa'
        }
      }
    }
  },
  plugins: [],
}