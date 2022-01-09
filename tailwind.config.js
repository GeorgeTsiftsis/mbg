// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      fontSize: {
        "10xl": "14rem",
      },
      colors: {
        myblack: "#282d32",
        myblue: "#1b4f6d",
        mybrowncompl: "#6D391B",
        mygray: "#647e93",
        mywhite: "#ecf6fe",
        mybrown: "#937964",
        mympez: "#D4D2CB",
        myfooter: "#344351",
        mypurple: "#815253",
        mypurple2: "#9F6768",
        myteal: "#528180",
        myepikentro: "#1f1f1f",
        mygraduatesblue: "#0A2864",
        mygreen: "#27594E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
