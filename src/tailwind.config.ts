// tailwind.config.ts or tailwind.config.mjs
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}" // keep if you’re also using /src
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F1DEDE",  // pale pink
          400: "#87E752", // lime light
          500: "#5CF64A", // lime
          600: "#43B929", // brand green
        },
        accent: { 500: "#FF37A6" }, // hot pink
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
