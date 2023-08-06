/** @type {import('tailwindcss').Config} */

const presets = require("./presets/src/index");

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
    },
  },
  plugins: [],
};
