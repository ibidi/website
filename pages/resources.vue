<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-start justify-center py-20">
      <h1 class="text-4xl font-bold text-zinc-200">Kaynaklar</h1>
      <p class="mt-4 text-zinc-400">Geliştirici yolculuğunuzda faydalı olabilecek kaynaklar ve araçlar.</p>

      <!-- Arama -->
      <div class="relative w-full mt-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Kaynaklarda ara..."
          class="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50"
        />
        <Icon
          name="heroicons:magnifying-glass-20-solid"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      </div>

      <div class="w-full mt-12 space-y-12">
        <!-- Frontend Kaynakları -->
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold text-zinc-200 flex items-center gap-2">
            <Icon name="heroicons:code-bracket-20-solid" class="text-violet-400" />
            Frontend Geliştirme
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://theodinproject.com" target="_blank" rel="noopener noreferrer" 
               class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                  <Icon name="simple-icons:theodinproject" class="text-xl text-violet-400" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-200 group-hover:text-violet-400 transition-colors duration-300">The Odin Project</h3>
                  <p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Ücretsiz, kapsamlı ve proje odaklı web geliştirme eğitimi.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://frontendmasters.com" target="_blank" rel="noopener noreferrer" 
               class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Icon name="simple-icons:frontendmasters" class="text-xl text-emerald-400" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">Frontend Masters</h3>
                  <p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Uzman eğitmenlerden ileri düzey frontend dersleri.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- UI/UX Kaynakları -->
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold text-zinc-200 flex items-center gap-2">
            <Icon name="heroicons:square-3-stack-3d-20-solid" class="text-pink-400" />
            UI/UX Tasarım
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://refactoringui.com" target="_blank" rel="noopener noreferrer" 
               class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center shrink-0">
                  <Icon name="simple-icons:refactoring-ui" class="text-xl text-sky-400" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-200 group-hover:text-sky-400 transition-colors duration-300">Refactoring UI</h3>
                  <p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Geliştiriciler için pratik UI tasarım rehberi.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://www.figma.com/community" target="_blank" rel="noopener noreferrer" 
               class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                  <Icon name="simple-icons:figma" class="text-xl text-orange-400" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-200 group-hover:text-orange-400 transition-colors duration-300">Figma Community</h3>
                  <p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Ücretsiz UI kitleri ve tasarım şablonları.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- Yazılım Araçları -->
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold text-zinc-200 flex items-center gap-2">
            <Icon name="heroicons:wrench-screwdriver-20-solid" class="text-blue-400" />
            Yazılım Araçları
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" 
               class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Icon name="simple-icons:visualstudiocode" class="text-xl text-blue-400" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors duration-300">VS Code</h3>
                  <p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Önerdiğim VS Code eklentileri ve ayarları.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://github.com/features" target="_blank" rel="noopener noreferrer" 
               class="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Icon name="simple-icons:github" class="text-xl text-emerald-400" />
                </div>
                <div>
                  <h3 class="font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">GitHub Features</h3>
                  <p class="mt-1 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    GitHub'ın güçlü özelliklerini keşfedin.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedDifficulties = ref<string[]>([])
const difficultyLevels = ['Başlangıç Seviyesi', 'Orta Seviye', 'İleri Seviye']

interface Resource {
  title: string
  description: string
  icon: string
  iconColor: string
  url: string
  tags: string[]
  difficulty: string
}

interface Category {
  category: string
  items: Resource[]
}

const resources: Category[] = [
  {
    category: 'Frontend Geliştirme',
    items: [
      {
        title: 'The Odin Project',
        description: 'Ücretsiz, kapsamlı ve proje odaklı web geliştirme eğitimi.',
        icon: 'simple-icons:theodinproject',
        iconColor: 'violet',
        url: 'https://theodinproject.com',
        tags: ['HTML', 'CSS', 'JavaScript'],
        difficulty: 'Başlangıç Seviyesi'
      },
      {
        title: 'Frontend Masters',
        description: 'Uzman eğitmenlerden ileri düzey frontend dersleri.',
        icon: 'simple-icons:frontendmasters',
        iconColor: 'emerald',
        url: 'https://frontendmasters.com',
        tags: ['React', 'Vue', 'TypeScript'],
        difficulty: 'İleri Seviye'
      }
    ]
  },
  {
    category: 'UI/UX Tasarım',
    items: [
      {
        title: 'Refactoring UI',
        description: 'Geliştiriciler için pratik UI tasarım rehberi.',
        icon: 'simple-icons:refactoring-ui',
        iconColor: 'sky',
        url: 'https://refactoringui.com',
        tags: ['UI', 'Design', 'CSS'],
        difficulty: 'Orta Seviye'
      },
      {
        title: 'Figma Community',
        description: 'Ücretsiz UI kitleri ve tasarım şablonları.',
        icon: 'simple-icons:figma',
        iconColor: 'orange',
        url: 'https://www.figma.com/community',
        tags: ['UI', 'Design', 'Figma'],
        difficulty: 'Başlangıç Seviyesi'
      }
    ]
  },
  {
    category: 'Yazılım Araçları',
    items: [
      {
        title: 'VS Code',
        description: 'Önerdiğim VS Code eklentileri ve ayarları.',
        icon: 'simple-icons:visualstudiocode',
        iconColor: 'blue',
        url: 'https://code.visualstudio.com',
        tags: ['Editor', 'IDE', 'Tools'],
        difficulty: 'Başlangıç Seviyesi'
      },
      {
        title: 'GitHub Features',
        description: 'GitHub\'ın güçlü özelliklerini keşfedin.',
        icon: 'simple-icons:github',
        iconColor: 'emerald',
        url: 'https://github.com/features',
        tags: ['Git', 'GitHub', 'Version Control'],
        difficulty: 'Orta Seviye'
      }
    ]
  }
]

const toggleDifficulty = (level: string) => {
  const index = selectedDifficulties.value.indexOf(level)
  if (index === -1) {
    selectedDifficulties.value.push(level)
  } else {
    selectedDifficulties.value.splice(index, 1)
  }
}

const filteredResources = computed(() => {
  return resources
    .map(category => {
      const filteredItems = category.items.filter(item => {
        const matchesSearch = 
          searchQuery.value === '' ||
          item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))

        const matchesDifficulty = 
          selectedDifficulties.value.length === 0 ||
          selectedDifficulties.value.includes(item.difficulty)

        return matchesSearch && matchesDifficulty
      })

      return {
        ...category,
        items: filteredItems
      }
    })
    .filter(category => category.items.length > 0)
})

definePageMeta({
  title: 'Kaynaklar'
})
</script>
