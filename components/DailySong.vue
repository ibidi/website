<template>
  <div class="flex-1 flex items-center justify-center">
    <div class="w-full max-w-4xl mx-auto px-4 py-12">
      <div v-if="song" class="bg-dark-800 rounded-2xl p-8 shadow-xl">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="relative group w-48 h-48 flex-shrink-0">
            <img 
              :src="song.imageUrl" 
              :alt="song.title" 
              class="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-purple-500/20 transition-shadow duration-300" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
              <a :href="song.spotifyUrl" target="_blank" class="text-white hover:text-purple-400 transition-colors duration-200">
                <Icon name="carbon:play-filled" class="text-4xl" />
              </a>
            </div>
          </div>

          <div class="flex-1 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Icon name="carbon:music" class="text-purple-400" />
              <span class="text-sm font-medium text-purple-400">Günün Şarkısı</span>
            </div>
            <h4 class="text-3xl font-bold text-white mb-3">{{ song.title }}</h4>
            <p class="text-xl text-gray-400 font-medium mb-4">{{ song.artist }}</p>
            <p class="text-gray-500 mb-6 leading-relaxed max-w-2xl">{{ song.description }}</p>
            <a 
              :href="song.spotifyUrl" 
              target="_blank" 
              class="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 rounded-lg transition-colors duration-200"
            >
              <Icon name="carbon:logo-spotify" class="text-xl" />
              Spotify'da Dinle
            </a>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center justify-center h-48 text-gray-500">
        <Icon name="carbon:circle-dash" class="text-2xl mr-2 animate-spin" />
        Günün şarkısı yükleniyor...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

interface Song {
  title: string
  artist: string
  imageUrl: string
  spotifyUrl: string
  description: string
}

const song = ref<Song | null>(null)

const refreshSpotifyToken = async () => {
  try {
    const response = await fetch('/api/spotify/refresh', {
      method: 'POST'
    })
    if (!response.ok) {
      throw new Error('Token yenileme başarısız')
    }
    // Token yenilendikten sonra şarkıyı tekrar getir
    await getCurrentlyPlaying()
  } catch (error) {
    console.error('Token yenileme hatası:', error)
  }
}

const getCurrentlyPlaying = async () => {
  try {
    const response = await fetch('/api/spotify/now-playing')
    if (!response.ok) {
      if (response.status === 401) {
        // Token geçersiz ise yenile
        await refreshSpotifyToken()
        return
      }
      throw new Error('Şarkı bilgisi alınamadı')
    }
    const data = await response.json()
    song.value = data
  } catch (error) {
    console.error('Şarkı bilgisi alma hatası:', error)
  }
}

const updateSong = async () => {
  await getCurrentlyPlaying()
}

// Sayfa yüklendiğinde ve her 30 saniyede bir güncelle
onMounted(() => {
  updateSong()
  const interval = setInterval(updateSong, 30000)
  onUnmounted(() => clearInterval(interval))
})
</script>