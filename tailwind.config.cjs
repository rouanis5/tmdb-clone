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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animate')],
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
