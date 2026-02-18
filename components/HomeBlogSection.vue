<template>
  <div class="py-12 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-3xl font-medium text-center text-zinc-900 dark:text-zinc-200 mb-12">
        Latest Blog Posts
      </h2>
      <div v-if="posts && posts.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="post in posts" 
          :key="post._path"
          class="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col overflow-hidden group"
        >
          <NuxtLink :to="post._path" class="block h-48 w-full overflow-hidden" v-if="post.coverImage">
            <img :src="post.coverImage" :alt="post.title || 'Blog post cover image'" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </NuxtLink>
          <div v-else class="h-48 w-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
            <span class="text-zinc-500 dark:text-zinc-400 text-sm">No Image Available</span>
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <NuxtLink :to="post._path" class="block">
              <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                {{ post.title || 'Untitled Post' }}
              </h3>
            </NuxtLink>
            <p v-if="post.description" class="text-zinc-600 dark:text-zinc-400 text-sm mb-3 leading-relaxed flex-grow">
              {{ truncateDescription(post.description, 120) }}
            </p>
            <p v-else class="text-zinc-600 dark:text-zinc-400 text-sm mb-3 leading-relaxed flex-grow">
              No description available.
            </p>
            <div class="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700/50">
              <div class="text-xs text-zinc-500 dark:text-zinc-500 mb-2">
                <span>{{ formatDate(post.date) }}</span>
                <span v-if="post.tags && post.tags.length" class="mx-1">|</span>
                <span v-if="post.tags && post.tags.length" class="italic">
                  {{ post.tags.join(', ') }}
                </span>
              </div>
              <NuxtLink :to="post._path" class="inline-block text-sm text-violet-600 dark:text-violet-400 hover:underline font-medium">
                Read more &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="error">
        <p class="text-center text-red-500">Could not load blog posts. Please try again later.</p>
      </div>
      <div v-else>
        <p class="text-center text-zinc-500 dark:text-zinc-400">No blog posts found yet. Stay tuned!</p>
      </div>
      <div class="text-center mt-12">
        <NuxtLink 
          to="/blog" 
          class="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-medium transition-colors duration-200"
        >
          View All Posts
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface BlogPost {
  _path: string;
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  coverImage?: string;
  // Add other frontmatter fields you expect
}

const posts = ref<BlogPost[] | null>(null);
const error = ref<any>(null);

async function fetchPosts() {
  try {
    const data = await queryContent<BlogPost>('/blog')
      .sort({ date: -1 }) // Sort by date descending (newest first)
      .limit(3)           // Get latest 3 posts
      .find();
    posts.value = data;
  } catch (e) {
    console.error('Error fetching blog posts:', e);
    error.value = e;
    posts.value = []; // Ensure posts is an empty array on error to hide loading/empty state
  }
}

function formatDate(dateString?: string): string {
  if (!dateString) return 'Date not available';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function truncateDescription(text?: string, maxLength: number = 120): string {
  if (!text) return 'No description available.';
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
}

onMounted(() => {
  fetchPosts();
});
</script>

<style scoped>
/* Add any component-specific styles here if needed */
.group:hover .group-hover\:text-violet-500 {
  color: #8b5cf6; /* Ensure Tailwind JIT picks this up if not directly used */
}
</style>
