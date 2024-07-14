/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{vue,js,ts,tsx}',
    './src/**/*.{vue,js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'grand-purple': 'rgb(var(--grand-purple)',
        'grand-green': 'rgb(var(--grand-green))',
        'grand-yellow': 'rgb(var(--grand-yellow))',
        'grand-pink': 'rgb(var(--grand-pink))',
        'grand-grey-light': 'rgb(var(--grand-grey-light))',
        'auto-pink': 'rgb(var(--auto-pink))',
        'auto-purple': 'rgb(var(--auto-purple))',
        'auto-purple-dark': 'rgb(var(--auto-purple-dark))',
        'auto-grey-dark': 'rgb(var(--auto-grey-dark))',
        'auto-grey-orange': 'rgb(var(--auto-grey-orange))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
