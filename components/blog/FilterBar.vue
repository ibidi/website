<template>
  <div class="filter-bar">
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
            Filter by Category
          </h3>
          <button
            v-if="hasActiveFilters"
            @click="clearFilters"
            class="text-xs text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
          >
            Clear filters
          </button>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap gap-2">
          <!-- All Button -->
          <button
            @click="setCategory(null)"
            class="filter-button"
            :class="activeCategory === null ? 'active' : ''"
          >
            <span>All</span>
            <span class="count">{{ totalCount }}</span>
          </button>

          <!-- Category Buttons -->
          <button
            v-for="category in categories"
            :key="category"
            @click="setCategory(category)"
            class="filter-button"
            :class="activeCategory === category ? 'active' : ''"
          >
            <span>{{ category }}</span>
            <span class="count">{{ getCategoryCount(category) }}</span>
          </button>
        </div>

        <!-- Active Filter Indicator -->
        <Transition name="fade">
          <div
            v-if="hasActiveFilters"
            class="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <Icon name="carbon:filter" class="w-4 h-4" />
            <span>
              Showing {{ filteredCount }} of {{ totalCount }} posts
            </span>
          </div>
        </Transition>
      </div>
    </AnimatedContent>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/changelog';

interface Props {
  posts: BlogPost[];
  filteredCount: number;
}

const props = defineProps<Props>();

const {
  activeCategory,
  hasActiveFilters,
  setCategory,
  clearFilters,
  extractCategories,
  countPostsByCategory
} = useFilter();

const categories = computed(() => {
  return extractCategories(props.posts);
});

const totalCount = computed(() => {
  return props.posts.length;
});

const getCategoryCount = (category: string) => {
  return countPostsByCategory(props.posts, category);
};
</script>

<style scoped>
.filter-button {
  @apply inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium;
  @apply bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300;
  @apply border border-zinc-200 dark:border-zinc-700/50;
  @apply transition-all duration-200;
  @apply hover:bg-zinc-200 dark:hover:bg-zinc-800;
  @apply hover:border-zinc-300 dark:hover:border-zinc-600;
}

.filter-button.active {
  @apply bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300;
  @apply border-violet-300 dark:border-violet-700/50;
  @apply hover:bg-violet-200 dark:hover:bg-violet-900/50;
}

.filter-button .count {
  @apply px-2 py-0.5 rounded-full text-xs;
  @apply bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400;
}

.filter-button.active .count {
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
