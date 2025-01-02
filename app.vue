<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
    <!-- Snow Effect -->
    <SnowEffect />

    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-700/50">
      <div class="container mx-auto max-w-4xl px-4 h-16">
        <div class="flex items-center justify-between h-full">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <div class="w-[48px] h-[48px] bg-black rounded-lg flex items-center justify-center">
              <img src="https://i.hizliresim.com/q41aejn.png" alt="ibidi" class="w-11 h-11" />
            </div>
          </NuxtLink>

          <!-- Actions -->
          <div class="flex items-center gap-2">
            <button 
              @click="openCommandMenu"
              class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Icon name="carbon:menu" class="text-base" />
            </button>

            <button 
              @click="toggleColorMode"
              class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Icon v-if="colorMode.value === 'dark'" name="carbon:sun" class="text-base" />
              <Icon v-else name="carbon:moon" class="text-base" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Footer -->
    <Footer />

    <!-- Command Menu -->
    <CommandMenu ref="commandMenu" />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import SnowEffect from '~/components/SnowEffect.vue'

const colorMode = useColorMode()
const commandMenu = ref()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const openCommandMenu = () => {
  commandMenu.value?.open()
}
</script>

<style lang="postcss">
html {
  @apply antialiased;
}

html.dark {
  @apply bg-zinc-900;
}

html.light {
  @apply bg-white;
}
</style>
