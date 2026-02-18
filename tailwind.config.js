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
    extend: {
      keyframes: {
        shine: {
          '0%': { 'background-position': '200% center' },
          '100%': { 'background-position': '-200% center' },
        },
      },
      animation: {
        shine: 'shine var(--speed, 5s) linear infinite',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
} 