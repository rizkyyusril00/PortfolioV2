/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bg' : '#00010D',
        'primary' : '#E5E0E1',
        'secondary' : '#BEF1F4',
      }
    },
  },
  plugins: [],
}