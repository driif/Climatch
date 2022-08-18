module.exports = {
  prefix: "",
  content: [
    './src/**/*.{html,js,ts,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
