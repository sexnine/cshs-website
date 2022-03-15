const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: colors.red,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};
