import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from the design
        "sage-hero":   "#bacdaf",   // hero background
        "sage-mid":    "#8fb08a",   // mid green
        "sage-dark":   "#2e3a32",   // dark text / footer
        "pink-hot":    "#ffbedd",   // pink (buttons, accents)
        "pink-light":  "#f8dde5",   // light pink sections
        "pink-pale":   "#faf2f5",   // near-white cream bg
        "cream-bg":    "#f5f0e8",   // shelf section bg
      },
      fontFamily: {
        seasons:     ["'The Seasons'", "Georgia", "serif"],
        montserrat:  ["'Montserrat'", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        card: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
