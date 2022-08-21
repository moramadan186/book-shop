/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#fcfbfa',
        primary: {
          100: '#8b83ef',
          200: '#413B88',
        },
        secondary: {
          100: '#F3E7DD',
          200: '#f0bbe3'
        },
        gray: {
          50: '#f2f2f2',
          100: '#cecece',
          200: '#b8aaa7',
          300: '#7e6a80',
          400: '#3b2f4a',
        }
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
      },
    },
  },
  plugins: [],
}
