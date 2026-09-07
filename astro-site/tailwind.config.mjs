import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
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
    themes: [
      {
        "catppuccin-mocha": {
          primary: "#cba6f7",
          secondary: "#f5c2e7",
          accent: "#94e2d5",
          neutral: "#11111b",
          "base-100": "#181825",
          info: "#74c7ec",
          success: "#a6e3a1",
          warning: "#f9e2af",
          error: "#f38ba8",
        },
      },
    ],
  },
  plugins: [aspectRatio, typography, daisyui],
};
