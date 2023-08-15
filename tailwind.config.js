/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors : {
        "beige" : "#DCC1AB",
        "green" : "#1B5B31",
        "grey": "#F5F0EC",
        "black": "#111111",
      },
      fontFamily : {
        sans : ['Montserrat', 'sans-serif'],
        serif: ['Inter', 'serif'],
      }
    },
  },
  plugins: [],
}

