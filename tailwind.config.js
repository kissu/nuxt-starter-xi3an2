const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
