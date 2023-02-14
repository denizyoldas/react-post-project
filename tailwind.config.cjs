/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4158D0',
        secondary: '#C850C0',
        tertiary: '#FFCC70'
      },
      backgroundImage: {
        'main-pattern':
          'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
