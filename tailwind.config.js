/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'teal-green': '#00A676',
        'mint-cream': '#F1FAEE',
        'seafoam-green': '#33a887',
      }, 
      minHeight:{
        'over-half': '80vh',
        'half': '60vh'
      },
      maxWidth:{
        '600': '600px'
      },
      gridTemplateColumns:{
        '2-1': '2fr 1fr'
      }
    },
  },
  plugins: [],
}

