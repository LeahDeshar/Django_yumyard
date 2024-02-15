const colors = {
  black: "#000",
  grey: "#7b8ca4",
  highlight: "#f4e3b2",
  light: "#d3d5d7",
  light2: "#F7F2FA",
  lightGray: "#f8f4f4",
  lightGray2: "#d4d4d4",
  opacity: "#ffffff51",
  mediumGray: "#888889",
  // primary: "#cf5c36",
  prim: "#cf5c36",
  red: "#fc5c65",
  secondary: "#efc88b",
  white: "#fff",
  iosBackground: "#f2f2f6",
  green: "green",
  yellow: "#FBC02D",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
  colors,
};
