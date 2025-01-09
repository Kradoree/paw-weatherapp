/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pricolor": "#117DBF",
        "seccolor": "#083359",
      },
      container:{
        padding: "2rem",
        center: true,
      },
      screens:{
        sm: "600px",
        md: "800px",
      }
    },
  },
  plugins: [],
}

