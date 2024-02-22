/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors:[
        {
            "primary":"#47a2ca"
        }
      ]
    },
  },
  plugins: [],
}
