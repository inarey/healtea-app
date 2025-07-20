// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F3F7EE",
          100: "#E5EED9",
          200: "#CDDFB7",
          300: "#A8C686",
          400: "#8FB368",
          500: "#71984A",
          600: "#577838",
          700: "#445D2E",
          800: "#394B29",
          900: "#324126",
          950: "#182211",
        },
      },
    },
  },
  plugins: [],
}