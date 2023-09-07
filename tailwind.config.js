/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          centeredImage: '#565656',
          primary: '#FFB800'
        }
      }
    },
  },
  plugins: [],
}

