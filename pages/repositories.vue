<!-- Repository Page -->
<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-8">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">
            Repositories
          </h1>

          <div class="flex items-center gap-3">
            <a 
              href="https://github.com/ibidi" 
              target="_blank"
              class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50"
            >
              <Icon name="carbon:logo-github" class="text-base" />
              ibidi
            </a>
            <span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
              <Icon name="carbon:repository" class="text-base" />
              {{ repositories.length }} repositories
            </span>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center py-20">
          <div class="animate-spin rounded-full h-8 w-8 border-2 border-violet-500 border-t-transparent"></div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex flex-col items-center justify-center gap-4 py-20">
          <Icon name="carbon:warning" class="text-4xl text-red-500" />
          <p class="text-zinc-600 dark:text-zinc-400">{{ error }}</p>
        </div>

        <!-- Repository Grid -->
        <div v-else class="grid gap-4 md:grid-cols-2">
          <a 
            v-for="repo in repositories" 
            :key="repo.id"
            :href="repo.html_url"
            target="_blank" 
            class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-zinc-500 dark:text-zinc-400">{{ repo.owner.login }}/</span>
                  <span class="font-medium text-zinc-900 dark:text-zinc-200">{{ repo.name }}</span>
                </div>
                <Icon 
                  v-if="repo.stargazers_count > 0" 
                  name="carbon:star-filled" 
                  class="text-amber-400" 
                />
              </div>

              <p class="text-sm text-zinc-600 dark:text-zinc-400">
                <Icon 
                  :name="getRepoIcon(repo)" 
                  class="inline-block w-4 h-4 mr-1" 
                />
                {{ repo.description || 'No description provided.' }}
              </p>

              <div class="flex flex-col gap-1">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-zinc-500 dark:text-zinc-400">Stars:</span>
                  <span class="text-zinc-900 dark:text-zinc-200">{{ repo.stargazers_count }}</span>
                </div>

                <div class="flex items-center justify-between text-sm">
                  <span class="text-zinc-500 dark:text-zinc-400">Language:</span>
                  <Icon 
                    v-if="repo.language"
                    :name="getLanguageIcon(repo.language)" 
                    class="w-4 h-4" 
                  />
                  <span v-else class="text-zinc-900 dark:text-zinc-200">-</span>
                </div>

                <div class="flex items-center justify-between text-sm">
                  <span class="text-zinc-500 dark:text-zinc-400">License:</span>
                  <span class="text-zinc-900 dark:text-zinc-200">{{ repo.license?.spdx_id || 'No license' }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Repository {
  id: number
  name: string
  description: string | null
  owner: {
    login: string
  }
  stargazers_count: number
  language: string | null
  license: {
    spdx_id: string
  } | null
  topics: string[]
  html_url: string
}

const repositories = ref<Repository[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

// GitHub'dan repository bilgilerini çek
const fetchRepositories = async () => {
  try {
    loading.value = true
    error.value = null
    
    const response = await fetch('https://api.github.com/users/ibidi/repos?sort=updated&per_page=100', {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      throw new Error('GitHub API\'ye erişilemiyor. Lütfen daha sonra tekrar deneyin.')
    }

    const data = await response.json()
    repositories.value = data
  } catch (err) {
    console.error('Repositories yüklenirken hata oluştu:', err)
    error.value = 'Repository\'ler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
  } finally {
    loading.value = false
  }
}

// Repository için ikon seç
const getRepoIcon = (repo: Repository) => {
  if (repo.topics?.includes('api')) return 'logos:api'
  if (repo.name.toLowerCase().includes('discord')) return 'logos:discord-icon'
  if (repo.name.toLowerCase().includes('web')) return 'logos:nuxt-icon'
  return 'carbon:code'
}

// Programlama dili için ikon seç
const getLanguageIcon = (language: string | null) => {
  const icons: Record<string, string> = {
    TypeScript: 'logos:typescript-icon',
    JavaScript: 'logos:javascript',
    Vue: 'logos:vue',
    Python: 'logos:python',
    HTML: 'logos:html-5',
    CSS: 'logos:css-3',
    PHP: 'logos:php',
    Java: 'logos:java',
    Ruby: 'logos:ruby',
    Go: 'logos:go',
    Rust: 'logos:rust',
    Swift: 'logos:swift',
    Kotlin: 'logos:kotlin',
    'C#': 'logos:c-sharp'
  }

  return icons[language || ''] || 'carbon:code'
}

// Sayfa yüklendiğinde repository'leri çek
onMounted(() => {
  fetchRepositories()
})

definePageMeta({
  title: 'Repositories'
})
</script>

<style lang="postcss">
::selection {
  @apply bg-violet-500/20 text-violet-200;
}

::-moz-selection {
  @apply bg-violet-500/20 text-violet-200;
}
</style> 