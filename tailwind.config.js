/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "425px",
        md: "768px",
        lg: "1024px",
        xls: "1300px",
        xl: "1440px",
        xxl: "2560px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Quicksand", "sans-serif"],
        nameFont: ["Arizonia", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        bodyColorWhite: "#ECF0F3",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        boxBgWhite: "linear-gradient(145deg, #e2e8ec, #ffffff)",
        textShadow: "6px 6px 2px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "app-gradient-light":
          'linear-gradient(to right, theme("colors.emerald.400"), theme("colors.cyan.500"), theme("colors.blue.700"))',
        "app-gradient-dark":
          'linear-gradient(to right, theme("colors.emerald.500"), theme("colors.cyan.600"), theme("colors.blue.800"))',
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        "custom-inset":
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
        shadowTwo: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        "custom-inset-white":
          "1px 4px 2px -3px #D1D9E6 inset, -1px -3px 3px -2px #ffffff inset",
      },
      animation: {
        blink: "blink 1.2s ease-in-out infinite",
        fadeInBounce: "fadeInBounce 5s ease-in-out infinite",
        "move-out": "move-out 1.2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeInBounce: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "50%": { opacity: "1", transform: "translateY(0px)" },
          "75%": { transform: "translateY(-3px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "move-out": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
