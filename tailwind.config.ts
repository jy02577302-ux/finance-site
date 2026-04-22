import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 高端深色系 - 主品牌
        primary: {
          50: "#f8fafc",   // slate-50
          100: "#f1f5f9",  // slate-100
          200: "#e2e8f0",  // slate-200
          300: "#cbd5e1",  // slate-300
          400: "#94a3b8",  // slate-400
          500: "#64748b",  // slate-500
          600: "#475569",  // slate-600
          700: "#1e293b",  // slate-800 (深灰蓝)
          800: "#0f172a",  // slate-900
          900: "#020617",  // slate-950 (极致深邃)
        },
        // 香槟金 - 高端点缀
        accent: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#d4a855", // 香槟金 (champagne)
          600: "#b45309",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03",
        },
        // 铂灰 - 背景/边框
        platinum: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
