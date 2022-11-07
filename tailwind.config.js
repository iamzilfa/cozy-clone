/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Fraunces', serif",
      },
      backgroundImage: {
        banner: "linear-gradient(270deg,#302f39,#223240 95%)",
        headbg:"linear-gradient(90deg,#302f39,#223240)"
      },
      colors: {
        cameo: "#d4ac8e",
        sandash: "#e4ded5",
        lightorange : "#c47d57"
      },
    },
  },
  plugins: [],
};
