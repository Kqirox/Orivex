/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Main palette */
        primary: "#F5B841",
        secondary: "#14B8A6",

        /* Backgrounds */
        background: "#F9FAFB",
        "secondary-background": "#F1F5F9",

        /* Surfaces */
        surface: "#FFFFFF",
        border: "#E2E8F0",

        /* Text */
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#94A3B8",

        /* Semantic */
        success: "#16A34A",
        warning: "#D97706",
        error: "#DC2626",
      },
    },
  },
  plugins: [],
};

export default config;

