import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );
  addBase({
    ":root": newVars,
  });
}
