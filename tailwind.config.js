/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#050a18",
        cardBackground: "#0b0f21",
        primary: "#f2f2f2",
        secondary: "#747083",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
