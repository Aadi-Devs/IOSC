module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '851px', // Replace 900px with your desired width
      },
    },
  },
  plugins: [],
}
