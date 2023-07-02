/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screen/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: [
          "Montserrat",
        ],
        montbold: [
          "Montserrat-Bold",
        ],
        valo: [
          "Valorant",
        ],
      },
      colors: {
        mor: "#6B47C5",
      },
    },
  },
  plugins: [],
};
