/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '480px',  // large mobile
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'ultra': '1536px',
    }
    ,
  },
  plugins: [],
}