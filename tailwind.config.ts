import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1C3355',
          dark: '#161F38',   // warmer dark — hint of indigo instead of cold blue
          light: '#2A4F8A',
        },
        teal: {
          DEFAULT: '#72B9CF',
          light: '#90CCDF',
          dark: '#4E9AB3',
        },
        coral: {
          DEFAULT: '#CF8872',
          light: '#DFA090',
          dark: '#B06E5A',
          muted: '#F5EAE6',    // soft coral for backgrounds
        },
        sand: {
          DEFAULT: '#FAF6F0',  // warmer sand
          dark: '#EEE7DA',
        },
        sea: '#90E0EF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
