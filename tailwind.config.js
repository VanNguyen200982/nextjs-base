
module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },    
    extend: {
      colors: {
        'accent-1': '#333',
        'orange': '#f14b11',
        'blueless': '#3853d8',
        'bluelight': '#0021c4',
        'blackless': '#363637',
        'grayless': '#999999',
        'pinkdark': '#d4bdad',
        'redless': '#cc3333',
      },
      fontSize: {
        'xsm': '.5rem',
        'xss': '.625rem',
        '10xl': '10rem',
      },
      spacing: {
        '98': '27rem',
        '100': '28rem',
        '128': '32rem',
        '144': '36rem',
        '214': '40rem',
        '288': '43rem',
        '320': '47rem',
        'p4': '4%',
        'p10': '10%',
        'p25': '25%',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'xs': '48rem',
      },
      screens: {
        'maxd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'maxm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
    customForms: theme => ({
      default: {
        checkbox: {
          iconColor: theme('colors.black.200'),
          '&:hover': {
            iconColor: theme('colors.black.200'),
          }
        },
      },
    })
  },
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}