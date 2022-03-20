const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#023047",
        dusk: "#202022",
        dawn: "#949495",
        react: "#61dafb",
        nextjs: "#fafafa",
        js: "#d6ba32",
        html: "#dd4b25",
        css: "#254bdd",
        redux: "#7248b6",
        saga: "#84d269",
        node: "#3b823c",
        git: "#161b22",
        docker: "#2496ec",
        babel: "#f9dc3c",
        cypress: "#47474a",
        ts: "#3074bf",
        tailwind: "#08b6d3",
        webpack: "#2b3a42",
        "story-book": "#ff4685",
        "styled-components": "#d76c8d",
        "blue-gray": colors.slate,
        "cool-gray": colors.gray,
        "true-gray": colors.neutral,
        "warm-gray": colors.stone,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
