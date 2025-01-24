// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  content: {
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },
  runtimeConfig: {
    public: {
      githubUsername: 'ibidi'
    }
  },
  typescript: {
    strict: true
  },
  app: {
    head: {
      titleTemplate: '%s - ibidi.tr',
      title: 'Home',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kişisel blog ve portföy sitesi' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#000000' },
        { property: 'og:site_name', content: 'ibidi.tr' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ibidi' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ],
      htmlAttrs: {
        class: 'light'
      }
    }
  },
  routeRules: {
    '/**': {
      prerender: true
    },
    '/api/**': {
      ssr: true
    },
    '/admin/**': {
      ssr: true
    }
  }
})