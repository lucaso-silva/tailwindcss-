/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: _theme => ({
        'paisage': "url('../img/peter-vanosdall-uZVtAixV8c8-unsplash.jpg')"
      })
    },
  },
  plugins: [],
}

