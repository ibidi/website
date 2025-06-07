<template>
  <div v-if="!userInfo && !error && loading" class="text-center py-10"> <!-- Adjusted loading condition -->
    <p class="text-lg text-zinc-500 dark:text-zinc-400">Loading Last.fm stats...</p>
  </div>
  <div v-else-if="error" class="text-center py-10">
    <p class="text-lg text-red-500 dark:text-red-400">Error loading Last.fm stats: {{ error }}</p>
  </div>
  <div v-else class="space-y-16 text-zinc-900 dark:text-zinc-200">
    <!-- DETAILS Section -->
    <section v-if="userInfo">
      <h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">Details</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 text-lg">
        <div>
          <p class="text-zinc-700 dark:text-zinc-300">Profile</p>
          <a v-if="userInfo.url" :href="userInfo.url" target="_blank" class="flex items-center gap-2 text-violet-500 dark:text-violet-400 hover:underline">
            @{{ userInfo.name }}
            <img v-if="userInfo.image && userInfo.image.find(img => img.size === 'medium')?.['#text']" :src="userInfo.image.find(img => img.size === 'medium')['#text']" alt="Avatar" class="w-6 h-6 rounded-full ml-1">
            <Icon v-else name="carbon:user-avatar-filled" class="w-5 h-5 opacity-75 ml-1" />
          </a>
          <span v-else class="flex items-center gap-2">
            @{{ userInfo.name }}
            <img v-if="userInfo.image && userInfo.image.find(img => img.size === 'medium')?.['#text']" :src="userInfo.image.find(img => img.size === 'medium')['#text']" alt="Avatar" class="w-6 h-6 rounded-full ml-1">
            <Icon v-else name="carbon:user-avatar-filled" class="w-5 h-5 opacity-75 ml-1" />
          </span>
        </div>
        <div>
          <p class="text-zinc-700 dark:text-zinc-300">Account Age</p>
          <p class="flex items-center gap-2">{{ calculateAccountAge(userInfo.registered.unixtime) }} year(s) <Icon name="carbon:calendar" class="w-5 h-5 opacity-75" /></p>
        </div>
        <div>
          <p class="text-zinc-700 dark:text-zinc-300">Total Plays</p>
          <p class="flex items-center gap-2">{{ Number(userInfo.playcount).toLocaleString() }} <Icon name="carbon:play-filled" class="w-5 h-5 opacity-75" /></p>
        </div>
      </div>
    </section>

    <!-- TOP SONGS (LAST 7 DAYS) -->
    <section v-if="topTracks && topTracks.length > 0">
      <h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">Top Songs (Last 7 Days)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div v-for="track in topTracks" :key="track.mbid || track.name" class="bg-zinc-50 dark:bg-zinc-800/30 p-4 rounded-lg flex justify-between items-center hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors duration-150">
          <div>
            <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              <a :href="track.url" target="_blank" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200">{{ track.name }}</a>
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">by {{ track.artist.name }}</p>
          </div>
          <span class="text-sm bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-2.5 py-1 rounded-full font-medium">{{ track.playcount }} plays</span>
        </div>
      </div>
    </section>

    <!-- TOP ARTISTS (LAST 7 DAYS) -->
    <section v-if="topArtists && topArtists.length > 0">
      <h2 class="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">Top Artists (Last 7 Days)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        <div v-for="artist in topArtists" :key="artist.mbid || artist.name" class="bg-zinc-50 dark:bg-zinc-800/30 p-4 rounded-lg flex justify-between items-center hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors duration-150">
          <div>
            <h3 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              <a :href="artist.url" target="_blank" class="hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200">{{ artist.name }}</a>
            </h3>
          </div>
          <span class="text-sm bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-2.5 py-1 rounded-full font-medium">{{ artist.playcount }} plays</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();
const apiKey = config.public.lastFmApiKey;
const username = config.public.lastFmUsername;

const userInfo = ref<any>(null);
const loading = ref<boolean>(true); // Added loading state
const recentTracks = ref<any[]>([]);
const topTracks = ref<any[]>([]);
const topArtists = ref<any[]>([]);
const error = ref<any>(null);

const LASTFM_API_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

async function fetchData(method: string, params: Record<string, string | number> = {}) {
  try {
    const queryParams = new URLSearchParams({
      method,
      user: username,
      api_key: apiKey,
      format: 'json',
      ...params
    }).toString();

    // Nuxt 3: useFetch for client-side fetching after mount
    // For server-side fetching or more complex scenarios, $fetch or useAsyncData might be preferred.
    const response = await $fetch<any>(`${LASTFM_API_BASE_URL}?${queryParams}`);
    return response;
  } catch (err) {
    console.error(`Error fetching ${method}:`, err);
    error.value = err;
    loading.value = false; // Set loading to false on error
    return null;
  }
}

function formatRegisteredDate(unixTimestamp: string): string {
  if (!unixTimestamp) return 'Bilinmiyor';
  const date = new Date(parseInt(unixTimestamp, 10) * 1000);
  return date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function calculateAccountAge(unixTimestamp: string): number {
  if (!unixTimestamp) return 'Bilinmiyor';
  const registeredDate = new Date(parseInt(unixTimestamp, 10) * 1000);
  const now = new Date();
  let years = now.getFullYear() - registeredDate.getFullYear();
  let months = now.getMonth() - registeredDate.getMonth();
  let days = now.getDate() - registeredDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Days in previous month
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return years > 0 ? years : 0; // Return number of full years, or 0 if less than a year
}

onMounted(async () => {
  if (!apiKey || !username) {
    error.value = 'Last.fm API anahtarı veya kullanıcı adı yapılandırılmamış.';
    console.error(error.value);
    loading.value = false;
    return;
  }

  const userInfoResponse = await fetchData('user.getInfo');
  if (userInfoResponse && userInfoResponse.user) {
    userInfo.value = userInfoResponse.user;
  }

  const recentTracksResponse = await fetchData('user.getRecentTracks', { limit: 10 }); // Limit to 10, display 5
  if (recentTracksResponse && recentTracksResponse.recenttracks && recentTracksResponse.recenttracks.track) {
    recentTracks.value = recentTracksResponse.recenttracks.track;
  }

  const topTracksResponse = await fetchData('user.getTopTracks', { period: '7day', limit: 10 });
  if (topTracksResponse && topTracksResponse.toptracks && topTracksResponse.toptracks.track) {
    topTracks.value = topTracksResponse.toptracks.track;
  }

  const topArtistsResponse = await fetchData('user.getTopArtists', { period: '7day', limit: 10 });
  if (topArtistsResponse && topArtistsResponse.topartists && topArtistsResponse.topartists.artist) {
    topArtists.value = topArtistsResponse.topartists.artist;
  }
  loading.value = false; // Set loading to false after all data is fetched
});

</script>

<style scoped>
/* Tailwind CSS zaten projede olduğu için özel stil ihtiyacı minimumda tutulmuştur. */
/* Gerekirse buraya ek stil tanımlamaları yapabilirsiniz. */
.lastfm-stats ::-webkit-scrollbar {
  width: 8px;
}

.lastfm-stats ::-webkit-scrollbar-track {
  background: #2d3748; /* gray-800 */
}

.lastfm-stats ::-webkit-scrollbar-thumb {
  background: #4a5568; /* gray-600 */
  border-radius: 4px;
}

.lastfm-stats ::-webkit-scrollbar-thumb:hover {
  background: #718096; /* gray-500 */
}
</style>
