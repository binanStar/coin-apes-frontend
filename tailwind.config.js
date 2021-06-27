const colors = require('tailwindcss/colors');

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
      violet: '#7067CF',
      green: '#06A77D',
      yellow: '#FAA916',
      red: '#D62828',
    },
  },
  variants: {
    extend: {
      borderRadius: ['last'],
      backgroundColor: ['last'],
    },
  },
  plugins: [],
};
