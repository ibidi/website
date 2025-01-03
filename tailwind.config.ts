import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translate(0, -10px)', opacity: '0.3' },
          '100%': { transform: 'translate(10px, 100vh)', opacity: '0' }
        }
      },
      animation: {
        'snow-slow': 'snow 13s linear infinite',
        'snow-fast': 'snow 8s linear infinite'
      }
    },
  },
  plugins: [],
} satisfies Config 