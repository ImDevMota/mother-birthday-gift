/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "heart-fall": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
      animation: {
        "heart-fall": "heart-fall 10s linear forwards",
      },
    },
  },
  plugins: [],
};
