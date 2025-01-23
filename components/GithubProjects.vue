<template>
  <div v-for="repo in repos" :key="repo.id" class="bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-purple-500/50 transition-colors duration-200">
    <div class="flex items-start justify-between mb-4">
      <h4 class="text-xl font-bold text-white">{{ repo.name }}</h4>
      <span class="flex items-center gap-1 text-gray-400">
        <Icon name="carbon:star-filled" />
        {{ repo.stargazers_count }}
      </span>
    </div>
    
    <p class="text-gray-400 mb-4 line-clamp-2">{{ repo.description }}</p>
    
    <div class="flex items-center justify-between">
      <span class="flex items-center gap-2 text-sm text-gray-400">
        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: repo.language_color }"></div>
        {{ repo.language }}
      </span>
      
      <a :href="repo.html_url" 
         target="_blank" 
         class="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
      >
        GitHub'da Görüntüle
        <Icon name="carbon:arrow-up-right" class="text-lg" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Octokit } from '@octokit/rest'

interface Repository {
  id: number
  name: string
  description: string
  language: string
  language_color: string
  stargazers_count: number
  html_url: string
}

const repos = ref<Repository[]>([])

const fetchRepos = async () => {
  const octokit = new Octokit()
  try {
    const response = await octokit.repos.listForUser({
      username: 'ibidi',
      sort: 'updated',
      per_page: 6
    })

    const languageColors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      Python: '#3776ab',
      Vue: '#42b883',
      React: '#61dafb',
      Go: '#00add8',
      Rust: '#dea584',
      Java: '#b07219',
      Kotlin: '#A97BFF',
      Swift: '#ffac45',
      Ruby: '#701516',
      PHP: '#4F5D95',
      CSS: '#563d7c',
      HTML: '#e34c26'
    }

    repos.value = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Açıklama yok',
      language: repo.language || 'Belirtilmemiş',
      language_color: languageColors[repo.language as keyof typeof languageColors] || '#808080',
      stargazers_count: repo.stargazers_count,
      html_url: repo.html_url
    }))
  } catch (error) {
    console.error('GitHub projeleri yüklenirken hata oluştu:', error)
  }
}

onMounted(() => {
  fetchRepos()
})
</script> 