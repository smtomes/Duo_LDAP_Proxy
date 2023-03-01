/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
      },
    },
  },
  plugins: [],
};
