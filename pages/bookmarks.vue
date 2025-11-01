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
            <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-200">Bookmarks</h1>
            <p class="text-lg text-zinc-600 dark:text-zinc-400">
              Curated collection of useful resources and tools
            </p>
          </div>
        </AnimatedContent>

        <!-- Tag Cloud -->
        <TagCloud 
          v-if="bookmarks.length > 0"
          :bookmarks="bookmarks" 
          :filtered-count="filteredBookmarks.length"
        />

        <!-- Bookmarks List - Timeline Style -->
        <div v-if="filteredBookmarks.length > 0" class="space-y-8">
          <div v-for="(group, date) in groupedBookmarks" :key="date" class="space-y-4">
            <!-- Date Header -->
            <h3 class="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {{ formatDateHeader(date) }}
            </h3>
            
            <!-- Bookmarks for this date -->
            <div class="space-y-3">
              <a
                v-for="bookmark in group"
                :key="bookmark.id"
                :href="bookmark.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block group"
              >
                <div class="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex-1 min-w-0">
                      <h4 class="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {{ bookmark.title }}
                      </h4>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                        {{ bookmark.description }}
                      </p>
                      
                      <!-- Tags -->
                      <div v-if="bookmark.tags && bookmark.tags.length > 0" class="flex flex-wrap gap-1.5 mt-2">
                        <span
                          v-for="tag in bookmark.tags"
                          :key="tag"
                          class="px-2 py-0.5 text-xs rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Date on the right -->
                    <div class="flex-shrink-0 text-xs text-zinc-500 dark:text-zinc-500">
                      {{ formatShortDate(bookmark.dateAdded) }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
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
            <Icon name="carbon:bookmark" class="w-16 h-16 text-zinc-400 mx-auto mb-4" />
            <p class="text-lg text-zinc-600 dark:text-zinc-400 mb-2">
              No bookmarks found
            </p>
            <p class="text-sm text-zinc-500 dark:text-zinc-500">
              Try adjusting your tag filters
            </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Bookmark } from '~/types/changelog';

// Bookmark data
const bookmarks = ref<Bookmark[]>([
  {
    id: '1',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    url: 'https://tailwindcss.com',
    dateAdded: '2024-01-10T00:00:00.000Z',
    tags: ['css', 'frontend', 'framework', 'design']
  },
  {
    id: '2',
    title: 'Vue 3 Documentation',
    description: 'The Progressive JavaScript Framework - Official documentation.',
    url: 'https://vuejs.org',
    dateAdded: '2024-02-15T00:00:00.000Z',
    tags: ['javascript', 'frontend', 'vue', 'framework']
  },
  {
    id: '3',
    title: 'Nuxt 3',
    description: 'The Intuitive Vue Framework for building web applications.',
    url: 'https://nuxt.com',
    dateAdded: '2024-03-20T00:00:00.000Z',
    tags: ['vue', 'nuxt', 'ssr', 'framework', 'fullstack']
  },
  {
    id: '4',
    title: 'MDN Web Docs',
    description: 'Resources for developers, by developers.',
    url: 'https://developer.mozilla.org/',
    dateAdded: '2023-12-01T00:00:00.000Z',
    tags: ['documentation', 'html', 'css', 'javascript', 'web']
  },
  {
    id: '5',
    title: 'TypeScript Handbook',
    description: 'TypeScript is JavaScript with syntax for types.',
    url: 'https://www.typescriptlang.org/docs/',
    dateAdded: '2024-04-05T00:00:00.000Z',
    tags: ['typescript', 'javascript', 'programming', 'documentation']
  },
  {
    id: '6',
    title: 'Node.js',
    description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    url: 'https://nodejs.org/en/docs/',
    dateAdded: '2024-05-12T00:00:00.000Z',
    tags: ['nodejs', 'backend', 'javascript', 'runtime']
  },
  {
    id: '7',
    title: 'GSAP',
    description: 'Professional-grade JavaScript animation for the modern web.',
    url: 'https://greensock.com/gsap/',
    dateAdded: '2024-06-01T00:00:00.000Z',
    tags: ['animation', 'javascript', 'frontend', 'library']
  },
  {
    id: '8',
    title: 'Vite',
    description: 'Next Generation Frontend Tooling.',
    url: 'https://vitejs.dev/',
    dateAdded: '2024-07-10T00:00:00.000Z',
    tags: ['build-tool', 'frontend', 'development', 'tooling']
  }
]);

// Use filter composable
const { activeTags, toggleTag, filterPosts } = useFilter();

// Filter bookmarks based on active tags
const filteredBookmarks = computed(() => {
  if (activeTags.value.length === 0) {
    return [...bookmarks.value].sort((a, b) => 
      new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  }

  // Filter bookmarks that have at least one of the active tags
  const filtered = bookmarks.value.filter(bookmark => {
    if (!bookmark.tags) return false;
    return activeTags.value.some(tag => bookmark.tags!.includes(tag));
  });

  return filtered.sort((a, b) => 
    new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
  );
});

// Group bookmarks by date
const groupedBookmarks = computed(() => {
  const groups: Record<string, typeof filteredBookmarks.value> = {};
  
  filteredBookmarks.value.forEach(bookmark => {
    const date = new Date(bookmark.dateAdded);
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(bookmark);
  });
  
  return groups;
});

// Format date header (e.g., "February 14, 2025")
const formatDateHeader = (dateString: string) => {
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Format short date (e.g., "14/02/2025")
const formatShortDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

// Handle tag click from bookmark card
const handleTagClick = (tag: string) => {
  toggleTag(tag);
};

// SEO
useSeo({
  title: 'Bookmarks - İhsan Baki Doğan',
  description: 'Curated collection of useful web development resources, tools, and documentation.',
});

definePageMeta({
  title: 'Bookmarks'
});
</script>


