/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#FF6000",
        secondary: "#CF0A0A",
        tertiary: "#000000",
        accent: "#FF7700",
      },
      fontFamily: {
        sans: ["Roboto", "Montserrat", "sans-serif"],
        serif: ["Suranna"],
      },
      backgroundImage: {
        site: "url('./assets/sugarcoffee-1.jpg')",
        about: "url('./assets/black2.jpg')",
      },
      plugins: [],
    },
  },
};
