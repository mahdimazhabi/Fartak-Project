/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"], // حالت تیره بر اساس کلاس
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iranyekan: ["iranyekan", "sans-serif"],
      },
      colors: {
        button: {
          background: "var(--button-background-color)",
          border: "var(--button-border-color)",
        },

        background: {
          light: "#FFFFFF",
          dark: "#121E31",
        },
      },
    },
  },
};
