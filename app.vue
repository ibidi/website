<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
    <!-- Loading Bar -->
    <NuxtLoadingIndicator :height="3" color="#818cf8" />

    <!-- Snow Effect -->
    <ClientOnly>
      <SnowEffect />
    </ClientOnly>

    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-700/50 will-change-transform">
      <div class="container mx-auto max-w-4xl px-4 h-16">
        <div class="flex items-center justify-between h-full">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <div class="w-[48px] h-[48px] bg-black rounded-lg flex items-center justify-center">
              <img 
                src="https://i.hizliresim.com/q41aejn.png" 
                alt="ibidi" 
                class="w-11 h-11"
                loading="eager"
                decoding="async"
              />
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
    <div class="flex-1 flex flex-col">
      <NuxtLayout>
        <template #default>
          <NuxtPage />
        </template>
      </NuxtLayout>
    </div>

    <!-- Footer -->
    <Footer />

    <!-- Command Menu -->
    <ClientOnly>
      <CommandMenu ref="commandMenu" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'

const colorMode = useColorMode()
const commandMenu = ref()

// Google Site Verification
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: 'Zq3zNotEs830wJsNV193ov0f-EL845pYEXlQfS5egjA'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'İhsan Baki Doğan',
        jobTitle: 'Full Stack Developer',
        url: 'https://ibidi.tr',
        sameAs: [
          'https://github.com/ibidi',
          'https://x.com/ibidicodes',
        ],
        image: 'https://ibidi.tr/logo.png',
        description: 'Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies.'
      })
    }
  ]
})

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const openCommandMenu = () => {
  commandMenu.value?.open()
}
</script>

<style lang="postcss">
html {
  @apply antialiased scroll-smooth;
  text-rendering: optimizeLegibility;
}

html.dark {
  @apply bg-zinc-900;
  color-scheme: dark;
}

html.light {
  @apply bg-white;
  color-scheme: light;
}

/* Performans optimizasyonları */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.will-change-transform {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
