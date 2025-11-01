export const useSeo = (options: {
  title?: string
  description?: string
  image?: string
  url?: string
}) => {
  const route = useRoute()
  
  useHead({
    title: options.title,
    meta: [
      { name: 'description', content: options.description },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      { property: 'og:image', content: options.image || 'https://ihsanbakidogan.com/og-image.png' },
      { property: 'og:url', content: options.url || `https://ihsanbakidogan.com${route.path}` },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: options.image || 'https://ihsanbakidogan.com/og-image.png' },
    ]
  })
}
