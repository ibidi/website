/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
} 