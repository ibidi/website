<template>
  <div class="relative pt-32 pb-16 bg-white dark:bg-zinc-900 overflow-hidden">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-12">

        <div v-if="groupedBookmarks.size > 0" class="space-y-12">
                    <div v-for="([dateGroup, items]) in groupedBookmarks" :key="dateGroup" class="space-y-6">
            <h2 class="text-xl font-medium text-zinc-400 dark:text-zinc-500">
              {{ formatGroupDate(dateGroup) }}
            </h2>
            <div class="space-y-4">
              <a 
                v-for="bookmark in items" 
                :key="bookmark.id" 
                :href="bookmark.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <div class="flex justify-between items-start">
                  <div class="flex-grow pr-4">
                    <h3 class="text-md font-semibold text-zinc-900 dark:text-zinc-100">
                      {{ bookmark.title }}
                    </h3>
                    <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {{ bookmark.description }}
                    </p>
                  </div>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap pt-1">
                    {{ formatCardDate(bookmark.dateAdded) }}
                  </p>
                </div>
              </a>
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
import { ref, computed } from 'vue';

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
  },
  {
    id: '5',
    title: 'TypeScript Handbook',
    description: 'TypeScript\'in resmi dokümantasyonu ve rehberi.',
    url: 'https://www.typescriptlang.org/docs/',
    dateAdded: '2024-04-05T00:00:00.000Z',
    tags: ['typescript', 'javascript', 'programming']
  },
  {
    id: '6',
    title: 'Node.js Documentation',
    description: 'Node.js runtime environment için resmi dokümantasyon.',
    url: 'https://nodejs.org/en/docs/',
    dateAdded: '2024-05-12T00:00:00.000Z',
    tags: ['nodejs', 'backend', 'javascript']
  }
]);

const formatGroupDate = (dateString: string) => {
  // dateString will be 'YYYY-MM-DD' from grouping
  const date = new Date(dateString + 'T00:00:00'); // Ensure it's parsed as local, not UTC for grouping
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); // Using en-US for 'February 14, 2025' format
};

const formatCardDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const groupedBookmarks = computed(() => {
  const groups = new Map<string, Bookmark[]>();
  const sortedBookmarks = [...bookmarks.value].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());

  for (const bookmark of sortedBookmarks) {
    const dateKey = bookmark.dateAdded.split('T')[0]; // Group by YYYY-MM-DD
    if (!groups.has(dateKey)) {
      groups.set(dateKey, []);
    }
    groups.get(dateKey)!.push(bookmark);
  }
  return groups;
});

// Original formatDate (can be removed if not used elsewhere, or kept for other purposes)
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
