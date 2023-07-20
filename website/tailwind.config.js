/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          "100%": { opacity: "1" },
          "0%": { opacity: "0" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.40s ease-in-out",
      },
    },
  },
  plugins: [],
};
