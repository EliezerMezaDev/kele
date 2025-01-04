/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      aqua: {
        0: "#edfffb",
        50: "#edfffb",
        100: "#c0fff6",
        200: "#81ffee",
        300: "#3affe5",
        400: "#00ffd5",
        500: "#00e2be",
        600: "#00b79e",
        700: "#00917e",
        800: "#007266",
        900: "#045d54",
        950: "#003a37",
      },
    },
  },
  plugins: [],
};
