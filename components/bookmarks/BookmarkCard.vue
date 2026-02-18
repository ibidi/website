<template>
  <AnimatedContent
    :distance="30"
    direction="vertical"
    :duration="0.6"
    :delay="delay"
    ease="power2.out"
  >
    <a 
      :href="bookmark.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="block p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-violet-300 dark:hover:border-violet-700/50 transition-all duration-200 group"
    >
      <div class="space-y-3">
        <!-- Header -->
        <div class="flex justify-between items-start">
          <div class="flex-grow pr-4">
            <h3 class="text-md font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              {{ bookmark.title }}
            </h3>
            <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
              {{ bookmark.description }}
            </p>
          </div>
          <Icon 
            name="carbon:launch" 
            class="w-4 h-4 text-zinc-400 flex-shrink-0 group-hover:text-violet-500 transition-colors" 
          />
        </div>

        <!-- Tags -->
        <div v-if="bookmark.tags && bookmark.tags.length > 0" class="flex flex-wrap gap-1.5">
          <button
            v-for="tag in bookmark.tags"
            :key="tag"
            @click.prevent="handleTagClick(tag)"
            class="tag-badge"
            :class="{ active: isTagActive(tag) }"
          >
            {{ tag }}
          </button>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>{{ formatDate(bookmark.dateAdded) }}</span>
          <span>{{ getDomain(bookmark.url) }}</span>
        </div>
      </div>
    </a>
  </AnimatedContent>
</template>

<script setup lang="ts">
import type { Bookmark } from '~/types/changelog';

interface Props {
  bookmark: Bookmark;
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
});

const emit = defineEmits<{
  tagClick: [tag: string]
}>();

const { isTagActive } = useFilter();

const handleTagClick = (tag: string) => {
  emit('tagClick', tag);
};

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
};

const getDomain = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.tag-badge {
  @apply px-2 py-1 rounded text-xs font-medium;
  @apply bg-zinc-200 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300;
  @apply border border-transparent;
  @apply transition-all duration-200;
  @apply hover:bg-zinc-300 dark:hover:bg-zinc-700;
  @apply hover:border-zinc-400 dark:hover:border-zinc-600;
}

.tag-badge.active {
  @apply bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300;
  @apply border-violet-300 dark:border-violet-700/50;
}
</style>
