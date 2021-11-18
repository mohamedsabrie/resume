module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1165.82px",
      },
    },

    extend: {
      backgroundImage: (theme) => ({
        "hero-background": "url('/hero-background.jpg')",
        
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')
],
};
