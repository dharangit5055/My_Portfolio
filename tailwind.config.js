/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"], // Set Raleway as the default sans font
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
