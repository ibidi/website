<template>
  <div class="tag-cloud">
    <AnimatedContent
      :distance="30"
      direction="vertical"
      :duration="0.6"
      :delay="0.2"
      ease="power2.out"
    >
      <div class="space-y-4">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Filter by Tags
          </h3>
          <button
            v-if="activeTags.length > 0"
            @click="clearTags"
            class="text-xs text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
          >
            Clear tags
          </button>
        </div>

        <!-- Tag Buttons -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tag in sortedTags"
            :key="tag.name"
            @click="toggleTag(tag.name)"
            class="tag-button"
            :class="{ active: isTagActive(tag.name) }"
          >
            <span>{{ tag.name }}</span>
            <span class="count">{{ tag.count }}</span>
          </button>
        </div>

        <!-- Active Tags Indicator -->
        <Transition name="fade">
          <div
            v-if="activeTags.length > 0"
            class="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <Icon name="carbon:tag" class="w-4 h-4" />
            <span>
              {{ filteredCount }} of {{ totalCount }} bookmarks
            </span>
          </div>
        </Transition>
      </div>
    </AnimatedContent>
  </div>
</template>

<script setup lang="ts">
import type { Bookmark, TagInfo } from '~/types/changelog';

interface Props {
  bookmarks: Bookmark[];
  filteredCount: number;
}

const props = defineProps<Props>();

const { activeTags, toggleTag, isTagActive } = useFilter();

// Extract all unique tags with counts
const allTags = computed<TagInfo[]>(() => {
  const tagMap = new Map<string, number>();

  props.bookmarks.forEach(bookmark => {
    if (bookmark.tags) {
      bookmark.tags.forEach(tag => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    }
  });

  return Array.from(tagMap.entries()).map(([name, count]) => ({
    name,
    count
  }));
});

// Sort tags by count (descending) then alphabetically
const sortedTags = computed(() => {
  return [...allTags.value].sort((a, b) => {
    if (b.count !== a.count) {
      return b.count - a.count;
    }
    return a.name.localeCompare(b.name);
  });
});

const totalCount = computed(() => props.bookmarks.length);

const clearTags = () => {
  // Create a copy since activeTags is readonly
  const tags = [...activeTags.value];
  tags.forEach(tag => toggleTag(tag));
};
</script>

<style scoped>
.tag-button {
  @apply inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium;
  @apply bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300;
  @apply border border-zinc-200 dark:border-zinc-700/50;
  @apply transition-all duration-200;
  @apply hover:bg-zinc-200 dark:hover:bg-zinc-800;
  @apply hover:border-zinc-300 dark:hover:border-zinc-600;
}

.tag-button.active {
  @apply bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300;
  @apply border-violet-300 dark:border-violet-700/50;
  @apply hover:bg-violet-200 dark:hover:bg-violet-900/50;
}

.tag-button .count {
  @apply px-1.5 py-0.5 rounded-full text-xs;
  @apply bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400;
}

.tag-button.active .count {
  @apply bg-violet-200 dark:bg-violet-800/50 text-violet-700 dark:text-violet-300;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
