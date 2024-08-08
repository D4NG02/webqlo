/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
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
      textColor: {
        white: {
          base: 'var(--color-text-white)'
        }
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-text-black)'
        }
      }
    }
  },
  plugins: [],
}

