/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        'cairo':['Cairo'],
        'Ubuntu':['Ubuntu'],
      },
      screens:{
        'md':'920px',
        'lg':'1100px'
         

      }
    },
  },
  plugins: [],
}

