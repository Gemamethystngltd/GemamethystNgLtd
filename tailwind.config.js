/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        webpurple: "#6E3994",
        lightwhite: " rgba(255, 255, 255, 0.9)",
        vantablack: "#1A1A1A",
      },
    },
    screens: {
      sm: { max: "639px" }, // For screens <= 639px
      md: { max: "767px" }, // For screens <= 767px
      lg: { max: "1023px" }, // For screens <= 1023px
      xl: { max: "1279px" }, // For screens <= 1279px
      "2xl": { max: "1535px" }, // For screens <= 1535px
    },
  },
  plugins: [],
};
