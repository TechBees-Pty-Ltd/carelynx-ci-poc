/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      zIndex: {
        '1000': '1000',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
