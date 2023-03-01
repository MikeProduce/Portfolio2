/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-green': 'hsl(136,65%,51%)',
        'Dark-Blue': 'hsl(233, 26%, 24%)',
        'Bright-Cyan': 'hsl(192,70%,51%)',
        'Grayish-Blue': 'hsl(233,8%,62%)',
        'Light-Grayish-Blue': 'hsl(220,16%,96%)',
        'Very-Light-Gray': 'hsl(0,0%,98%)',
        'White': 'hsl(0,0%,100%)'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
