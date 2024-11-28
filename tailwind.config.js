/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#31511E", // Main Color
        background: "#fefdfc", // Background Color
        secondary: "#e6e6d7", // Secondary Color
        SoftMain: "#f9eae7", // Soft Main Color
        accent: "#001F34", // Accent Color
        DateTime: "#777777",
        textField:"E4F5E4",
        blackText:"010200",
        "main-font": "#010200", // Main Font Color
        "secondary-font": "#fefdfc", // Secondary Font Color
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Default Sans Font
        serif: ["Georgia", "serif"], // Default Serif Font
      },
      
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
