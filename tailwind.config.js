/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./*.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('peer-menu-collapsed', '&.menu-collapsed ~ &');
    },
    require('@tailwindcss/forms'), 
  ],
};