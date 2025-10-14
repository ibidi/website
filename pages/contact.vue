<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="mx-auto max-w-4xl px-4">
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-200">Contact</h1>
          <p class="text-lg text-zinc-600 dark:text-zinc-400">If you have any questions, feel free to contact me.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
        <!-- Discord -->
        <a href="https://discord.gg/DISCORD_LINK" target="_blank" rel="noopener noreferrer" 
           class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200 group-hover:text-violet-400 transition-colors duration-300">Discord</h2>
            <div class="relative">
              <div class="absolute inset-0 bg-violet-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Icon name="simple-icons:discord" class="text-2xl relative text-zinc-400 group-hover:text-violet-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-300">Join my Discord server!</p>
        </a>

        <!-- X (Twitter) -->
        <a href="https://x.com/ibidicodes" target="_blank" rel="noopener noreferrer" 
           class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200 group-hover:text-sky-400 transition-colors duration-300">X</h2>
            <div class="relative">
              <div class="absolute inset-0 bg-sky-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Icon name="simple-icons:x" class="text-2xl relative text-zinc-400 group-hover:text-sky-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-300">Follow me on X!</p>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/ibidi" target="_blank" rel="noopener noreferrer" 
           class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">GitHub</h2>
            <div class="relative">
              <div class="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Icon name="simple-icons:github" class="text-2xl relative text-zinc-400 group-hover:text-emerald-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-300">Follow me on GitHub!</p>
        </a>

        <!-- LinkedIn -->
        <a href="https://linkedin.com/in/ibidi" target="_blank" rel="noopener noreferrer" 
           class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</h2>
            <div class="relative">
              <div class="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Icon name="simple-icons:linkedin" class="text-2xl relative text-zinc-400 group-hover:text-blue-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-300">Connect with me on LinkedIn!</p>
        </a>

        <!-- Email -->
        <a href="mailto:info@ihsanbakidogan.com" target="_blank" rel="noopener noreferrer" 
           class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200 group-hover:text-orange-400 transition-colors duration-300">Email</h2>
            <div class="relative">
              <div class="absolute inset-0 bg-orange-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Icon name="carbon:email" class="text-2xl relative text-zinc-400 group-hover:text-orange-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-300">Send me an email!</p>
        </a>

        <!-- Trello -->
        <a href="https://trello.com/YOUR_TRELLO" target="_blank" rel="noopener noreferrer" 
           class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-300">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200 group-hover:text-pink-400 transition-colors duration-300">Trello</h2>
            <div class="relative">
              <div class="absolute inset-0 bg-pink-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Icon name="simple-icons:trello" class="text-2xl relative text-zinc-400 group-hover:text-pink-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p class="mt-2 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-300">View my Trello board!</p>
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeo({
  title: 'İletişim - İhsan Baki Doğan',
  description: 'Benimle iletişime geçin. Discord, Twitter ve diğer sosyal medya kanalları üzerinden ulaşabilirsiniz.',
})

definePageMeta({
  title: 'İletişim'
})
</script>