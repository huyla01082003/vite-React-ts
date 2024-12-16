/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#EEC5C7',
        'custom-orange': '#CA5C3B',
        'custom-poit': '#F5EEEC',
        'custom-button': '#CDD5DF',
        'custom-buttonGo': '#09AE7D',
        'custom-bg': 'linear-gradient(180deg, #FFFFFF 0%, #EADBD7 100%)',
        'custom-input': '#949494',
        fontFamily:{
          roboto:['Roboto'],
        }

      },
    },
  },
  plugins: [],
}