<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-start justify-center py-20">
      <h1 class="text-4xl font-bold text-zinc-200">Contact</h1>
      <p class="mt-4 text-zinc-400">If you have any questions, feel free to contact me.</p>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
        <!-- Discord -->
        <a href="https://discord.gg/DISCORD_LINK" target="_blank" rel="noopener noreferrer" class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200">Discord</h2>
            <div class="text-zinc-400">
              <Icon name="simple-icons:discord" class="text-2xl" />
            </div>
          </div>
          <p class="mt-2 text-zinc-400">Join my Discord server!</p>
        </a>

        <!-- X (Twitter) -->
        <a href="https://x.com/ibidicodes" target="_blank" rel="noopener noreferrer" class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200">X</h2>
            <div class="text-zinc-400">
              <Icon name="simple-icons:x" class="text-2xl" />
            </div>
          </div>
          <p class="mt-2 text-zinc-400">Follow me on X!</p>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/ibidi" target="_blank" rel="noopener noreferrer" class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200">GitHub</h2>
            <div class="text-zinc-400">
              <Icon name="simple-icons:github" class="text-2xl" />
            </div>
          </div>
          <p class="mt-2 text-zinc-400">Follow me on GitHub!</p>
        </a>

        <!-- LinkedIn -->
        <a href="https://linkedin.com/in/ibidi" target="_blank" rel="noopener noreferrer" class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200">LinkedIn</h2>
            <div class="text-zinc-400">
              <Icon name="simple-icons:linkedin" class="text-2xl" />
            </div>
          </div>
          <p class="mt-2 text-zinc-400">Connect with me on LinkedIn!</p>
        </a>

        <!-- Email -->
        <a href="mailto:info@ibidi.tr" target="_blank" rel="noopener noreferrer" class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200">Email</h2>
            <div class="text-zinc-400">
              <Icon name="carbon:email" class="text-2xl" />
            </div>
          </div>
          <p class="mt-2 text-zinc-400">Send me an email!</p>
        </a>

        <!-- Trello -->
        <a href="https://trello.com/YOUR_TRELLO" target="_blank" rel="noopener noreferrer" class="group relative rounded-xl bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-600 transition-all duration-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-zinc-200">Trello</h2>
            <div class="text-zinc-400">
              <Icon name="simple-icons:trello" class="text-2xl" />
            </div>
          </div>
          <p class="mt-2 text-zinc-400">View my Trello board!</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'İletişim',
  meta: [
    {
      name: 'description',
      content: 'Benimle iletişime geçin'
    }
  ]
})
</script> 