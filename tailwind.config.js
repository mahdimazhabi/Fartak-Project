/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
        calendar: {
          "active-bg": "var(--calendar-active-bg)",
          "active-bg-dark": "var(--calendar-active-bg-dark)",
          active: "#0088FF",
          "done-bg": "var(--calendar-done-bg)",
          "done-bg-dark": "var(--done-bg-dark)",
          done: "#3C9A4F",
          "pending-bg": "var(--calendar-pending-bg)",
          pending: "#DE710C",
          "deadline-bg": "var(--calendar-deadline-bg)",
          deadline: "#FC4D55",
        },
      },
      transitionProperty: {
        all: "all", // اضافه کردن ترنزیشن برای همه خواص
        colors: "background-color, border-color, color, fill, stroke",
        dimensions: "width, height, margin, padding",
        spacing: "margin, padding, gap",
      },
      transitionDuration: {
        200: "200ms", // زمان‌های پیش‌فرض
        400: "400ms",
        800: "800ms",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out", // عملکرد easing
        "ease-custom": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
