module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    container: {
      screens: {
        xl: "1444px",
      },
      center: true,
      padding: {
        DEFAULT: "1rem",
        tablet: "2rem",
      },
    },
    extend: {},
  },
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("daisyui")],
};
