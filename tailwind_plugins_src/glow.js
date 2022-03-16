const plugin = require("tailwindcss/plugin");

function getFromTWColor(value, colors) {
  let stringSplit = value.split("-");
  if (Object.keys(colors).some((v) => v == stringSplit[0])) {
    if (stringSplit.length > 1) {
      let res = colors;
      for (let i = 0; i < stringSplit.length; i++) {
        res = res[stringSplit[i]];
      }
      return res;
    } else {
      res = colors[stringSplit[0]];
      return typeof res === "string" ? res : null;
    }
  } else {
    return null;
  }
}

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities({
    "text-glow": (value) => {
      let color = getFromTWColor(value, theme("colors"));
      color = color ? color : value;
      return {
        textShadow: `0 0 1px #fff, 0 0 7px ${color}, 0 0 10px ${color}, 0 0 21px ${color}, 0 0 42px ${color}, 0 0 82px ${color}`,
      };
    },
  });
});
