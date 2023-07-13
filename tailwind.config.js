/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
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
          light: "#2A9AD9",
          medium: "#2075A5",
        },
        gray: {
          light: "#3E4751",
          "light-opacity": "#3E475180",
          medium: "#2D343B",
          dark: "#403440",
        },
        white: "#fff",
        black: "#000",
        dark: "#403440",
      },
    },
  },
  plugins: [],
};
