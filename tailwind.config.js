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
        'Fira-sans' : ["Fira Sans", "sans-serif"],
        'Roboto-condensed-sans' : ["Roboto Condensed", "sans-serif"],
        'Open-sans' : ["Open Sans", "sans-serif"],
        'Oswald' : ["Oswald", "sans-serif"]
      },
      


      writingMode: {
        'horizontal': 'horizontal',
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
      spacing: {
        '1/2vw': '0.5vw',
        '1/3vw': '0.33333vw',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.3)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        
      },
      animation: {
        blob: "blob 7s infinite",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-horizontal': { 'writing-mode': 'horizontal-tb' },
        '.writing-mode-vertical-rl': { 'writing-mode': 'vertical-rl' },
        '.writing-mode-vertical-lr': { 'writing-mode': 'vertical-lr' },
      })
    }
  ],
}
