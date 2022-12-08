/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#8f5a00',
        orange: '#fe9900',
        lace: '#fff7e9',
        'light-blue': '#5f9df7',
        'dark-blue': '#1746a2'
      }
    },
  },
  plugins: [],
}
