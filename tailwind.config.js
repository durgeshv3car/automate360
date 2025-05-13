/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all src files
  ],
   theme: {
    extend: {
      keyframes: {
        wiggleRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
      animation: {
        wiggleRight: 'wiggleRight 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

