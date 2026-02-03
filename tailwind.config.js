/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        felt: "#0a5c2a",
      },
      backgroundImage: {
        "felt-table":
          "radial-gradient(ellipse at center, #1a7a3a 0%, #0a5c2a 40%, #064a1e 70%, #03300f 100%)",
      },
      boxShadow: {
        "table-edge": "inset 0 0 80px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
