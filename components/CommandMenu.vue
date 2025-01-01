<template>
  <div v-if="isOpen" class="fixed inset-0 z-50">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/60" @click="close"></div>

    <!-- Menu -->
    <div class="fixed inset-6 md:inset-auto md:left-1/2 md:top-24 md:-translate-x-1/2 md:w-[640px] bg-zinc-900/95 backdrop-blur rounded-xl border border-zinc-800 shadow-xl p-4">
      <!-- Search -->
      <div class="p-3">
        <input
          ref="searchInput"
          v-model="search"
          type="text"
          placeholder="Type a command or search"
          class="w-full bg-transparent text-lg text-zinc-200 placeholder-zinc-500 outline-none border-b border-zinc-800 pb-3 mb-4"
        >
      </div>

      <!-- Menu Items -->
      <div class="p-2 max-h-[60vh] overflow-y-auto">
        <!-- Navigation -->
        <div class="mb-6">
          <h3 class="text-sm text-zinc-500 px-2 mb-4">Navigation</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <NuxtLink 
              to="/" 
              class="group relative flex items-center gap-3 text-zinc-400 hover:text-zinc-200 rounded-lg p-3 transition-colors duration-200 overflow-hidden"
              @click="close"
            >
              <div class="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/50 transition-colors duration-200"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 animate-gradient-x"></div>
              </div>
              <Icon name="carbon:home" class="text-2xl text-zinc-500 relative z-10" />
              <span class="text-base relative z-10">Home</span>
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="group relative flex items-center gap-3 text-zinc-400 hover:text-zinc-200 rounded-lg p-3 transition-colors duration-200 overflow-hidden"
              @click="close"
            >
              <div class="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/50 transition-colors duration-200"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 animate-gradient-x"></div>
              </div>
              <Icon name="carbon:blog" class="text-2xl text-zinc-500 relative z-10" />
              <span class="text-base relative z-10">Blog</span>
            </NuxtLink>
            <NuxtLink 
              to="/projects" 
              class="group relative flex items-center gap-3 text-zinc-400 hover:text-zinc-200 rounded-lg p-3 transition-colors duration-200 overflow-hidden"
              @click="close"
            >
              <div class="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/50 transition-colors duration-200"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 animate-gradient-x"></div>
              </div>
              <Icon name="carbon:tools" class="text-2xl text-zinc-500 relative z-10" />
              <span class="text-base relative z-10">Projects</span>
            </NuxtLink>
            <NuxtLink 
              to="/donate" 
              class="group relative flex items-center gap-3 text-zinc-400 hover:text-zinc-200 rounded-lg p-3 transition-colors duration-200 overflow-hidden"
              @click="close"
            >
              <div class="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/50 transition-colors duration-200"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 animate-gradient-x"></div>
              </div>
              <Icon name="carbon:currency-dollar" class="text-2xl text-zinc-500 relative z-10" />
              <span class="text-base relative z-10">Donate</span>
            </NuxtLink>
            <NuxtLink 
              to="/daily-songs" 
              class="group relative flex items-center gap-3 text-zinc-400 hover:text-zinc-200 rounded-lg p-3 transition-colors duration-200 overflow-hidden"
              @click="close"
            >
              <div class="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/50 transition-colors duration-200"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 animate-gradient-x"></div>
              </div>
              <Icon name="carbon:music" class="text-2xl text-zinc-500 relative z-10" />
              <span class="text-base relative z-10">Daily Song</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Me -->
        <div class="mb-6">
          <h3 class="text-sm text-zinc-500 px-2 mb-4">Me</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
            <NuxtLink 
              to="/repositories" 
              class="group relative flex items-center gap-3 text-zinc-400 hover:text-zinc-200 rounded-lg p-3 transition-colors duration-200 overflow-hidden"
              @click="close"
            >
              <div class="absolute inset-0 bg-zinc-800/0 group-hover:bg-zinc-800/50 transition-colors duration-200"></div>
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 animate-gradient-x"></div>
              </div>
              <Icon name="carbon:folder" class="text-2xl text-zinc-500 relative z-10" />
              <span class="text-base relative z-10">Repositories</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="absolute bottom-2 left-3 flex items-center gap-2 text-xs text-zinc-500 mt-4 pt-4 border-t border-zinc-800">
        <kbd class="px-1.5 py-0.5 bg-[#2A2E3B] rounded">ESC</kbd>
        <span>to close</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const search = ref('')
const searchInput = ref<HTMLInputElement>()

const navigationItems = [
  { title: 'Home', href: '/', icon: 'carbon:home' },
  { title: 'Blog', href: '/blog', icon: 'carbon:blog' },
  { title: 'Projects', href: '/projects', icon: 'carbon:tool-kit' },
  { title: 'Donate', href: '/donate', icon: 'carbon:currency-dollar' },
  { title: 'Daily Song', href: '/daily-songs', icon: 'carbon:music' }
]

const meItems = [
  { title: 'Repositories', href: '/repositories', icon: 'carbon:folder' }
]

const filteredNavigationItems = computed(() => {
  if (!search.value) return navigationItems
  return navigationItems.filter(item =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const filteredMeItems = computed(() => {
  if (!search.value) return meItems
  return meItems.filter(item =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  )
})

const open = () => {
  isOpen.value = true
  nextTick(() => {
    searchInput.value?.focus()
  })
}

const close = () => {
  isOpen.value = false
  search.value = ''
}

// Klavye kısayolu
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      if (isOpen.value) {
        close()
      } else {
        open()
      }
    }

    if (e.key === 'Escape' && isOpen.value) {
      close()
    }
  }

  window.addEventListener('keydown', handleKeydown)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
})

defineExpose({
  open,
  close
})
</script> 

<style>
@keyframes gradient-x {
  0% {
    background-size: 200% 100%;
    background-position: 0% 0%;
  }
  100% {
    background-size: 200% 100%;
    background-position: -200% 0%;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s linear infinite;
}
</style> 