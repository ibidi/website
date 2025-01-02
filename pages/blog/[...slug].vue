<template>
  <div v-if="data" class="min-h-screen bg-white dark:bg-zinc-900">
    <div class="w-full min-h-screen bg-white dark:bg-zinc-900">
      <div class="container mx-auto max-w-4xl px-4 py-32">
        <div class="flex items-center gap-2 mb-8">
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400"
          >
            <Icon name="carbon:arrow-left" class="text-base" />
            Blog'a Dön
          </NuxtLink>
        </div>

        <article class="prose dark:prose-invert max-w-none">
          <div class="space-y-4 not-prose">
            <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">{{ data.title }}</h1>
            
            <!-- Hero Image/GIF -->
            <img 
              v-if="data.image" 
              :src="data.image" 
              :alt="data.title"
              class="w-full h-64 object-cover rounded-lg"
              :class="{ 'animate-pulse': data.image.endsWith('.gif') }"
            />

            <div class="flex items-center gap-2">
              <span class="text-sm text-zinc-600 dark:text-zinc-400">{{ formatDate(data.date) }}</span>
              <span class="text-sm text-zinc-600 dark:text-zinc-400">•</span>
              <span class="text-sm text-zinc-600 dark:text-zinc-400">{{ data.readingTime || 5 }} dk okuma</span>
            </div>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in data.tags" 
                :key="tag"
                class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <ContentRenderer v-if="data" :value="data" />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Article {
  title: string
  date: string
  image?: string
  tags: string[]
  readingTime: number
  body: object
}

const { data } = await useAsyncData<Article>('article', () => 
  queryContent<Article>()
    .where({ _path: useRoute().path })
    .findOne()
)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 

<style>
/* Temel prose stilleri */
.prose {
  --tw-prose-body: theme('colors.zinc.600');
  --tw-prose-headings: theme('colors.zinc.900');
  --tw-prose-links: theme('colors.violet.500');
  --tw-prose-bold: theme('colors.zinc.900');
  --tw-prose-counters: theme('colors.zinc.500');
  --tw-prose-bullets: theme('colors.zinc.300');
  --tw-prose-hr: theme('colors.zinc.200');
  --tw-prose-quotes: theme('colors.zinc.900');
  --tw-prose-quote-borders: theme('colors.zinc.200');
  --tw-prose-captions: theme('colors.zinc.500');
  --tw-prose-code: theme('colors.zinc.900');
  --tw-prose-pre-code: theme('colors.zinc.900');
  --tw-prose-pre-bg: theme('colors.zinc.100');
}

/* Karanlık tema için prose stilleri */
.dark .prose {
  --tw-prose-body: theme('colors.zinc.400');
  --tw-prose-headings: theme('colors.zinc.200');
  --tw-prose-links: theme('colors.violet.400');
  --tw-prose-bold: theme('colors.zinc.200');
  --tw-prose-counters: theme('colors.zinc.400');
  --tw-prose-bullets: theme('colors.zinc.600');
  --tw-prose-hr: theme('colors.zinc.700');
  --tw-prose-quotes: theme('colors.zinc.200');
  --tw-prose-quote-borders: theme('colors.zinc.700');
  --tw-prose-captions: theme('colors.zinc.400');
  --tw-prose-code: theme('colors.zinc.200');
  --tw-prose-pre-code: theme('colors.zinc.200');
  --tw-prose-pre-bg: theme('colors.zinc.800');
}

/* Özel elementler için stiller */
.prose code {
  @apply bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded;
}

.prose pre {
  @apply bg-zinc-100 dark:bg-zinc-800 rounded-lg;
}

.prose pre code {
  @apply bg-transparent p-0;
}

.prose blockquote {
  @apply border-l-4 border-zinc-200 dark:border-zinc-700;
}
</style> 