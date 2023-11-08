/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./Routers.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./assets/components/*.{js,jsx,ts,tsx}",
    "./assets/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray: {
          10: "#1F1B29",
          25: "#2E2A36",
          50: "#616161",
          110: "#99969E",
          220: "#BAB9BD",
          330: "#DEDEE0",
          440: "#ECECEE",
          550: "#F3F3F5",
        },
        pink: {
          primary: "#F50057",
          secundary: "#EC407A",
        },
        blue: {
          link: "#1A44AF",
        },
        cyan: "#80DEEA",
      },
      textStyle: {
        fontSize: {
          header:{
            1: '25px',
            2: '20px',
            3: '18px',
          },
          body:{
            1: '16px',
            2: '14px',
            3: '12px',
            4: '10px',
          },
        },
        fontFamily: {
          'sans': ['Roboto', 'sans-serif'],
        },
      }
    },
  },
  plugins: [],
}

