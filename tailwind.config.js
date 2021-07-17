const colors = require('tailwindcss/colors');
var _ = require('lodash');
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1364px',
    },
    container: {
      padding: '1rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      xinetic: '#060510',
      grey: '#2C2C3A',
      darkergrey: '#262633',
      violet: '#7067CF',
      green: '#2C6E49',
      greenlow: '#80A84A',
      yellow: '#FAA916',
      orange: '#E8691F',
      red: '#D62828',
    },
  },
  variants: {
    extend: {
      borderRadius: ['last'],
      backgroundColor: ['last'],
    },
  },
  plugins: [
    function ({ addUtilities, e, theme, variants }) {
      const colors = flattenColorPalette(theme('borderColor'));

      const utilities = _.flatMap(_.omit(colors, 'default'), (value, modifier) => ({
        [`.${e(`border-t-${modifier}`)}`]: { borderTopColor: `${value}` },
        [`.${e(`border-r-${modifier}`)}`]: { borderRightColor: `${value}` },
        [`.${e(`border-b-${modifier}`)}`]: { borderBottomColor: `${value}` },
        [`.${e(`border-l-${modifier}`)}`]: { borderLeftColor: `${value}` },
      }));

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
