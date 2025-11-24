/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF',
        secondary: '#FF00FF',
        neon: '#39FF14'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
