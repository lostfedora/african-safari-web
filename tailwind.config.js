/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',
        accent: '#FFC300',
        secondary: '#DDA15E',
        background: '#FAF9F6',
      },
    },
  },
  plugins: [],
}
