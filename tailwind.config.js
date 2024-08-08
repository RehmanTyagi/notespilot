/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary-color))',
        default: 'rgba(var(--text-light))',
        dark: 'rgba(var(--text-dark))',
      },
      backgroundColor: {
        default: 'rgba(var(--background-color))',
      },
    },
  },
  plugins: [],
};
