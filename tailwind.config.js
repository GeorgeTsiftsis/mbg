// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        stick: ["Russo One"],
        fancy: ["Roboto"],
        manrope: ["Manrope"],
      },
      colors: {
        myblack: "#282d32",
        myblue: "#1b4f6d",
        mygray: "#647e93",
        mywhite: "#ecf6fe",
        mybrown: "#937964",
        mympez: "#D4D2CB",
        myfooter: "#344351",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
