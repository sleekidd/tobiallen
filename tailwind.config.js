/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 4px 0 rgba(0, 0, 0, 0.1)', // Custom shadow definition
      },
      fontFamily: {
        'greatmango': ['GreatMango', 'serif'], // Local or web-hosted font
        'neuemachina': ['NeueMachina', 'serif'], 
      },
    },
  },
  plugins: [],
}