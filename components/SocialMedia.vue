<template>
  <div class="p-6 space-y-8">
    <!-- GitHub Aktiviteleri -->
    <div class="bg-dark-800 rounded-lg p-6">
      <div class="flex items-center gap-2 mb-4">
        <Icon name="carbon:logo-github" class="text-2xl text-gray-400" />
        <h3 class="text-xl font-bold text-white">GitHub Aktiviteleri</h3>
      </div>
      <div v-if="githubData" class="space-y-4">
        <div v-for="(activity, index) in githubData" :key="index" 
             class="flex items-start gap-3 p-3 rounded-lg hover:bg-dark-700 transition-colors">
          <Icon :name="getGitHubIcon(activity.type)" class="text-purple-400 mt-1" />
          <div>
            <p class="text-gray-300">{{ activity.message }}</p>
            <a :href="activity.url" target="_blank" 
               class="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              {{ activity.repo }}
            </a>
            <p class="text-xs text-gray-500 mt-1">{{ formatDate(activity.created_at) }}</p>
          </div>
        </div>
      </div>
      <div v-else class="text-gray-500 text-center py-4">
        <Icon name="carbon:circle-dash" class="text-2xl animate-spin" />
        <p>GitHub aktiviteleri yükleniyor...</p>
      </div>
    </div>

    <!-- Twitter Feed -->
    <div class="bg-dark-800 rounded-lg p-6">
      <div class="flex items-center gap-2 mb-4">
        <Icon name="carbon:logo-twitter" class="text-2xl text-gray-400" />
        <h3 class="text-xl font-bold text-white">Son Tweetler</h3>
      </div>
      <div v-if="tweets" class="space-y-4">
        <div v-for="(tweet, index) in tweets" :key="index" 
             class="p-3 rounded-lg hover:bg-dark-700 transition-colors">
          <p class="text-gray-300">{{ tweet.text }}</p>
          <div class="flex items-center gap-4 mt-2">
            <span class="text-sm text-gray-500">
              <Icon name="carbon:favorite" class="inline-block mr-1" />
              {{ tweet.likes }}
            </span>
            <span class="text-sm text-gray-500">
              <Icon name="carbon:repeat" class="inline-block mr-1" />
              {{ tweet.retweets }}
            </span>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ formatDate(tweet.created_at) }}</p>
        </div>
      </div>
      <div v-else class="text-gray-500 text-center py-4">
        <Icon name="carbon:circle-dash" class="text-2xl animate-spin" />
        <p>Tweetler yükleniyor...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/tr'

dayjs.locale('tr')

interface GitHubActivity {
  type: string
  message: string
  repo: string
  url: string
  created_at: string
}

interface Tweet {
  text: string
  likes: number
  retweets: number
  created_at: string
}

const githubData = ref<GitHubActivity[]>([])
const tweets = ref<Tweet[]>([])

const getGitHubIcon = (type: string) => {
  const icons = {
    'PushEvent': 'carbon:push',
    'CreateEvent': 'carbon:add',
    'PullRequestEvent': 'carbon:pull-request',
    'IssueEvent': 'carbon:issue',
    'ForkEvent': 'carbon:fork',
    'WatchEvent': 'carbon:star'
  }
  return icons[type] || 'carbon:code'
}

const formatDate = (date: string) => {
  return dayjs(date).fromNow()
}

onMounted(async () => {
  try {
    // GitHub aktivitelerini getir
    const githubResponse = await fetch('/api/github/activities')
    githubData.value = await githubResponse.json()

    // Twitter tweetlerini getir
    const twitterResponse = await fetch('/api/twitter/tweets')
    tweets.value = await twitterResponse.json()
  } catch (error) {
    console.error('Sosyal medya verileri yüklenirken hata:', error)
  }
})
</script>
