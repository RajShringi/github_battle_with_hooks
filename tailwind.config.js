/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    animation: {
      jump: "jump .3s ease-in-out",
      loader: "loader .8s ease-in-out infinite",
    },
    keyframes: {
      jump: {
        "0%": { transform: "scale(.3)" },
        "100%": { transform: "scale(1)" },
      },
      loader: {
        "0%": { transform: "scale(.3)" },
        "50%": { transform: "scale(1)" },
        "100%": { transform: "scale(.3)" },
      },
    },
  },
  plugins: [],
};
