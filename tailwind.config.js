const colors = require("tailwindcss/colors");
const glowPlugin = require("./tailwind_plugins_src/glow");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
    colors: {
      red: colors.red,
      green: colors.green,
      orange: colors.orange,
      blue: colors.blue,
      pink: colors.pink,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [glowPlugin],
};
