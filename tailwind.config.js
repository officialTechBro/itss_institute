/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        logo: ['Ink Free', 'sans-serif'],
        nav: ['Corbel', 'sans'],
        tiny: ['Verdana', 'sans-serif']
      },
      colors: {
        grad: ['rgba(0, 0, 0, 0.6)']
      }
    },
  },
  plugins: [],
};
