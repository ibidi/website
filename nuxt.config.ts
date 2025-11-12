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
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt'
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
  pwa: {
    manifest: {
      name: 'İhsan Baki Doğan',
      short_name: 'ibidi',
      description: 'Full Stack Developer & Personal Blog',
      theme_color: '#000000',
      background_color: '#000000',
      display: 'standalone',
      orientation: 'portrait'
    },
    meta: {
      author: 'İhsan Baki Doğan'
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://ihsanbakidogan.com/sitemap.xml'
  },
  runtimeConfig: {
    public: {
      githubUsername: 'ibidi',
      lastFmApiKey: process.env.LASTFM_API_KEY,
      lastFmUsername: 'ibidishu'
    }
  },
  typescript: {
    strict: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s | İhsan Baki Doğan',
      title: 'Full Stack Developer & Tech Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Full Stack Web Developer. Node.js, TypeScript, React, Vue, Nuxt uzmanı. Web geliştirme, yazılım mimarisi ve teknoloji üzerine blog yazıları.' },
        { name: 'keywords', content: 'full stack developer, web developer, nodejs, typescript, react, vue, nuxt, javascript, yazılım geliştirme, blog' },
        { name: 'author', content: 'İhsan Baki Doğan' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#8b5cf6' },
        
        // Open Graph
        { property: 'og:site_name', content: 'İhsan Baki Doğan' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ihsanbakidogan.com' },
        { property: 'og:title', content: 'İhsan Baki Doğan - Full Stack Developer' },
        { property: 'og:description', content: 'Full Stack Web Developer. Node.js, TypeScript, React, Vue, Nuxt uzmanı. Web geliştirme ve teknoloji blog yazıları.' },
        { property: 'og:image', content: 'https://ihsanbakidogan.com/og-image.png' },
        { property: 'og:locale', content: 'tr_TR' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ihsanbakidogan' },
        { name: 'twitter:creator', content: '@ihsanbakidogan' },
        { name: 'twitter:title', content: 'İhsan Baki Doğan - Full Stack Developer' },
        { name: 'twitter:description', content: 'Full Stack Web Developer. Node.js, TypeScript, React, Vue, Nuxt uzmanı.' },
        { name: 'twitter:image', content: 'https://ihsanbakidogan.com/og-image.png' },
        
        // SEO
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'google', content: 'notranslate' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'canonical', href: 'https://ihsanbakidogan.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'İhsan Baki Doğan',
            url: 'https://ihsanbakidogan.com',
            image: 'https://ihsanbakidogan.com/logo.png',
            sameAs: [
              'https://github.com/ibidi',
              'https://twitter.com/ihsanbakidogan',
              'https://linkedin.com/in/ibidi'
            ],
            jobTitle: 'Full Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance'
            },
            knowsAbout: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Vue.js', 'Nuxt', 'Web Development']
          })
        }
      ],
      htmlAttrs: {
        lang: 'tr',
        class: 'dark'
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