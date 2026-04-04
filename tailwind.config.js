export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js" // 👈 IMPORTANT
  ],
  plugins: [
    require('preline/plugin') // 👈 IMPORTANT
  ],
};