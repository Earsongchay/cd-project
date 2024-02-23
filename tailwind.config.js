/** @type {import('tailwindcss').Config} */
module.exports = {
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
          "bg-primary":"#F3F2EB"
        }
      ]
    },
  },
  plugins: [],
}
