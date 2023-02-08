/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "light" : "rgb(244, 244, 244)",
        "primary" : "#7aebfb",
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
  mode: "jit",
  darkMode: 'class'
};
