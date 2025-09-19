/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./index.html"
],
  theme: {
    extend: {}, // you can add custom colors, fonts, spacing here
  },
  plugins: [], // add Tailwind plugins here if needed
};
