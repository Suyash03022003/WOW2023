/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#212224',
        'pass': '#191B1D'
      },
      boxShadow: {
        'custom-shadow': '0px 4px 9px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
