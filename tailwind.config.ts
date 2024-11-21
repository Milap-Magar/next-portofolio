import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ["var(--font-tmr)", "sans-serif"],
      },
      colors: {
        background: {
          DEFAULT: "var(--color-background-light)",
          dark: "var(--color-background-dark)",
        },
        foreground: {
          DEFAULT: "var(--color-foreground-light)",
          dark: "var(--color-foreground-dark)",
        },
        green: {
          50: "##65DDBF",
          100: "#DAF1DE",
          200: "#8EB69B",
          300: "#235347",
          400: "#163832",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
