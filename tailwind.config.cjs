/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      background: "#FAFAFA",
      brand: {
        yellow: "#DBAC2C",
        "yellow-dark": "#C47F17",
        "yellow-light": "#F1E9C9",
        purple: "#8047F8",
        "purple-dark": "#4B2995",
        "purple-light": "#EBE5F9",
      },
      base: {
        title: "#272221",
        subtitle: "#403937",
        text: "#574F4D",
        label: "#8D8686",
        hover: "#D7D5D5",
        button: "#E6E5E5",
        input: "#EDEDED",
        card: "#F3F2F2",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ['"Baloo 2"', "cursive"],
      },
      fontSize: {
        "2xs": ["0.625rem", "130%"],
      },
      spacing: {
        hug: 42,
      },
    },
  },
  plugins: [],
};
