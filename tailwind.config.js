/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
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

