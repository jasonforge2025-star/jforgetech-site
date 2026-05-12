/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF9F7",
        surface: "#FFFFFF",
        panel: "#F3EFE8",

        text: "#1F2328",
        muted: "#5E6472",
        border: "#E7DFD3",

        gold: "#C9A24D",
        goldHover: "#B8903C",

        olive: "#7A8066",
        oliveHover: "#666B55",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31,35,40,0.08)",
        card: "0 8px 24px rgba(31,35,40,0.10)",
      },
    },
  },
  plugins: [],
};
