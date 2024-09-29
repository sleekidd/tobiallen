/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-174.5%)' },
        },
        scrollMobile: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-465%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        scrollMobile: 'scrollMobile 20s linear infinite',
      },
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