/** @type {import('tailwindcss').Config} */

const presets = require("@emryui/presets");

module.exports = {
  presets: [presets],
  content: ["./react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // YT headless button example
        "gradient-yt": [
          `linear-gradient(45deg, ${theme("colors.teal.700")}, ${theme(
            "colors.primary.800"
          )}, ${theme("colors.error.700")}), linear-gradient(45deg, ${theme(
            "colors.teal.700"
          )}, ${theme("colors.violet.600")}, ${theme("colors.orange.400")})`,
        ],
        // Shopify headless button example
        "gradient-shopify": [
          "linear-gradient(180deg, #ffffff12 80%, #ffffff26)",
        ],
      }),
      boxShadow: {
        shopify:
          "0rem 0.125rem 0rem 0rem #fff3 inset,0.125rem 0rem 0rem 0rem #fff3 inset,-0.125rem 0rem 0rem 0rem #fff3 inset,0rem -0.0625rem 0rem 0.0625rem #000 inset,0rem 0.0625rem 0rem 0rem #000 inset",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
