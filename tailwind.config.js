/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'white': {
        // light: '#85d7ff',
        DEFAULT: '#fff',
        // dark: '#009eeb',
      },
      'black': {
        light: '#f2f2f2',
        DEFAULT: '#1d202f',
        // dark: '#009eeb',
      },
      'blue': {
        light: '#46d2f0',
        DEFAULT: '#284b8b',
        dark: '#101113',
      },
    },
    fontFamily: {
      sans: ['sans-serif'],
      oswald: ['Oswald'],
    },
    extend: {
      screens: {
        'sm': '621px',
        'lg': '992px',
      },
      spacing: {
        '7.5': '30px',
        '21': '84px',
      },
    }
  },
  plugins: [],
}

