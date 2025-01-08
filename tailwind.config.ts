import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "360px",

      tablet: "768px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      colors: {
        one: "#DDE6ED",
        two: "#9DB2BF",
        three: "#526D82",
        four: "#27374D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
