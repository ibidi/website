<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
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
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

interface Song {
  title: string
  artist: string
  description: string
  imageUrl: string
  spotifyUrl: string
}

const songList: Song[] = [
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    description: "Rock müzik tarihinin en önemli parçalarından biri. Farklı müzikal bölümler ve dramatik anlatımıyla benzersiz bir deneyim sunuyor.",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da",
    spotifyUrl: "https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb"
  },
  {
    title: "Imagine",
    artist: "John Lennon",
    description: "Barış ve umut dolu bir klasik. John Lennon'ın en tanınmış solo çalışmalarından biri olan bu şarkı, evrensel bir mesaj taşıyor.",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273d20c2c09e519c5f19eed735e",
    spotifyUrl: "https://open.spotify.com/track/7pKfPomDEeI4TPT6EOYjn9"
  }
]

const song = ref<Song | null>(null)

const selectDailySong = () => {
  const today = dayjs().startOf('day')
  const dayOfYear = today.dayOfYear()
  const songIndex = dayOfYear % songList.length
  song.value = songList[songIndex]
}

onMounted(() => {
  selectDailySong()
})
</script>