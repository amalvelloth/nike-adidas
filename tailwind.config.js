/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Marcellus': ["Marcellus"],
        'Monsterrat': ["Montserrat"],
      },

      spacing: {
        '1/2vw': '0.5vw',
        '1/3vw': '0.33333vw',
        // Add other viewport unit sizes as needed
      },
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},

    }
  },
  plugins: [],
}