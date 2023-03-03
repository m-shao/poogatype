/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '116' : '28rem',
        '128' : '31rem'
      }
    }
  },
  plugins: [],
}