<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl px-4">
      <div class="space-y-8">
        <!-- Header -->
        <AnimatedContent
          :distance="50"
          direction="vertical"
          :duration="0.8"
          :delay="0.1"
          ease="power2.out"
        >
          <div class="space-y-4">
            <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-200">Blog</h1>
            <p class="text-lg text-zinc-600 dark:text-zinc-400">
              Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar.
            </p>
          </div>
        </AnimatedContent>

        <!-- Filter Bar -->
        <FilterBar 
          v-if="allArticles && allArticles.length > 0"
          :posts="allArticles" 
          :filtered-count="filteredArticles.length"
        />

        <!-- Articles List -->
        <div v-if="filteredArticles.length > 0" class="space-y-4">
          <AnimatedContent
            v-for="(article, index) in filteredArticles"
            :key="article._path"
            :distance="30"
            direction="vertical"
            :duration="0.6"
            :delay="0.3 + (index * 0.05)"
            ease="power2.out"
          >
            <NuxtLink
              :to="article._path"
              class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-violet-300 dark:hover:border-violet-700/50"
            >
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="carbon:document" class="text-xl text-violet-500" />
                </div>
                <div class="flex-1 min-w-0">
                  <h2 class="text-lg font-medium text-zinc-900 dark:text-zinc-200 mb-2">
                    {{ article.title }}
                  </h2>
                  <p v-if="article.description" class="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                    {{ article.description }}
                  </p>
                  <div class="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
                    <span>{{ formatDate(article.date) }}</span>
                    <span>•</span>
                    <span>{{ article.readTime || 5 }} dk okuma</span>
                    <span v-if="article.tags && article.tags.length > 0">•</span>
                    <div v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-1">
                      <span
                        v-for="tag in article.tags.slice(0, 3)"
                        :key="tag"
                        class="px-2 py-0.5 bg-zinc-200 dark:bg-zinc-700/50 rounded text-xs"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </AnimatedContent>
        </div>

        <!-- Empty State -->
        <AnimatedContent
          v-else
          :distance="30"
          direction="vertical"
          :duration="0.6"
          :delay="0.3"
          ease="power2.out"
        >
          <div class="text-center py-12">
            <Icon name="carbon:document" class="w-16 h-16 text-zinc-400 mx-auto mb-4" />
            <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
              No posts found
            </p>
            <p class="text-sm text-zinc-500 dark:text-zinc-500">
              Try adjusting your filters
            </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/changelog';

// Fetch all articles
const { data: articlesData } = await useAsyncData('articles', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
);

// Convert to BlogPost type
const allArticles = computed<BlogPost[]>(() => {
  if (!articlesData.value) return [];
  return articlesData.value.map((article: any) => ({
    _path: article._path,
    title: article.title,
    description: article.description || article.excerpt,
    date: article.date,
    tags: article.tags || [],
    category: article.category,
    readTime: article.readTime
  }));
});

// Use filter composable
const { filterPosts } = useFilter();

// Filter articles based on active filters
const filteredArticles = computed(() => {
  return filterPosts(allArticles.value);
});

// Format date helper
const formatDate = (date: string) => {
  try {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return date;
  }
};

// SEO
useSeo({
  title: 'Blog - İhsan Baki Doğan',
  description: 'Yazılım, teknoloji ve kişisel deneyimlerim hakkında yazılar. Discord, güvenlik, web geliştirme ve daha fazlası.',
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style> 