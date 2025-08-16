/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/theme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          background: "#0E0E0E",
          foreground: "#FFFFFF",
          primary: {
            50: "#f3f0ff",
            100: "#ede9fe", 
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            DEFAULT: "#8b5cf6",
            foreground: "#FFFFFF",
          },
        },
      },
    },
  })],
}