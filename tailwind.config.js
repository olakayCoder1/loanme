/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        loan: {
          light : '#e3e8ed',
          text_light : '#c5ced6',
          dark: '#CED4D9',
          primary: '#6f7d89',
          secondary: '#1a1a1a',
          outline: '#4284f3',
          button: '#0052cc',
          bg: '#f2f2f2',
          
        },
        loanBlue : {
          primary: '#6558f5',
          pink: colors.pink,
          gray: {
            default: '#F8F9FB',
            light: '#F9F9FA',
            dark: '#CED4D9'
          }
          
        }
      }),
      fontFamily:{
        headingFont : ['Tiro Devanagari Hindi', 'serif'],
        merriweather:[ 'Merriweather', 'serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      textColor:{
        loan: {
          primary: '#68696f',
          secondary: '#1a1a1a',
          outline: '#4284f3',
          button: '#0052cc',
          bg: '#f2f2f2',
          
        }
      },
    },
  },
  plugins: [],
}
