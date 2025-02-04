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
      wide: "1440px",
      laptop: { max: "1024px" },
      tablet: { max: "900px" },
      phoneL: { max: "500px" },
      phoneP: { max: "390px" },
    },
  },
  plugins: [],
};
