/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary-color))",
        dark: "rgba(var(--text-color))",
        light: "rgba(var(--bg-color))",
        "container-light": "rgba(var(--container-bg-color))",
      },
      fontFamily: {
        sans: [
          '"Roboto"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundColor: {
        default: "rgba(var(--background-color))",
      },
      height: {
        "0%": "0%",
      },
      width: {
        "0%": "0%",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
