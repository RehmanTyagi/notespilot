/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure to scan all your React components
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1a202c",
        darkText: "#f7fafc",
        lightBg: "#ffffff",
        lightText: "#1a202c",
        primary: {
          // light: "#06d6a0",
          DEFAULT: "rgba(2,195,154,1.0)", // You can change this to your app's main brand color
          // dark: "#00a896",
        },
        secondary: {
          light: "#FEEBC8",
          DEFAULT: "#F6AD55",
          dark: "#DD6B20",
        },
        background: "#F7FAFC", // A subtle background for your app
        textPrimary: "#2D3748", // Dark color for easy reading
        textSecondary: "#718096", // Slightly lighter for notes, etc.
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Inter or any other sans-serif for clean readability
        heading: ["Poppins", "sans-serif"], // Bold font for headings
        mono: ["Fira Code", "monospace"], // Useful for code blocks if you have those in notes
      },
      spacing: {
        18: "4.5rem", // For custom spacing in margins and paddings
        22: "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem", // For card UI, modal containers
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.05)", // Subtle shadow for note cards
        modal: "0 10px 25px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-to-c": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
