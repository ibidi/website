<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl px-4">
      <div class="space-y-6">
        <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Blog</h1>
        <p class="text-base text-zinc-600 dark:text-zinc-400">Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar.</p>

        <div class="flex flex-wrap gap-2">
          <NuxtLink 
            v-for="tag in tags" 
            :key="tag"
            :to="`/blog/tag/${tag.toLowerCase()}`"
            class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            {{ tag }}
          </NuxtLink>
        </div>

        <div class="space-y-4">
          <NuxtLink
            v-for="article in articles"
            :key="article._path"
            :to="article._path"
            class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                <Icon name="carbon:document" class="text-base text-violet-500" />
              </div>
              <div class="flex-1">
                <h2 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ article.title }}</h2>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-sm text-zinc-600 dark:text-zinc-400">{{ formatDate(article.date) }}</span>
                  <span class="text-sm text-zinc-600 dark:text-zinc-400">•</span>
                  <span class="text-sm text-zinc-600 dark:text-zinc-400">{{ article.readingTime || 5 }} dk okuma</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Article {
  _path: string
  title: string
  date: string
  readingTime: number
}

const { data: articles } = await useAsyncData('articles', () => queryContent('blog').find())
const tags = ['Discord', 'Güvenlik', 'Token']

// SEO
useSeo({
  title: 'Blog - İhsan Baki Doğan',
  description: 'Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar. Discord, güvenlik, web geliştirme ve daha fazlası.',
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
</script> 