import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: "Libre Baskerville, serif",
      sans: "Inter, sans-serif",
    },
    extend: {
      borderRadius: {
        project: "30px",
      },
      fontSize: {
        md: ["16px", "24px"],
        lg: ["24px", "24px"],
        xl: ["34px", "34px"],
        "2xl": ["48px", "56px"],
        "3xl": ["60px", "64px"],
      },
      colors: {
        light: "#808080",
        "light-grey": "#F5F5F7",
        "mid-grey": "#747474",
        "dark-grey": "#270511",
        "pink-light": "#FEF5F8",
        "pink-mid": "#FFC8DD",
        "pink-intense": "#FFA8C9",
        "pink-disabled": "#C9B0BA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-pink":
          "radial-gradient(1000px circle at var(--position, 10%) center,rgba(255, 168, 201, 0.4),transparent 80%)",
      },
      keyframes: {
        "enter-dot": {
          from: { width: "8px" },
          to: { width: "32px" },
        },
        "leave-dot": {
          from: { width: "32px" },
          to: { width: "8px" },
        },
      },
      animation: {
        "enter-dot": "enter-dot 200ms ease forwards",
        "leave-dot": "leave-dot 600ms ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
