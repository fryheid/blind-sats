/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: '#8f5a00',
        orange: '#fe9900',
        'harvest-gold': '#d99126',
        lace: '#fff7e9',
        'light-blue': '#5f9df7',
        'boy-blue': '#709FE6',
        'dark-blue': '#1746a2',
        'oxford-900': '#030911',
        'oxford-800': '#071322',
        'oxford-700': '#0B1D32',
        'oxford-600': '#0F2743'
      }
    },
  },
  plugins: [],
}
