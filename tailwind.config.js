/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    animation: {
      jump: "jump .3s ease-in-out",
    },
    keyframes: {
      jump: {
        "0%": { transform: "scale(.3)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },
  plugins: [],
};
