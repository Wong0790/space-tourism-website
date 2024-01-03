const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", defaultTheme.fontFamily.sans],
        barlow: ["Barlow", defaultTheme.fontFamily.sans],
        barlow_condensed: ["Barlow Condensed", defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-blue": "#0B0D17",
        "light-purple": "#D0D6F9",
      },
    },
  },
  plugins: [],
};
