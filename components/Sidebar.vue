<template>
  <div>
    <!-- Overlay -->
    <div v-if="modelValue" @click="$emit('update:modelValue', false)" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"></div>

    <!-- Command Menu -->
    <div v-if="modelValue" class="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div class="w-[640px] bg-zinc-900/90 backdrop-blur-xl shadow-2xl border border-zinc-800/50 rounded-xl overflow-hidden">
        <div class="p-3">
          <div class="flex items-center gap-3 px-3 py-3 mb-2">
            <div class="flex items-center gap-2 px-2 py-1 bg-zinc-800/50 rounded-md min-w-[120px]">
              <Icon name="carbon:search" class="text-base text-zinc-500" />
              <input 
                ref="searchInput"
                v-model="search"
                type="text" 
                placeholder="Search..."
                class="w-full bg-transparent text-zinc-200 placeholder-zinc-500 text-sm focus:outline-none"
                @keydown.esc="$emit('update:modelValue', false)"
              >
            </div>
            <div class="text-xs text-zinc-500">
              Press <kbd class="px-1.5 py-0.5 bg-zinc-800 rounded-md border border-zinc-700/50 text-zinc-400">ESC</kbd> to close
            </div>
          </div>

          <div class="px-1">
            <div class="relative">
              <div class="flex items-center gap-2 px-2 py-1.5">
                <Icon name="carbon:navigation" class="text-base text-zinc-500" />
                <span class="text-xs font-medium text-zinc-500 tracking-wider">NAVIGATION</span>
              </div>
              <nav class="mt-1 space-y-1">
                <NuxtLink
                  v-for="link in filteredNavLinks"
                  :key="link.to"
                  :to="link.to"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/70 rounded-lg transition-colors duration-200"
                  @click="$emit('update:modelValue', false)"
                >
                  <Icon :name="link.icon" class="text-base" />
                  <div class="flex-1">{{ link.text }}</div>
                  <div class="text-xs text-zinc-600">⌘K</div>
                </NuxtLink>
              </nav>
            </div>

            <div class="relative mt-4">
              <div class="flex items-center gap-2 px-2 py-1.5">
                <Icon name="carbon:connect" class="text-base text-zinc-500" />
                <span class="text-xs font-medium text-zinc-500 tracking-wider">SOCIAL</span>
              </div>
              <nav class="mt-1 space-y-1">
                <a
                  v-for="link in filteredSocialLinks"
                  :key="link.to"
                  :href="link.to"
                  target="_blank"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/70 rounded-lg transition-colors duration-200"
                  @click="$emit('update:modelValue', false)"
                >
                  <Icon :name="link.icon" class="text-base" />
                  <div class="flex-1">{{ link.text }}</div>
                  <Icon name="carbon:arrow-up-right" class="text-xs text-zinc-600" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const search = ref('')
const searchInput = ref<HTMLInputElement>()

// Klavye kısayolu için event listener
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      emit('update:modelValue', true)
      // Input'a fokuslan
      nextTick(() => {
        searchInput.value?.focus()
      })
    }
  })
})

const navLinks = [
  { to: '/', text: 'Home', icon: 'carbon:home' },
  { to: '/blog', text: 'Blog', icon: 'carbon:blog' },
  { to: '/projects', text: 'Projects', icon: 'carbon:code' },
  { to: '/daily-songs', text: 'Daily Songs', icon: 'carbon:music' },
  { to: '/donate', text: 'Donate', icon: 'carbon:currency-dollar' }
]

const socialLinks = [
  { to: 'https://github.com/ibidi', text: 'GitHub', icon: 'carbon:logo-github' },
  { to: 'https://twitter.com/ibidicodes', text: 'Twitter', icon: 'carbon:logo-twitter' },
  { to: 'https://linkedin.com/in/ibidi', text: 'LinkedIn', icon: 'carbon:logo-linkedin' }
]

// Arama filtreleme
const filteredNavLinks = computed(() => {
  if (!search.value) return navLinks
  return navLinks.filter(link => 
    link.text.toLowerCase().includes(search.value.toLowerCase())
  )
})

const filteredSocialLinks = computed(() => {
  if (!search.value) return socialLinks
  return socialLinks.filter(link => 
    link.text.toLowerCase().includes(search.value.toLowerCase())
  )
})

watch(() => useRoute().fullPath, () => {
  emit('update:modelValue', false)
})
</script> 