/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enables dark mode when the 'class' method is used
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Ensure these paths match your project structure
    ],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          bounce: {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateY(0)',
            },
            '40%': {
              transform: 'translateY(-10px)',
            },
            '60%': {
              transform: 'translateY(-5px)',
            },
          },
        },
        animation: {
          fadeIn: 'fadeIn 2s ease-out', // Fade-in effect
          bounce: 'bounce 1s infinite', // Bounce effect
        },
      },
    },
    plugins: [],
  };
  