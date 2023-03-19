/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#363433",
        "light-gray": "#A4A7A8",
        "dark-blue": "#00134D",
        "light-blue": "#003B7C",
      },
      fontFamily: {
        Lato: ["Lato", "sans serif"],
        Poppins: ["Poppins", "sans serif"],
      },
    },
  },
  plugins: [],
};
