/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "479px",
      // => @media (min-width: 479px) { ... }

      md: "767px",
      // => @media (min-width: 767px) { ... }

      lg: "991px",
      // => @media (min-width: 991px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Fraunces", "cursive"],
        frauncesItalic: ["FrauncesItalic", "cursive"],
        frauncesBold: ["FrauncesBold", "cursive"],
        frauncesBlack: ["FrauncesBlack", "cursive"],
        frauncesBoldItalic: ["FrauncesBoldItalic", "cursive"],
        frauncesSemiBold: ["FrauncesSemiBold", "cursive"],
        fraunces144pt: ["Fraunces144p", "cursive"],
        geomanist: ["Geomanist", "cursive"],
        geomanistBold: ["GeomanistBold", "cursive"],
        robot: "'Roboto', sans-serif",
      },
      backgroundImage: {
        banner: "linear-gradient(270deg,#302f39,#223240 95%)",
        headbg: "linear-gradient(90deg,#302f39,#223240)",
        noisebg: "url('/assets/images/noise10.webp')",
        abtbg: "url('/assets/vectors/stacked-waves-haikei.svg')",
      },
      colors: {
        cameo: "#d4ac8e",
        sandash: "#e4ded5",
        lightorange: "#c47d57",
        theborder: "#d4ac8e",
        radicalRed: "rgb(255 61 46)",
        jungleGreen: "#17313b",
        concretegray: "#f3f3f3",
        justgray: "rgb(23 59 49)",
        pinklove: "#d90f54",
        anothergray: "#223240",
        fieryOrange: "#b55730",
        seaworthy: "#2d4850",
        turchesse: "#2977c9",
        darkBlue: "#4267b2",
        brightred: "#e4405f",
        perisanred: "#c4302b",
        stell: "#16313a",
        seal: "#223240",
        lightBlue: "#1da1f2",
      },
    },
  },
  plugins: [],
};
