module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
         // that is animation class
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": {backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.red.300") },
          
        },
      }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }