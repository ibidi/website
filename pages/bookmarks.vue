<template>
  <div class="relative pt-32 pb-16 bg-white dark:bg-zinc-900 overflow-hidden">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-12">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Yer İmlerim
          </h1>
          <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Kayda değer bulduğum ve daha sonra tekrar ziyaret etmek isteyebileceğim web sayfaları.
          </p>
        </div>

        <div v-if="bookmarks.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="bookmark in bookmarks" 
            :key="bookmark.id" 
            class="group relative flex flex-col overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700/50 bg-white dark:bg-zinc-800/50 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div class="p-6">
              <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                <a :href="bookmark.url" target="_blank" rel="noopener noreferrer" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200">
                  {{ bookmark.title }}
                  <span aria-hidden="true" class="absolute inset-0"></span>
                </a>
              </h3>
              <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {{ bookmark.description }}
              </p>
              <p class="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
                Eklendi: {{ formatDate(bookmark.dateAdded) }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-lg text-zinc-500 dark:text-zinc-400">Henüz hiç yer imi eklenmemiş.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Bookmark {
  id: string;
  title: string;
  description: string;
  url: string;
  dateAdded: string; // ISO date string e.g., '2024-05-15T10:00:00.000Z'
  tags?: string[];
}

const bookmarks = ref<Bookmark[]>([
  {
    id: '1',
    title: 'Tailwind CSS Resmi Sitesi',
    description: 'Hızla modern web siteleri oluşturmak için kullanışlı bir CSS frameworkü.',
    url: 'https://tailwindcss.com',
    dateAdded: '2024-01-10T00:00:00.000Z',
    tags: ['css', 'frontend', 'framework']
  },
  {
    id: '2',
    title: 'Vue 3 Dokümantasyonu',
    description: 'Progresif JavaScript frameworkü Vue.js için resmi dokümantasyon.',
    url: 'https://vuejs.org',
    dateAdded: '2024-02-15T00:00:00.000Z',
    tags: ['javascript', 'frontend', 'vue']
  },
  {
    id: '3',
    title: 'Nuxt 3 Dokümantasyonu',
    description: 'Vue.js ile sezgisel ve güçlü web uygulamaları oluşturmak için kullanılan framework.',
    url: 'https://nuxt.com',
    dateAdded: '2024-03-20T00:00:00.000Z',
    tags: ['vue', 'nuxt', 'ssr', 'framework']
  },
  {
    id: '4',
    title: 'MDN Web Docs',
    description: 'Web teknolojileri ve API\'leri hakkında geliştiriciler için kapsamlı kaynak.',
    url: 'https://developer.mozilla.org/',
    dateAdded: '2023-12-01T00:00:00.000Z',
    tags: ['web standards', 'html', 'css', 'javascript']
  }
]);

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('tr-TR', options);
};


definePageMeta({
  title: 'Yer İmleri'
});
</script>

<style scoped>
/* Gerekirse ek özel stiller buraya eklenebilir */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
