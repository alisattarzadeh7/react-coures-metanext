/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      primary:'#012882',
      primaryDark:'#0332e3',
      secondary:'#979797',
      secondaryDark:'#bab9b9',
      danger:'#ff0000',
      white:'#f8f8ea',
      black:'#00002f',
    },
    extend: {},
  },
  plugins: [],
}

