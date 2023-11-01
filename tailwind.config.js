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
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          10: "#1F1B29",
          25: "#2E2A36",
          50: "#616161",
          100: "#99969E",
          200: "#BAB9BD",
          300: "#616161",
          400: "#ECECEE",
          500: "#F3F3F5",
        },
        pink: {
          primary: "#F50057",
          second: "#EC407A",
        },
        blue: {
          link: "#1A44AF",
        },
        cyan: "#80DEEA",
      },
      textStyle: {
        fontSize: {
          'header1': '25px',
          'header2': '20px',
          'header3': '18px',
          'body1': '16px',
          'body2': '14px',
          'body3': '12px',
          'body4': '10px',
        },
        fontFamily: {
          'sans': ['Roboto', 'sans-serif'],
        },
      }
    },
  },
  plugins: [],
}

