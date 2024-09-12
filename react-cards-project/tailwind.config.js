/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f0f0f0",
      black: "#0f0f0f",
      "gray-100": "#D6DCF3",
      "gray-200": "#D6DCF3",
      "gray-800": "#8A8A8A",
      "gray-900": "#666666",
      "purple-500": "#CC00FF",
      "purple-800": "#7E1199",
      "purple-900": "#520066",
      "red-500": "#ff0000",
      "red-800": "#770A0A",
      "red-900": "#660404",
      "yellow-500": "#FFC200",
      "yellow-900": "#A99304",
      "marine-blue-500": "#0075FF",
      "marine-blue-900": "#001272",
    },
    fontFamily: {
      details: ["Niagara Solid"],
    },
  },
  plugins: [],
};
