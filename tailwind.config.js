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
      lg: { max: "1024px" },
      md: { max: "800px" },
      m: { max: "500px" },
      sm: { max: "350px" },
    },
  },
  plugins: [],
};
