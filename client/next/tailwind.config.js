const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.blue,
        tertiary: colors.indigo,
      },
    },
  },
  plugins: [],
}
