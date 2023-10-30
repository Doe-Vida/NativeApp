/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./Routers.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./assets/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pink:{
          primary: "#F50057",
          second: "#EC407A",
        },
      }
    },
  },
  plugins: [],
}

