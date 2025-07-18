/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        gothic: ['"Special Gothic Expanded One"', "cursive"],
        worksans: ['"Work Sans"', "sans-serif"],
        boldonse: ["Boldonse"],
      },
      backgroundImage: {
        zen: "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
};
