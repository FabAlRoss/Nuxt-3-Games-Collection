/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      blueishGray: "#243c5a",
      darkGrayBlue: "hsl(237, 17%, 21%)",
      darkDesaturatedBlue: "hsl(237, 23%, 32%)",
      teal: "#2dd4bf",
      golden: "#A49725",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      eater: ["Eater", "cursive"],
      frijole: ["Frijole", "cursive"],
      marker: ["Permanent Marker", "cursive"],
      slackey: ["Slackey", "cursive"],
      lobster: ["Lobster", "cursive"],
      prism: ["Tilt Prism", "cursive"],
    },
    extend: {
      dropShadow: {
        yellow: "5px 5px 2px rgb(220, 248, 94)",
      },
      backgroundImage: {
        "blackjack-bg": "url('~/assets/images/BlackJackBG.png')",
        "rickmorty-bg": "url('~/assets/images/RickMortyBG.png')",
        "rickmorty-card": "url('~/assets/images/RickMortyCard.jpg')",
      },
      keyframes: {
        upRotate: {
          "0%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-0.6rem) rotate(0)" },
          "100%": { transform: "translateY(-0.6rem) rotate(-45deg)" },
        },
        downRotate: {
          "0%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(0.6rem) rotate(0)" },
          "100%": { transform: "translateY(0.6rem) rotate(45deg)" },
        },
        upRotateReverse: {
          "0%": { transform: "translateY(-0.6rem) rotate(-45deg)" },
          "50%": { transform: "translateY(-0.6rem) rotate(0)" },
          "100%": { transform: "translateY(0) rotate(0)" },
        },
        downRotateReverse: {
          "0%": { transform: "translateY(0.6rem) rotate(45deg)" },
          "50%": { transform: "translateY(0.6rem) rotate(0)" },
          "100%": { transform: "translateY(0) rotate(0)" },
        },
      },
      animation: {
        upperOpen: "downRotate 0.5s linear forwards",
        lowerOpen: "upRotate 0.5s linear forwards",
        upperClose: "downRotateReverse 0.5s linear forwards",
        lowerClose: "upRotateReverse 0.5s linear forwards",
        spinOnce: "spin 0.5s 0.35s cubic-bezier(0.4, 0, 0.6, 1) forwards",
      },
    },
  },
  plugins: [],
};
