/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      slg: '1024px',
      lg: '1300px',
      xl: '1800px', // Ubah nilai xl menjadi 1440px
    },
    extend: {
      colors : {
        'bg' : '#00010D',
        'primary' : '#E5E0E1',
        'secondary' : '#BEF1F4',
      },
      animation: {
        "spins": "spins 4s linear infinite",
      },
      keyframes: {
        "spins":{
          from: {transform: "rotate(0deg)"},
          to: {transform: "rotate(360deg)"},
        },
      }
    },
  },
  plugins: [],
}