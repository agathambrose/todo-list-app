module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        otoman: "'Otomanopee One', sans-serif",
        nunito: "'Nunito', sans-serif",
      },
      boxShadow: { dark: "rgba(0, 0, 0, 0.35) 0px 5px 15px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
