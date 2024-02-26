/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Color palette acquired at https://colorhunt.co/palette/f7f7f7eeeeee393e46929aab
        primary: "#F7F7F7",
        secondary: "#EEEEEE",
        tertiary: "#393E46",
        quaternary: "#929AAB",
      },
    },
  },
  plugins: [],
};
