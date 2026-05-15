export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js", // important 
  ],

  plugins: [
    require("preline/plugin"), // important
  ],
};