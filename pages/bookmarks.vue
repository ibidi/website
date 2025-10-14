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

        <!-- Bookmarks List -->
        <div v-if="filteredBookmarks.length > 0" class="space-y-4">
          <BookmarkCard
            v-for="(bookmark, index) in filteredBookmarks"
            :key="bookmark.id"
            :bookmark="bookmark"
            :delay="0.3 + (index * 0.05)"
            @tag-click="handleTagClick"
          />
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


