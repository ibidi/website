<template>
  <div class="relative"> 
    <AnimatedCodeBackground />
    <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
      <div class="container mx-auto max-w-4xl">
        <div class="flex flex-col gap-20">
          <div class="space-y-6">
            <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">
              Hi, I am İhsan Baki Doğan
            </h1>

            <div class="flex items-center gap-3">
              <span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                <span class="w-2 h-2 rounded-full" :class="isOnline ? 'bg-emerald-500' : 'bg-red-500'"></span>
                {{ isOnline ? 'Online' : 'Offline' }}
                <Icon name="ph:music-note-simple-fill" class="w-4 h-4 text-zinc-700 dark:text-zinc-300 ml-0" />
              </span>
              <template v-if="lastPlayedTrack.url">
                <a :href="lastPlayedTrack.url" target="_blank" class="hover:text-violet-400 transition-colors duration-200 ml-2">
                  {{ lastPlayedTrack.name }} - {{ lastPlayedTrack.artist }}
                  <span v-if="lastPlayedTrack.nowPlaying" class="text-xs text-emerald-500">(şimdi çalıyor)</span>
                  <span v-else class="text-xs text-zinc-500">(son çalan)</span>
                </a>
              </template>
              <span v-else class="ml-2">
                {{ lastPlayedTrack.name }} - {{ lastPlayedTrack.artist }}
                <span v-if="lastPlayedTrack.nowPlaying" class="text-xs text-emerald-500">(şimdi çalıyor)</span>
                <span v-else class="text-xs text-zinc-500">(son çalan)</span>
              </span>
            </span>
            <span v-else-if="!fetchError && !lastPlayedTrack" class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-500 border border-zinc-200 dark:border-zinc-700/50">
                <Icon name="simple-icons:lastfm" class="w-4 h-4 text-[#d51007]" />
                <span>Müzik aktivitesi yok</span>
            </span>
            <span v-else-if="fetchError" class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-red-500 dark:text-red-400 border border-zinc-200 dark:border-zinc-700/50">
                <Icon name="carbon:error" class="w-4 h-4" /> <!-- Changed to error icon -->
                <span>Veri alınamadı</span>
            </span>
          </div>

          <p class="text-base text-zinc-600 dark:text-zinc-400">
            Full Stack Web Developer - in ❤️ with Node.js, TypeScript, React.js and Vue.js - 🇹🇷
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
                        <img :src="job.image" :alt="job.company" class="w-full h-full object-contain" />
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
                        <img :src="education.image" :alt="education.school" class="w-full h-full object-contain" />
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
import AnimatedCodeBackground from '~/components/AnimatedCodeBackground.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const config = useRuntimeConfig();
const apiKey = config.public.lastFmApiKey;
const username = config.public.lastFmUsername;
const LASTFM_API_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

interface LastPlayedTrack {
  name: string;
  artist: string;
  url?: string;
  nowPlaying?: boolean;
  albumArt?: string;
}

const lastPlayedTrack = ref<LastPlayedTrack | null>(null);
const fetchError = ref<string | null>(null);

const isOnline = computed(() => !!lastPlayedTrack.value?.nowPlaying);

async function fetchLastPlayedTrack() {
  if (!apiKey || !username) {
    fetchError.value = 'Last.fm API anahtarı veya kullanıcı adı yapılandırılmamış.';
    console.error(fetchError.value);
    return;
  }
  try {
    const params = new URLSearchParams({
      method: 'user.getrecenttracks',
      user: username,
      api_key: apiKey,
      format: 'json',
      limit: '1'
    }).toString();

    const response = await $fetch<any>(`${LASTFM_API_BASE_URL}?${params}`);

    if (response && response.recenttracks && response.recenttracks.track && response.recenttracks.track.length > 0) {
      const track = response.recenttracks.track[0];
      lastPlayedTrack.value = {
        name: track.name,
        artist: track.artist['#text'],
        url: track.url,
        nowPlaying: track['@attr']?.nowplaying === 'true',
        albumArt: track.image?.find((img: any) => img.size === 'medium')?.['#text']
      };
    } else {
      lastPlayedTrack.value = null; // No recent tracks or unexpected response
    }
  } catch (err: any) {
    console.error('Error fetching Last.fm recent track:', err);
    fetchError.value = `Last.fm verisi alınamadı: ${err.message}`;
    lastPlayedTrack.value = null;
  }
}

let refreshInterval: NodeJS.Timeout | null = null;

onMounted(() => {
  fetchLastPlayedTrack();
  // Refresh every 30 seconds (30000 milliseconds)
  refreshInterval = setInterval(fetchLastPlayedTrack, 30000);
});

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }
});

// SEO
useSeo({
  title: 'İhsan Baki Doğan - Full Stack Developer',
  description: 'Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies. Check out my portfolio and blog.',
})

interface Job {
  id: number
  company: string
  title: string
  date: string
  image: string // Changed from icon to image
  isPresent?: boolean
}

interface Education {
  id: number
  school: string
  field: string
  date: string
  image: string // Added image property
}

const jobs: Job[] = [
  {
    id: 1,
    company: 'Demirayak Yazılım',
    title: 'Full Stack Developer / Co-Founder',
    date: '2019-Present',
    image: '/images/experience/demirayak.png', // Placeholder image path
    isPresent: true
  },
  {
    id: 2,
    company: 'Aksis Güzellik Salonları',
    title: 'Full Stack Developer / Social Media Expert',
    date: '2023-2025',
    image: '/images/experience/aksis.jpeg' // Placeholder image path
  },
  {
    id: 3,
    company: 'Not Bilgi Teknolojileri',
    title: 'Full Stack Developer / Social Media Expert',
    date: '2023-2025',
    image: '/images/experience/not-bilgi.png' // Placeholder image path
  },
  {
    id: 4,
    company: "Oguzkaan Koleji",
    title: "Information Technology Teacher / IT Specialist",
    date: '2023-2025',
    image: '/images/experience/oguzkaan.png' // Placeholder image path
  }
]

const educations: Education[] = [
  {
    id: 1,
    school: 'Istanbul Gelisim University',
    field: 'Computer Programming',
    date: '2019-2021',
    image: '/images/education/gelisim.png' // Placeholder image path
  },
  {
    id: 2,
    school: 'Anadolu University',
    field: 'Web Design and Development',
    date: '2023-2025',
    image: '/images/education/anadolu.png' // Placeholder image path
  },
  {
    id: 3,
    school: 'Istanbul University',
    field: 'Medical Documentation and Secretarial Services',
    date: '2022-2024',
    image: '/images/education/istanbul.png' // Placeholder image path
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
