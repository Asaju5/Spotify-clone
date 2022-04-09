const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Montserrat"],
      body: ["Raleway"],
    },
    extend: {
      brightness: ["hover"],
      contrast: ["hover"],
      fontWeight: ["hover"],
      borderWidth: ["hover, active"],
      backgroundColor: ["active"],
      outline: ["focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
