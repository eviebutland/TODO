const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '475px', // must use this syntax to add a new small size in
      ...defaultTheme.screens,
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      "rose": {
        "50": "#e9a0ab",
        "100": "#df96a1",
        "200": "#d58c97",
        "300": "#cb828d",
        "400": "#c17883",
        "500": "#b76e79",
        "600": "#ad646f",
        "700": "#a35a65",
        "800": "#99505b",
        "900": "#8f4651"
      }
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    require('@tailwindcss/forms')
  ],
}