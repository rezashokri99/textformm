const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./public/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['iranyekan'],
        iranyekan: ['iranyekan'],
      },
   },
   
  },
  plugins: [],
}