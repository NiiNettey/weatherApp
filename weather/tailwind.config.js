/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.{html,ts}'],
    options: {
      safelist: [],
    },
  },
}

