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
        theme: {
          dark: {
            header: "#171717",
          },
        },
      },
      spacing: {
        "screen-lg": "1024px",
      },
    },
  },
  plugins: [],
};
