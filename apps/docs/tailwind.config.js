/** @type {import('tailwindcss').Config} */

const path = require("path");

module.exports = {
  presets: [require("../../packages/ui/tailwind.config")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@emryui/react-button")), "**/*.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
