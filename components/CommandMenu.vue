<!-- Command Menu -->
<template>
  <div>
    <!-- Overlay -->
    <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" @click="close"></div>

    <!-- Menu -->
    <div v-if="isOpen" class="fixed inset-x-4 top-4 z-50 max-w-2xl mx-auto">
      <div class="bg-white dark:bg-zinc-900 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700/50 overflow-hidden">
        <!-- Search Input -->
        <div class="p-4 border-b border-zinc-200 dark:border-zinc-700/50">
          <div class="flex items-center gap-2">
            <Icon name="carbon:search" class="text-lg text-zinc-400" />
            <input
              ref="searchInput"
              v-model="search"
              type="text"
              placeholder="Type a command or search"
              class="w-full bg-transparent text-zinc-900 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none"
              @keydown.esc="close"
            >
          </div>
        </div>

        <!-- Navigation -->
        <div class="p-2">
          <div class="px-2 py-1.5 text-xs font-medium text-zinc-400 uppercase">Navigation</div>
          <div class="mt-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-2 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              @click="close"
            >
              <Icon :name="item.icon" class="text-base" />
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Me -->
        <div class="p-2 border-t border-zinc-200 dark:border-zinc-700/50">
          <div class="px-2 py-1.5 text-xs font-medium text-zinc-400 uppercase">Me</div>
          <div class="mt-2">
            <NuxtLink
              v-for="item in me"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-2 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              @click="close"
            >
              <Icon :name="item.icon" class="text-base" />
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Keyboard Shortcut -->
        <div class="p-4 border-t border-zinc-200 dark:border-zinc-700/50">
          <div class="flex items-center justify-end gap-2 text-xs text-zinc-400">
            <kbd class="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">esc</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const search = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

const navigation = [
  { name: 'Home', path: '/', icon: 'carbon:home' },
  { name: 'Blog', path: '/blog', icon: 'carbon:document' },
  { name: 'Projects', path: '/projects', icon: 'carbon:tool-kit' },
  { name: 'Daily Song', path: '/daily-songs', icon: 'carbon:music' },
  { name: 'Contact', path: '/contact', icon: 'carbon:email' },
]

const me = [
  { name: 'Repositories', path: '/repositories', icon: 'carbon:code' },
]

const open = () => {
  isOpen.value = true
  // Menü açıldığında input'a odaklanma
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const close = () => {
  isOpen.value = false
  search.value = ''
}

// Global kısayol tuşu
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      if (isOpen.value) {
        close()
      } else {
        open()
      }
    }
  }

  window.addEventListener('keydown', handleKeydown)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
})

// Dışa aktarılan metodlar
defineExpose({
  open,
  close
})
</script>

<style lang="postcss">
::selection {
  @apply bg-violet-500/20 text-violet-200;
}

::-moz-selection {
  @apply bg-violet-500/20 text-violet-200;
}

.dark {
  color-scheme: dark;
}

.light {
  color-scheme: light;
}
</style> 