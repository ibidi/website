<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-700/50">
      <div class="container mx-auto max-w-4xl px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <div class="flex items-center justify-center">
              <img src="/logo.png" alt="Logo" class="h-12 w-auto rounded-lg" />
            </div>
          </NuxtLink>

          <!-- Right Side -->
          <div class="flex items-center gap-4">
            <!-- Theme Toggle -->
            <button 
              class="p-2 text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
              @click="toggleColorMode"
            >
              <ClientOnly>
                <Icon 
                  :name="isDark ? 'carbon:moon' : 'carbon:sun'" 
                  class="text-xl" 
                />
              </ClientOnly>
            </button>

            <!-- Menu Button -->
            <button 
              class="p-2 text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
              @click="openCommandMenu"
            >
              <Icon name="carbon:menu" class="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Command Menu -->
    <CommandMenu ref="commandMenu" />

    <!-- Main Content -->
    <div class="flex-grow">
      <slot />
    </div>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const commandMenu = ref<InstanceType<typeof CommandMenu> | null>(null)

const isDark = computed(() => colorMode.value === 'dark')

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const openCommandMenu = () => {
  commandMenu.value?.open()
}
</script>

<style lang="postcss">
::selection {
  @apply bg-violet-500/20 text-violet-200;
}

::-moz-selection {
  @apply bg-violet-500/20 text-violet-200;
}
</style>