export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#F1DEDE",
          400:"#87E752",
          500:"#5CF64A",
          600:"#43B929",
        },
        accent: { 500:"#FF37A6" },
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};