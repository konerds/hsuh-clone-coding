/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'mobile-portrait': '0px',
      'mobile-landscape': '479px',
      tablet: '768px',
      desktop: '992px',
    },
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: {
          ...colors.neutral,
          100: '#C4C4C4',
          200: '#666666',
          300: '#555555',
          400: '#111111',
        },
        'shuttle-gray': '#5E6774',
        harp: '#E9EFF1',
      },
      content: {
        hamburger: "'\\e602'",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.antialiased-stroke': {
          '-webkit-text-stroke': ['0.45px', '0.45px rgba(0, 0, 0, 0.1)'],
        },
        '.drag-none': {
          '-webkit-user-drag': 'none',
          '-khtml-user-drag': 'none',
          '-moz-user-drag': 'none',
          '-o-user-drag': 'none',
        },
        '.scroll-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scroll-none::-webkit-scrollbar': {
          display: 'none',
        },
        '.tap-highlight-color': {
          '-webkit-tap-highlight-color': '#00000000',
          'tap-highlight-color': '#00000000',
        },
      });
    }),
  ],
};
