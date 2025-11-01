<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900">
    <!-- Sol taraf - Sosyal medya ikonları -->
    <div class="fixed left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
      <NuxtLink to="https://twitter.com/share" target="_blank" class="text-zinc-400 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors duration-200">
        <Icon name="ri:twitter-x-fill" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="https://t.me/share/url" target="_blank" class="text-zinc-400 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors duration-200">
        <Icon name="mdi:telegram" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="https://api.whatsapp.com/send" target="_blank" class="text-zinc-400 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors duration-200">
        <Icon name="mdi:whatsapp" class="text-2xl" />
      </NuxtLink>
      <button 
        class="text-zinc-400 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors duration-200"
        @click="copyUrl"
      >
        <Icon name="mdi:link-variant" class="text-2xl" />
      </button>
    </div>

    <!-- Sağ taraf - İlerleme çubuğu -->
    <div class="fixed right-12 top-1/2 -translate-y-1/2 hidden lg:block w-[2px] h-48 bg-zinc-200 dark:bg-zinc-800 rounded-full">
      <div 
        class="w-full bg-violet-500 dark:bg-violet-400 rounded-full transition-all duration-100"
        :style="{ height: `${scrollProgress}%` }"
      ></div>
    </div>

    <div class="container mx-auto max-w-3xl px-4 pt-20">
      <!-- Meta -->
      <div class="flex justify-center items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <time class="flex items-center gap-1.5">
          <Icon name="carbon:calendar" class="text-violet-500 dark:text-violet-400" />
          {{ formatDate(data?.date) }}
        </time>
        <span class="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
        <div class="flex items-center gap-1.5">
          <Icon name="carbon:time" class="text-violet-500 dark:text-violet-400" />
          {{ data?.readTime }} dakika okuma
        </div>
      </div>

      <!-- Title -->
      <div class="text-center space-y-4 mb-12">
        <h1 class="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-zinc-100">{{ data?.title }}</h1>
        <p class="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">{{ data?.excerpt }}</p>
      </div>

      <!-- Tags -->
      <div class="flex justify-center flex-wrap gap-2 mb-12">
        <span 
          v-for="tag in data?.tags" 
          :key="tag"
          class="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-zinc-800"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Back Link -->
      <div class="flex justify-center mb-12">
        <NuxtLink 
          to="/blog"
          class="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200"
        >
          <Icon name="carbon:arrow-left" class="text-base" />
          Blog'a Dön
        </NuxtLink>
      </div>

      <!-- Image -->
      <div v-if="data?.image" class="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-12 group cursor-pointer">
        <img 
          :src="data.image" 
          class="absolute inset-0 w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-125"
          alt=""
        />
      </div>

      <!-- Content -->
      <article class="prose dark:prose-invert prose-zinc max-w-none pb-20">
        <ContentDoc>
          <template #not-found>
            <p>İçerik bulunamadı.</p>
          </template>
        </ContentDoc>
      </article>

      <!-- Mobil için sosyal medya ikonları -->
      <div class="flex justify-center gap-4 py-8 lg:hidden">
        <NuxtLink to="https://twitter.com/share" target="_blank" class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
          <Icon name="ri:twitter-x-fill" class="text-2xl" />
        </NuxtLink>
        <NuxtLink to="https://t.me/share/url" target="_blank" class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
          <Icon name="mdi:telegram" class="text-2xl" />
        </NuxtLink>
        <NuxtLink to="https://api.whatsapp.com/send" target="_blank" class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
          <Icon name="mdi:whatsapp" class="text-2xl" />
        </NuxtLink>
        <button 
          class="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
          @click="copyUrl"
        >
          <Icon name="mdi:link-variant" class="text-2xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'blog-single'
})

const route = useRoute()
const { data } = await useAsyncData('post', () => 
  queryContent(route.path).findOne()
)

// SEO Meta Tags
useHead(() => ({
  title: data.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: data.value?.description || data.value?.excerpt || '' },
    { name: 'keywords', content: data.value?.tags?.join(', ') || '' },
    { name: 'author', content: 'İhsan Baki Doğan' },
    
    // Open Graph
    { property: 'og:title', content: data.value?.title || '' },
    { property: 'og:description', content: data.value?.description || data.value?.excerpt || '' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://ihsanbakidogan.com${route.path}` },
    { property: 'og:image', content: data.value?.image || data.value?.coverImage || 'https://ihsanbakidogan.com/og-image.png' },
    { property: 'article:published_time', content: data.value?.date || '' },
    { property: 'article:author', content: 'İhsan Baki Doğan' },
    { property: 'article:tag', content: data.value?.tags?.join(', ') || '' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: data.value?.title || '' },
    { name: 'twitter:description', content: data.value?.description || data.value?.excerpt || '' },
    { name: 'twitter:image', content: data.value?.image || data.value?.coverImage || 'https://ihsanbakidogan.com/og-image.png' },
  ],
  link: [
    { rel: 'canonical', href: `https://ihsanbakidogan.com${route.path}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: data.value?.title || '',
        description: data.value?.description || data.value?.excerpt || '',
        image: data.value?.image || data.value?.coverImage || 'https://ihsanbakidogan.com/og-image.png',
        datePublished: data.value?.date || '',
        dateModified: data.value?.date || '',
        author: {
          '@type': 'Person',
          name: 'İhsan Baki Doğan',
          url: 'https://ihsanbakidogan.com'
        },
        publisher: {
          '@type': 'Person',
          name: 'İhsan Baki Doğan',
          logo: {
            '@type': 'ImageObject',
            url: 'https://ihsanbakidogan.com/logo.png'
          }
        },
        keywords: data.value?.tags?.join(', ') || '',
        articleSection: data.value?.category || 'Technology',
        inLanguage: 'tr-TR'
      })
    }
  ]
}))

const scrollProgress = ref(0)

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})

const updateScrollProgress = () => {
  const article = document.querySelector('article')
  if (!article) return

  const articleTop = article.offsetTop
  const articleHeight = article.offsetHeight
  const windowHeight = window.innerHeight
  const scrolled = window.scrollY - articleTop + windowHeight

  const progress = Math.max(0, Math.min(100, (scrolled / (articleHeight - windowHeight)) * 100))
  scrollProgress.value = progress
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const copyUrl = () => {
  navigator.clipboard.writeText(window.location.href)
}
</script>

<style>
/* Light mode prose styles */
.prose {
  @apply text-zinc-700 dark:text-zinc-400;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  @apply text-zinc-900 dark:text-zinc-200 font-medium;
  margin-top: 2em;
  margin-bottom: 1em;
}

.prose h1 {
  font-size: 2.25em;
  line-height: 1.2;
}

.prose h2 {
  font-size: 1.875em;
  line-height: 1.3;
}

.prose h3 {
  font-size: 1.5em;
  line-height: 1.4;
}

.prose p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  line-height: 1.7;
}

.prose a {
  @apply text-violet-600 dark:text-violet-400 no-underline hover:underline;
}

.prose strong {
  @apply text-zinc-900 dark:text-zinc-200 font-semibold;
}

.prose ul {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  list-style-type: disc;
  padding-left: 1.625em;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-left: 0.375em;
}

.prose pre {
  @apply bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50;
  padding: 1em;
  border-radius: 0.375em;
  overflow-x: auto;
}

.prose code {
  @apply bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-violet-600 dark:text-violet-200;
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
  font-size: 0.875em;
}
</style> 