const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //        sans: ['iranyekan', ...defaultTheme.fontFamily.sans],
  //     },
  //  },
   
  // },
  theme: {
    fontFamily: {
      iranyekan: ["iranyekan", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
}