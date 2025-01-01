<template>
  <div class="min-h-screen bg-zinc-900">
    <!-- Hero Section -->
    <div class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-zinc-900/50 to-zinc-900"></div>
      <div class="relative container mx-auto max-w-5xl px-4 pt-24 pb-32 md:pt-32 md:pb-40">
        <div class="flex flex-col items-center text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 backdrop-blur border border-zinc-700/50 text-sm text-zinc-400 mb-8">
            <Icon name="carbon:pen" class="text-violet-400" />
            <span>Blog</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-medium text-zinc-100 mb-6 tracking-tight">
            Blog Yazıları
          </h1>
          <p class="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Yazılım geliştirme, teknoloji ve kişisel deneyimlerim hakkında yazılar.
          </p>
        </div>
      </div>
    </div>

    <!-- Posts Grid -->
    <div class="container mx-auto max-w-6xl px-4 -mt-20 relative pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="post in data" 
          :key="post._path" 
          class="group relative bg-zinc-800/30 backdrop-blur border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-colors duration-300"
        >
          <NuxtLink :to="post._path" class="block">
            <!-- Image -->
            <div class="relative aspect-[16/9] overflow-hidden">
              <img 
                :src="post.image" 
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt=""
              />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Meta -->
              <div class="flex items-center gap-3 text-sm text-zinc-400 mb-4">
                <time class="flex items-center gap-1.5">
                  <Icon name="carbon:calendar" class="text-violet-400" />
                  {{ formatDate(post.date) }}
                </time>
                <span class="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span class="flex items-center gap-1.5">
                  <Icon name="carbon:time" class="text-violet-400" />
                  {{ post.readTime }} dakika
                </span>
              </div>

              <!-- Title -->
              <h2 class="text-xl font-medium text-zinc-100 mb-3 group-hover:text-violet-400 transition-colors duration-300">
                {{ post.title }}
              </h2>

              <!-- Excerpt -->
              <p class="text-zinc-400 line-clamp-2 mb-6">{{ post.excerpt }}</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in post.tags" 
                  :key="tag"
                  class="px-3 py-1 text-sm bg-zinc-900/50 text-zinc-400 rounded-full border border-zinc-800 group-hover:border-violet-500/30 transition-colors duration-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'blog-multiple'
})

const { data } = await useAsyncData('posts', () => 
  queryContent('/blog')
    .only(['_path', 'title', 'date', 'excerpt', 'readTime', 'tags', 'image'])
    .sort({ date: -1 })
    .find()
)

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 