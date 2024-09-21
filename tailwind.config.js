const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      screens: {
        xl: "1165.82px",
        xs: "400px",
      },
      colors: {
        primary: "#1A3EBC",
        bg: "#D0DCE9",
        $yellow: "#FFDD55",
        $black1: "#18191F",
        $black2: "#474A57",
        $black: "#000",
        $green: "#00C6AE",
      },
      backgroundImage: (theme) => ({
        "hero-background": "url('/hero-background.jpg')",
        "contact-bg": "url('/contact-bg.png')",
        "about-bg": "url('/images/about.jpg')",
      }),
      animation: {
        fade: "fadeIn .3s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
