/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f0f0f0",
      gray: "#666666",
      black: "#0f0f0f",
      red: "#ff0000",
      darkRed: "#660000",
      pink: "#CC00FF",
      purple: "#7E1199",
      darkPurple: "#520066",
    },
    fontFamily: {
      details: ["Niagara Solid"],
    },
  },
  plugins: [],
};
