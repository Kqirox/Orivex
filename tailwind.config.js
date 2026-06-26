/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0070B6",
        secondary: "#FC641E",
      },
    },
  },
  plugins: [],
};

export default config;