/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fff1eb',
        'secondary': '#ffd5c2',
        'green-normal': '#899d78',
        'green-bold': '#36413e',
        'pink-normal': '#e79888',
        'pink-bold': '#9e4359',
      },
      fontFamily: {
        'primary': ['Fredoka', 'sans-serif']
      }
    },
  },
  plugins: [],
};
