/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      sms: "0.5rem",
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {

      'smsx': '500px',

      'sm': '640px',

      'md': '768px',

      'mds': '820px',

      'mdx': '960px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px'

    },
    fontFamily: {
      headFont: ['Marcellus', 'serif'],
      normalfont: ['Poppins', 'sans-serif']
    },
    colors: {
      'blue1': '#0B2447',
      'blue2': '#3C84AB',
      'blue3': '#85CDFD',
      'blue4': '#DEFCF9',
      'color': '#FFF9DE',
      'yellow1': '#F7D060'
    },
  },
  extend: {

    fontSize: {
      xs: '0.3rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

  },
  plugins: [],
}




