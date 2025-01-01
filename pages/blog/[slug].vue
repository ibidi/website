<template>
  <div class="min-h-screen bg-zinc-900">
    <!-- Sol taraf - Sosyal medya ikonları -->
    <div class="fixed left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
      <NuxtLink to="https://twitter.com/share" target="_blank" class="text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
        <Icon name="ri:twitter-x-fill" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="https://t.me/share/url" target="_blank" class="text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
        <Icon name="mdi:telegram" class="text-2xl" />
      </NuxtLink>
      <NuxtLink to="https://api.whatsapp.com/send" target="_blank" class="text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
        <Icon name="mdi:whatsapp" class="text-2xl" />
      </NuxtLink>
      <button 
        class="text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
        @click="copyUrl"
      >
        <Icon name="mdi:link-variant" class="text-2xl" />
      </button>
    </div>

    <!-- Sağ taraf - İlerleme çubuğu -->
    <div class="fixed right-12 top-1/2 -translate-y-1/2 hidden lg:block w-[2px] h-48 bg-zinc-800 rounded-full">
      <div 
        class="w-full bg-violet-400 rounded-full transition-all duration-100"
        :style="{ height: `${scrollProgress}%` }"
      ></div>
    </div>

    <div class="container mx-auto max-w-3xl px-4 pt-20">
      <!-- Meta -->
      <div class="flex justify-center items-center gap-4 text-sm text-zinc-400 mb-8">
        <time class="flex items-center gap-1.5">
          <Icon name="carbon:calendar" class="text-violet-400" />
          {{ formatDate(data?.date) }}
        </time>
        <span class="w-1 h-1 rounded-full bg-zinc-700"></span>
        <div class="flex items-center gap-1.5">
          <Icon name="carbon:time" class="text-violet-400" />
          {{ data?.readTime }} dakika okuma
        </div>
      </div>

      <!-- Title -->
      <div class="text-center space-y-4 mb-12">
        <h1 class="text-4xl md:text-5xl font-medium text-zinc-100">{{ data?.title }}</h1>
        <p class="text-lg md:text-xl text-zinc-400">{{ data?.excerpt }}</p>
      </div>

      <!-- Tags -->
      <div class="flex justify-center flex-wrap gap-2 mb-12">
        <span 
          v-for="tag in data?.tags" 
          :key="tag"
          class="px-3 py-1 text-sm bg-zinc-800/50 text-zinc-400 rounded-full border border-zinc-800"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Back Link -->
      <div class="flex justify-center mb-12">
        <NuxtLink 
          to="/blog"
          class="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
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
      <article class="prose prose-invert prose-zinc max-w-none pb-20">
        <div class="prose-headings:text-zinc-200 prose-p:text-zinc-400 prose-a:text-violet-400 prose-strong:text-zinc-200 prose-ul:text-zinc-400 prose-li:text-zinc-400">
          <ContentDoc>
            <template #not-found>
              <p>İçerik bulunamadı.</p>
            </template>
          </ContentDoc>
        </div>
      </article>

      <!-- Mobil için sosyal medya ikonları -->
      <div class="flex justify-center gap-4 py-8 lg:hidden">
        <NuxtLink to="https://twitter.com/share" target="_blank" class="text-zinc-400 hover:text-zinc-200">
          <Icon name="ri:twitter-x-fill" class="text-2xl" />
        </NuxtLink>
        <NuxtLink to="https://t.me/share/url" target="_blank" class="text-zinc-400 hover:text-zinc-200">
          <Icon name="mdi:telegram" class="text-2xl" />
        </NuxtLink>
        <NuxtLink to="https://api.whatsapp.com/send" target="_blank" class="text-zinc-400 hover:text-zinc-200">
          <Icon name="mdi:whatsapp" class="text-2xl" />
        </NuxtLink>
        <button 
          class="text-zinc-400 hover:text-zinc-200"
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

const { data } = await useAsyncData('post', () => 
  queryContent(useRoute().path).findOne()
)

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
.prose {
  color: theme('colors.zinc.400');
}

.prose h1,
.prose h2,
.prose h3,
.prose h4 {
  color: theme('colors.zinc.200');
  font-weight: 500;
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
  color: theme('colors.violet.400');
  text-decoration: none;
}

.prose strong {
  color: theme('colors.zinc.200');
  font-weight: 600;
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
  background-color: theme('colors.zinc.800/50');
  border: 1px solid theme('colors.zinc.700/50');
  padding: 1em;
  border-radius: 0.375em;
  overflow-x: auto;
}

.prose code {
  background-color: theme('colors.zinc.800/50');
  border: 1px solid theme('colors.zinc.700/50');
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
  font-size: 0.875em;
  color: theme('colors.violet.200');
}
</style> 