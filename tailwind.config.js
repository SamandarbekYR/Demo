module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]

}