/** @type {import('tailwindcss').Config} */
import textShadow from "tailwindcss-textshadow";

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
        background: {
          light: "#FFFFFF",
          dark: "#121E31",
        },
      },
      transitionProperty: {
        all: "all",
        colors: "background-color, border-color, color, fill, stroke",
        dimensions: "width, height, margin, padding",
        spacing: "margin, padding, gap",
        opacity: "opacity",
        transform: "transform",
      },
      transitionDuration: {
        75: "75ms",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        800: "800ms",
        1000: "1000ms",
      },
      transitionTimingFunction: {
        linear: "linear",
        "in-out": "ease-in-out",
        "ease-custom": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-in-out",
        slideOut: "slideOut 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        custom: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
