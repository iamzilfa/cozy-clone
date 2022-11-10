/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ssm: { max: "479px" },
        // => @media (max-width: 479px) { ... }

        mmd: "767px",
        // => @media (max-width: 767px) { ... }

        llg: "991px",
        // => @media (max-width: 991px) { ... }
      },
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
        palanquin: "'Palanquin', sans-serif",
      },
      backgroundImage: {
        banner: "linear-gradient(270deg,#302f39,#223240 95%)",
        headbg: "linear-gradient(90deg,#302f39,#223240)",
        noisebg: "url('/assets/images/noise10.webp')",
        abtbg: "url('/assets/vectors/stacked-waves-haikei.svg')",
        helpgrad: "linear-gradient(180deg,rgba(0,0,0,.8),rgba(0,0,0,.8))",
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
      boxShadow: {
        xll: "0 8px 24px 0 rgb(82 91 115 / 12%",
        xxl: "0 10px 24px 0 rgb(196 125 87 / 90%)",
        llxx: "0 10px 24px 0 rgb(45 72 80 / 70%)"
      },
      backgroundSize: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
