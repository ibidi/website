<!-- Footer Component -->
<template>
  <footer class="mt-12 py-8 border-t border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 text-sm">
    <div class="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Left Section: Version -->
      <div class="text-xs">
        <span>v1.0.1</span> <!-- Placeholder version -->
      </div>

      <!-- Center Section: Copyright & GitHub Link -->
      <div class="text-center order-first md:order-none flex-grow">
        <p>&copy; {{ new Date().getFullYear() }} İhsan Baki Doğan. Tüm hakları saklıdır.</p>
        <a 
          href="https://github.com/ibidi/website" 
          target="_blank"
          class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
        >
          This website is open-source on GitHub
        </a>
      </div>

      <!-- Right Section: Social Media Icons -->
      <div class="flex items-center gap-3">
        <a href="https://github.com/ibidi" target="_blank" aria-label="GitHub" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
          <Icon name="carbon:logo-github" class="w-5 h-5" />
        </a>
        <a href="https://twitter.com/ibidicodes" target="_blank" aria-label="Twitter" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
          <Icon name="carbon:logo-twitter" class="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/ibidi" target="_blank" aria-label="LinkedIn" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
          <Icon name="carbon:logo-linkedin" class="w-5 h-5" />
        </a>
        <a href="https://instagram.com/ihsanbakidogann" target="_blank" aria-label="Instagram" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors">
          <Icon name="carbon:logo-instagram" class="w-5 h-5" />
        </a>
      </div>
      
      <!-- Scroll to Top Button (Optional, kept for now) -->
      <!-- Consider removing if it feels cluttered with the new layout -->
      <button 
        @click="scrollToTop"
        title="Scroll to top"
        class="hidden md:inline-flex items-center justify-center w-9 h-9 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 ml-4"
      >
        <Icon name="carbon:arrow-up" class="text-lg" />
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// You might want to fetch the version from package.json or an env variable in a real app
// const version = 'v1.0.0'; 
</script> 