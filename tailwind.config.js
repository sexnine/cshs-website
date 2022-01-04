const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      red: colors.red,
      green: colors.green,
      pink: colors.pink,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
