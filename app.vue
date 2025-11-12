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
            <!-- Theme Toggle Button -->
            <button 
              @click="handleThemeToggle"
              class="theme-toggle-button inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95"
              :disabled="isAnimating"
              :aria-label="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <Transition name="icon-fade" mode="out-in">
                <Icon 
                  v-if="colorMode.value === 'dark'" 
                  key="sun"
                  name="carbon:sun" 
                  class="text-base" 
                />
                <Icon 
                  v-else 
                  key="moon"
                  name="carbon:moon" 
                  class="text-base" 
                />
              </Transition>
            </button>

            <button 
              @click="openCommandMenu"
              class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Icon name="carbon:menu" class="text-base" />
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

const commandMenu = ref()

// Theme management
const { colorMode, isAnimating, smartToggle } = useTheme()

// Handle theme toggle with animation
const handleThemeToggle = () => {
  smartToggle()
}

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
        url: 'https://ihsanbakidogan.com',
        sameAs: [
          'https://github.com/ibidi',
          'https://x.com/ihsanbakidogan',
        ],
        image: 'https://ihsanbakidogan.com/logo.png',
        description: 'Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies.'
      })
    }
  ]
})

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

/* Theme Toggle Icon Animation */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

/* Theme Toggle Button Hover Effect */
.theme-toggle-button {
  position: relative;
  overflow: hidden;
}

.theme-toggle-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.1);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.theme-toggle-button:hover::before {
  width: 100px;
  height: 100px;
}

.theme-toggle-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .icon-fade-enter-active,
  .icon-fade-leave-active {
    transition: none;
  }
  
  .icon-fade-enter-from,
  .icon-fade-leave-to {
    transform: none;
  }
  
  .theme-toggle-button::before {
    transition: none;
  }
}
</style>
