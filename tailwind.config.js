module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        "dark-main": "#18191A",
        "dark-second": "#242526",
        "dark-third": "#3A3B3C",
        "dark-good": "1f2937",
        "dark-txt": "#B8BBBF",
        "dark-coolbg":"#111827"
      },
      fontFamily:{
        body:["Nunito"]
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
