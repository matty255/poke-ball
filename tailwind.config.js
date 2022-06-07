module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "glass-pattern": "url('/src/static/banner.webp')",
        "moon-pattern": "url('/src/static/moon.png')",
        "shiny-pattern": "url('/src/static/pokemonbg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      }),
      fontFamily: {
        sanss: ["Festive", "Noto Serif KR"],
        sanss2: ["Poor Story", "Noto Serif KR"],
      },
    },
    plugins: [],
  },
};
