<template>
  <div class="min-h-screen bg-zinc-900 px-4 pt-32 md:pt-40 pb-12 md:pb-20">
    <div class="container mx-auto max-w-4xl">
      <div class="flex flex-col gap-20">
        <div class="space-y-6">
          <h1 class="text-3xl font-medium text-zinc-200">Blog</h1>
          <p class="text-base text-zinc-400">
            Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar.
          </p>

          <div class="flex flex-wrap gap-2">
            <button 
              v-for="tag in uniqueTags" 
              :key="tag"
              @click="toggleTag(tag)"
              :class="[
                'px-2.5 py-1.5 text-sm rounded-md transition-all duration-200',
                selectedTags.includes(tag)
                  ? 'bg-violet-500/20 text-violet-400 hover:bg-violet-500/30'
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800'
              ]"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="post in filteredPosts" :key="post._path" class="group">
            <NuxtLink :to="post._path" class="block p-4 bg-zinc-800/50 rounded-md border border-zinc-700/50 transition-all duration-200 hover:bg-zinc-800">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                  <Icon name="carbon:document" class="text-base text-violet-500" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between gap-4">
                    <div class="space-y-1">
                      <div class="flex items-center gap-2">
                        <h3 class="text-base font-medium text-zinc-200">{{ post.title }}</h3>
                        <span v-if="post.isNew" class="px-2 py-0.5 text-xs bg-violet-500/10 text-violet-500 rounded">YENİ</span>
                      </div>
                      <p class="text-sm text-zinc-400">{{ post.excerpt }}</p>
                    </div>
                    <div class="hidden md:flex items-center gap-2 text-sm text-zinc-500">
                      <time>{{ formatDate(post.date) }}</time>
                      <span class="text-zinc-700">•</span>
                      <span>{{ post.readTime }} dk</span>
                    </div>
                  </div>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span 
                      v-for="tag in post.tags" 
                      :key="tag"
                      class="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Blog'
})

const selectedTags = ref<string[]>([])

const { data: posts } = await useAsyncData('posts', () => 
  queryContent('blog')
    .sort({ date: -1 })
    .find()
)

const uniqueTags = computed(() => {
  const tags = new Set<string>()
  posts.value?.forEach((post) => {
    post.tags?.forEach((tag: string) => tags.add(tag))
  })
  return Array.from(tags)
})

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const filteredPosts = computed(() => {
  if (selectedTags.value.length === 0) return posts.value
  return posts.value?.filter(post => 
    selectedTags.value.some(tag => post.tags?.includes(tag))
  )
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 