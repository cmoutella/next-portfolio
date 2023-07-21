const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pageComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "changa-one": ["var(--changa-one-font)", "cursive"],
      "han-sans": ["var(--han-sans-font)", ...fontFamily.sans],
      paytone: ["var(--paytone-font)", ...fontFamily.sans],
      "red-hat": ["var(--red-hat-font)", ...fontFamily.sans],
    },
    extend: {
      container: {
        center: true,
        padding: "10px",
      },
      colors: {
        primary: {
          pale: "#F0CDDF",
          lighter: "#E5C1D7",
          light: "#DD54A6",
          medium: "#A40765",
          "medium-opacity": "#A4076595",
          dark: "#8A1C5E",
          darker: "#441245",
        },
        secondary: {
          light: "#E3BF01",
        },
        terciary: {
          pale: "#CDE5F0",
          light: "#2A9AD9",
          medium: "#2075A5",
        },
        gray: {
          pale: "#F0F0F0",
          pinky: "#FAF4F7",
          light: "#3E4751",
          "light-opacity": "#3E475180",
          medium: "#2D343B",
          dark: "#403440",
          darker: "#111111",
        },
        green: {
          pale: "#D0F0CD",
        },
        white: "#fff",
        black: "#000",
        dark: "#403440",
      },
    },
  },
  plugins: [],
};
