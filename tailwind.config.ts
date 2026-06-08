import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        saffron: {
          50: "#fff8ed",
          100: "#ffefd0",
          200: "#ffdb9a",
          300: "#ffc163",
          400: "#ff9e2c",
          500: "#ff8106",
          600: "#f06000",
          700: "#c74400",
          800: "#9e3600",
          900: "#7f2e00",
        },
        earth: {
          50: "#faf7f2",
          100: "#f2ebe0",
          200: "#e4d4bc",
          300: "#d2b791",
          400: "#bc9265",
          500: "#ac7a4a",
          600: "#9e6840",
          700: "#835237",
          800: "#6c4432",
          900: "#5a3a2c",
        },
        forest: {
          600: "#2d6a4f",
          700: "#1b4332",
          800: "#081c15",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
