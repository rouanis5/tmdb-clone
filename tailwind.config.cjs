/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0d253f',
        secondary: '#01b4e4',
        tertiary: '#90cea1',
      },
      fontFamily: {
        sans: "'Source Sans Pro', sans-serif",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: 'daisy-',
    darkTheme: 'dark',
  },
}
