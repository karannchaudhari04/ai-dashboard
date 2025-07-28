/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode using 'dark:' class
  theme: {
    extend: {
      colors: {
        // Optional: Define custom dark theme colors
        darkBg: "#0f172a",
        darkCard: "#1e293b",
        darkText: "#e2e8f0",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // For better styled form elements
    require('@tailwindcss/typography'),  // For prose formatting
    require('@tailwindcss/line-clamp'),  // For truncating text
  ],
};
