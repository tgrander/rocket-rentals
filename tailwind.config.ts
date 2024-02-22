import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
