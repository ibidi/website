<template>
  <div class="min-h-screen bg-zinc-900 px-4 py-12 md:py-20">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-3xl font-medium text-zinc-200">Günlük Şarkılar</h1>
          <p class="text-zinc-400">Her gün dinlediğim ve önerdiğim şarkılar.</p>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <div class="relative group">
              <Icon 
                name="carbon:search" 
                class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-hover:text-violet-400 transition-colors duration-200"
              />
              <input
                v-model="search"
                type="text"
                placeholder="Şarkı veya sanatçı ara..."
                class="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-200"
              >
            </div>
          </div>

          <div class="flex gap-4">
            <div class="relative group">
              <select
                v-model="selectedGenre"
                class="appearance-none bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-4 pr-10 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-200 cursor-pointer"
              >
                <option value="">Tüm Türler</option>
                <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Icon name="carbon:chevron-down" class="text-zinc-500 group-hover:text-violet-400 transition-colors duration-200" />
              </div>
            </div>

            <div class="relative group">
              <select
                v-model="sortBy"
                class="appearance-none bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-4 pr-10 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-200 cursor-pointer"
              >
                <option value="date">Tarihe Göre</option>
                <option value="title">İsme Göre</option>
                <option value="artist">Sanatçıya Göre</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Icon name="carbon:chevron-down" class="text-zinc-500 group-hover:text-violet-400 transition-colors duration-200" />
              </div>
            </div>
          </div>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="inline-flex items-center gap-2 text-zinc-400">
            <Icon name="carbon:circle-dash" class="animate-spin text-xl" />
            Şarkılar yükleniyor...
          </div>
        </div>

        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-400">{{ error }}</p>
        </div>

        <div v-else-if="filteredSongs.length === 0" class="text-center py-12">
          <p class="text-zinc-400">Sonuç bulunamadı.</p>
        </div>

        <div v-else class="grid gap-4 md:grid-cols-2">
          <div 
            v-for="song in filteredSongs" 
            :key="song.id"
            class="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-lg overflow-hidden hover:bg-zinc-800/70 hover:border-zinc-600/50 transition-all duration-200"
          >
            <div class="aspect-video relative">
              <img 
                :src="song.thumbnail" 
                :alt="song.title"
                class="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <a 
                  :href="song.url" 
                  target="_blank"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <Icon name="carbon:play-filled" class="text-lg" />
                  YouTube'da İzle
                </a>
              </div>
            </div>
            <div class="p-4 space-y-2">
              <div class="flex items-center justify-between">
                <time class="text-sm text-zinc-500">{{ song.date }}</time>
                <span class="px-2 py-0.5 text-xs bg-zinc-700/50 text-zinc-400 rounded">{{ song.genre }}</span>
              </div>
              <h2 class="text-lg font-medium text-zinc-200 group-hover:text-violet-400 transition-colors duration-200">{{ song.title }}</h2>
              <p class="text-sm text-zinc-400">{{ song.artist }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Song {
  id: string
  title: string
  artist: string
  genre: string
  date: string
  thumbnail: string
  url: string
  isVideo: boolean
}

const loading = ref(true)
const error = ref('')
const songs = ref<Song[]>([])

// Spotify'dan şarkıları al
const fetchSongs = async () => {
  try {
    loading.value = true
    error.value = ''

    // Server API'den şarkıları al
    const response = await $fetch('/api/songs')

    // Error kontrolü
    if ('error' in response) {
      throw new Error(response.error)
    }

    // Şarkı listesi kontrolü
    if (!response.songs) {
      throw new Error('Şarkı listesi bulunamadı')
    }

    songs.value = response.songs
    loading.value = false
  } catch (err) {
    console.error('API Hatası:', err)
    error.value = err instanceof Error ? err.message : 'Şarkılar yüklenirken bir hata oluştu'
    loading.value = false
    songs.value = []
  }
}

// Sayfa yüklendiğinde şarkıları al
onMounted(() => {
  fetchSongs()
})

// Durum değişkenleri
const search = ref('')
const selectedGenre = ref('')
const sortBy = ref('date')

// Benzersiz türleri al
const genres = computed(() => {
  return [...new Set(songs.value.map(song => song.genre))]
})

// Filtrelenmiş ve sıralanmış şarkılar
const filteredSongs = computed(() => {
  let filtered = [...songs.value]

  // Arama filtresi
  if (search.value) {
    const searchLower = search.value.toLowerCase()
    filtered = filtered.filter(song => 
      song.title.toLowerCase().includes(searchLower) ||
      song.artist.toLowerCase().includes(searchLower)
    )
  }

  // Tür filtresi
  if (selectedGenre.value) {
    filtered = filtered.filter(song => song.genre === selectedGenre.value)
  }

  // Sıralama
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'title':
        return a.title.localeCompare(b.title)
      case 'artist':
        return a.artist.localeCompare(b.artist)
      default: // date
        return new Date(b.date.split('/').reverse().join('-')).getTime() - new Date(a.date.split('/').reverse().join('-')).getTime()
    }
  })

  return filtered
})
</script> 