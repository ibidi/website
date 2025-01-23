<!-- Footer Component -->
<template>
  <div class="mt-8 flex items-center justify-center py-4 border-t border-zinc-200 dark:border-zinc-700/50">
    <div class="container mx-auto max-w-4xl px-4 relative">
      <div class="flex items-center justify-center">
        <a 
          href="https://github.com/ibidi/website" 
          target="_blank"
          class="text-sm text-center text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
        >
          This website is open-source on GitHub
        </a>
      </div>

      <button 
        @click="scrollToTop"
        class="absolute right-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200"
      >
        <Icon name="carbon:arrow-up" class="text-xl" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script> 