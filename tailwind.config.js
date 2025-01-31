/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#121717",
        "light-gray": "#E5E8EB",
        "lighter-gray": "#F0F2F5",
        "light-blue": "#33B2E5",
        "dark-gray": "#637D87",
        "border-gray": "#DBE3E5",
        "dark-mode-text": "#9EB0B8",
        "dark-mode-bg": "#293338"
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
