/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fut: {
          dark: "#0a0a1a",
          navy: "#0f1629",
          accent: "#e94560",
        },
      },
      backgroundImage: {
        "fut-field":
          "radial-gradient(ellipse at center, #1a1a3e 0%, #0f1629 40%, #0a0a1a 70%, #050510 100%)",
      },
      boxShadow: {
        "fut-edge":
          "inset 0 0 80px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
