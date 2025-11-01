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
                <div class="p-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-zinc-700 transition-all duration-200">
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
                          class="px-2 py-0.5 text-xs rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400"
                        >
                          {{ tag }}
                        </span>
                      </div>
                    </div>
                    
                    <!-- Date on the right -->
                    <div class="flex-shrink-0 text-xs text-zinc-500 dark:text-zinc-400">
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
    title: '8bitcn',
    description: 'A set of 8-bit styled retro components. Works with your favorite frameworks. Open Source. Open Code.',
    url: 'https://github.com/8bitcn',
    dateAdded: '2025-02-14T00:00:00.000Z',
    tags: ['react', 'components', 'ui', 'retro', 'open-source']
  },
  {
    id: '2',
    title: 'Aceternity UI',
    description: 'A modern component library built with Tailwind CSS and Motion for React. Contains unique and beautiful components.',
    url: 'https://ui.aceternity.com',
    dateAdded: '2025-02-14T00:00:00.000Z',
    tags: ['react', 'tailwind', 'components', 'ui', 'animation']
  },
  {
    id: '3',
    title: 'AI Elements',
    description: 'Pre-built components like conversations, messages and more to help you build AI-native applications faster.',
    url: 'https://ai-elements.dev',
    dateAdded: '2025-02-14T00:00:00.000Z',
    tags: ['react', 'ai', 'components', 'ui']
  },
  {
    id: '4',
    title: 'Algolia',
    description: 'Enterprises and developers use Algolia\'s AI search infrastructure to understand users and show them what matters most.',
    url: 'https://www.algolia.com',
    dateAdded: '2025-02-14T00:00:00.000Z',
    tags: ['search', 'ai', 'infrastructure', 'saas']
  },
  {
    id: '5',
    title: 'Animate UI',
    description: 'A fully animated, open-source React component distribution. Browse a list of animated primitives, components and templates.',
    url: 'https://animate-ui.com',
    dateAdded: '2025-02-14T00:00:00.000Z',
    tags: ['react', 'animation', 'components', 'ui', 'open-source']
  },
  {
    id: '6',
    title: 'Better Upload',
    description: 'Simple and easy file uploads for React. Upload directly to any S3-compatible service with minimal setup.',
    url: 'https://better-upload.dev',
    dateAdded: '2025-02-14T00:00:00.000Z',
    tags: ['react', 'upload', 'file', 's3', 'library']
  },
  {
    id: '7',
    title: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces, faster. Open-source and customizable.',
    url: 'https://motion-primitives.com',
    dateAdded: '2025-01-07T00:00:00.000Z',
    tags: ['react', 'animation', 'components', 'ui', 'framer-motion']
  },
  {
    id: '8',
    title: 'Tiptap Dev Toolkit Editor Suite',
    description: 'Tiptap is a suite of content editing & real time collaboration tools. Build editor experiences like Notion in weeks, not years.',
    url: 'https://tiptap.dev',
    dateAdded: '2024-08-10T00:00:00.000Z',
    tags: ['editor', 'rich-text', 'collaboration', 'react', 'vue']
  },
  {
    id: '9',
    title: 'React Spectrum Libraries',
    description: 'A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences.',
    url: 'https://react-spectrum.adobe.com',
    dateAdded: '2024-08-10T00:00:00.000Z',
    tags: ['react', 'accessibility', 'components', 'adobe', 'ui']
  },
  {
    id: '10',
    title: 'Ultralight - Universal, Pure-GPU HTML Renderer',
    description: 'Ultralight - Universal, Pure-GPU HTML Renderer.',
    url: 'https://ultralig.ht',
    dateAdded: '2024-11-13T00:00:00.000Z',
    tags: ['html', 'renderer', 'gpu', 'performance']
  },
  {
    id: '11',
    title: 'udecode/plate: A rich-text editor powered by AI',
    description: 'A rich-text editor powered by AI.',
    url: 'https://platejs.org',
    dateAdded: '2024-11-13T00:00:00.000Z',
    tags: ['editor', 'rich-text', 'ai', 'react', 'slate']
  },
  {
    id: '12',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    url: 'https://tailwindcss.com',
    dateAdded: '2024-01-10T00:00:00.000Z',
    tags: ['css', 'frontend', 'framework', 'design']
  },
  {
    id: '13',
    title: 'Vue 3 Documentation',
    description: 'The Progressive JavaScript Framework - Official documentation.',
    url: 'https://vuejs.org',
    dateAdded: '2024-02-15T00:00:00.000Z',
    tags: ['javascript', 'frontend', 'vue', 'framework']
  },
  {
    id: '14',
    title: 'Nuxt 3',
    description: 'The Intuitive Vue Framework for building web applications.',
    url: 'https://nuxt.com',
    dateAdded: '2024-03-20T00:00:00.000Z',
    tags: ['vue', 'nuxt', 'ssr', 'framework', 'fullstack']
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


