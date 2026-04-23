import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#060810",
        obsidian: "#0A0D12",
        navy: "#0F1923",
        panel: "#111C29",
        steel: "#4A7A9B",
        mist: "#8FB4CC",
        cloud: "#EDF0F4",
        signal: "#1A8FD1",
        ink: "#0C1A2E",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "Arial", "sans-serif"],
        display: ["var(--font-barlow-condensed)", "Arial Narrow", "Arial", "sans-serif"],
      },
      borderRadius: {
        xs: "2px",
        sm: "3px",
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(26, 143, 209, 0.18), 0 24px 80px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
