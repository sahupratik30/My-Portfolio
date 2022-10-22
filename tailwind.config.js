/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "portfolio-black": "#000000",
        "portfolio-orange": "#FFBD39",
        "portfolio-grey": "#999999",
        "portfolio-light-grey": "#f1f1f1",
        "portfolio-white": "#FFFFFF",
        "deep-grey": "#333333",
        "light-black": "#212121",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1192px",
        xl: "1192px",
        "2xl": "1192px",
      },
    },
    screens: {
      xs: "300px",
      s: "530px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
