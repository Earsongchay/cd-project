/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors:[
        {
          "primary":"#32353B",
          "second":"#E0D1A1",
          "accent":"#bdb582",
          "bg-primary":"#F3F2EB",
          "bg-primary-dark":'#1E1E1E'
        }
      ]
    },
  },
  plugins: [],
}
