/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        varelaRound: ["var(--varelaRound)"],
      },
      colors: {
        primary: {
          dark: "#221e2fff",
          yellow: "#f5edc9ff",
        },
      },
    },
  },
  plugins: [],
};
