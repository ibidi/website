<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl">
      <div class="flex flex-col gap-20">
        <div class="space-y-6">
          <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">
            Hi, I am İhsan Baki Doğan
          </h1>

          <div class="flex items-center gap-3">
            <span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
              <span class="w-2 h-2 rounded-full" :class="currentTrack?.isPlaying ? 'bg-emerald-500' : 'bg-red-500'"></span>
              {{ currentTrack?.isPlaying ? 'Online' : 'Offline' }}
            </span>
            <span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
              <Icon name="logos:spotify-icon" class="w-4 h-4" />
              <template v-if="currentTrack?.song">
                <a :href="currentTrack.song.spotifyUrl" target="_blank" class="hover:text-violet-400 transition-colors duration-200">
                  {{ currentTrack.song.title }} - {{ currentTrack.song.artist }}
                  <span v-if="!currentTrack.isPlaying" class="text-xs text-zinc-500">(son çalan)</span>
                </a>
              </template>
              <template v-else-if="lastPlayedSong">
                <a :href="lastPlayedSong.spotifyUrl" target="_blank" class="hover:text-violet-400 transition-colors duration-200">
                  {{ lastPlayedSong.title }} - {{ lastPlayedSong.artist }}
                  <span class="text-xs text-zinc-500">(son çalan)</span>
                </a>
              </template>
              <span v-else>Nothing</span>
            </span>
          </div>

          <p class="text-base text-zinc-600 dark:text-zinc-400">
            Full Stack Web Developer - in ❤️ with Node.js, TypeScript, PHP, React.js and Vue.js - 🇹🇷
          </p>

          <div class="flex items-center gap-3">
            <a href="mailto:info@ibidi.tr" class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <Icon name="carbon:email" class="text-base" />
              Contact
            </a>

            <div class="flex items-center gap-2">
              <a href="https://github.com/ibidi" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-github" class="text-xl" />
              </a>
              <a href="https://twitter.com/ibidicodes" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-twitter" class="text-xl" />
              </a>
              <a href="https://linkedin.com/in/ibidi" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-linkedin" class="text-xl" />
              </a>
              <a href="https://instagram.com/ihsanbakidogann" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-instagram" class="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <!-- Experience & Education -->
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Experience -->
          <div class="space-y-4">
            <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Experience</h2>
            <div class="space-y-4">
              <div v-for="job in jobs" :key="job.id" class="group">
                <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                        <Icon :name="job.icon" class="text-base text-violet-500" />
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ job.company }}</h3>
                          <span v-if="job.isPresent" class="px-2 py-0.5 text-xs bg-violet-500/10 text-violet-500 rounded">PRESENT</span>
                        </div>
                        <p class="text-sm text-zinc-600 dark:text-zinc-400">{{ job.title }}</p>
                        <p class="text-sm text-zinc-500 dark:text-zinc-500">{{ job.date }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="space-y-4">
            <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Education</h2>
            <div class="space-y-4">
              <div v-for="education in educations" :key="education.id" class="group">
                <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                        <Icon name="carbon:education" class="text-base text-violet-500" />
                      </div>
                      <div>
                        <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ education.school }}</h3>
                        <p class="text-sm text-zinc-600 dark:text-zinc-400">{{ education.field }}</p>
                        <p class="text-sm text-zinc-500 dark:text-zinc-500">{{ education.date }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technologies -->
        <div class="space-y-4">
          <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Technologies I Use</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <!-- Frontend -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:application-web" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Frontend</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">Vue.js, React.js, TypeScript, TailwindCSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:data-base" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Backend</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">Node.js, PHP, MySQL, MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:tools" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Tools</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">VS Code, Git, Docker, Figma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cloud -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:cloud" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Cloud</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">AWS, Netlify, Vercel, DigitalOcean</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <!-- Diğer içerikler -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DailySong from '~/components/DailySong.vue'
import type { Song } from '~/types/spotify'

// SEO
useSeo({
  title: 'İhsan Baki Doğan - Full Stack Developer',
  description: 'Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies. Check out my portfolio and blog.',
})

interface CurrentTrack {
  isPlaying: boolean
  song: {
    id: string
    title: string
    artist: string
    imageUrl: string
    spotifyUrl: string
    isPlaying: boolean
  } | null
  lastPlayed?: {
    title: string
    artist: string
    albumArt: string
    spotifyUrl: string
  }
}

const currentTrack = ref<CurrentTrack>({
  isPlaying: false,
  song: null
})

const lastPlayedSong = ref<Song | null>(null)

// localStorage işlemlerini client-side'da yap
onMounted(() => {
  // Sayfa yüklendiğinde localStorage'dan son çalan şarkıyı al
  const savedSong = localStorage.getItem('lastPlayedSong')
  if (savedSong) {
    try {
      lastPlayedSong.value = JSON.parse(savedSong)
    } catch (e) {
      console.error('Error parsing saved song:', e)
    }
  }
})

const fetchCurrentTrack = async () => {
  try {
    const { data: nowPlaying } = await useFetch('/api/spotify/now-playing', {
      key: 'spotify-now-playing',
      transform: (response) => {
        if (!response) return null
        return {
          isPlaying: response.isPlaying || false,
          song: response.song ? {
            id: response.song.id || '',
            title: response.song.title,
            artist: response.song.artist,
            imageUrl: response.song.albumArt,
            spotifyUrl: response.song.url,
            isPlaying: response.isPlaying || false
          } : null
        }
      }
    })

    if (nowPlaying.value) {
      currentTrack.value = nowPlaying.value

      // Eğer şarkı varsa ve tarayıcı ortamındaysak, son çalan şarkı olarak kaydet
      if (nowPlaying.value.song && process.client) {
        lastPlayedSong.value = nowPlaying.value.song
        localStorage.setItem('lastPlayedSong', JSON.stringify(nowPlaying.value.song))
      }
    }
  } catch (error) {
    console.error('Error fetching current track:', error)
  }
}

// Sayfa yüklendiğinde ve periyodik olarak şarkı bilgisini güncelle
onMounted(() => {
  fetchCurrentTrack()
  
  // Her 30 saniyede bir güncelle
  const interval = setInterval(() => {
    fetchCurrentTrack()
  }, 30000)

  // Component unmount olduğunda interval'i temizle
  onUnmounted(() => {
    clearInterval(interval)
  })
})

definePageMeta({
  title: 'Home'
})

interface Job {
  id: number
  company: string
  title: string
  date: string
  icon: string
  isPresent?: boolean
}

interface Education {
  id: number
  school: string
  field: string
  date: string
}

const jobs: Job[] = [
  {
    id: 1,
    company: 'Demirayak Yazılım',
    title: 'Full Stack Developer',
    date: '2019-Present',
    icon: 'carbon:development',
    isPresent: true
  },
  {
    id: 2,
    company: 'Vien Bag',
    title: 'Web Developer',
    date: '2024-2025',
    icon: 'carbon:shopping-bag'
  },
  {
    id: 3,
    company: 'As Aksis Güzellik Merkezleri',
    title: 'Web Developer',
    date: '2023-2025',
    icon: 'carbon:face-satisfied'
  },
  {
    id: 4,
    company: 'Not Bilgi Teknolojileri',
    title: 'Developer, Social Media Expert, IT',
    date: '2023-2025',
    icon: 'carbon:laptop'
  },
  {
    id: 5,
    company: 'ASEDE',
    title: 'Developer',
    date: '2023-2024',
    icon: 'carbon:shopping-cart'
  }
]

const educations: Education[] = [
  {
    id: 1,
    school: 'Istanbul Gelisim University',
    field: 'Computer Programming',
    date: '2019-2021'
  },
  {
    id: 2,
    school: 'Anadolu University',
    field: 'Web Design and Development',
    date: '2023-2025'
  },
  {
    id: 3,
    school: 'Istanbul Arel University',
    field: 'Software Engineering',
    date: '2022-2026'
  }
]
</script>

<style lang="postcss">
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

::selection {
  @apply bg-violet-500/20 text-violet-200;
}

::-moz-selection {
  @apply bg-violet-500/20 text-violet-200;
}
</style>