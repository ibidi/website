<template>
  <div class="lastfm-stats p-4 bg-gray-800 text-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold mb-6 text-center">Last.fm İstatistiklerim</h2>

    <!-- Profile Info -->
    <div v-if="userInfo" class="mb-8 p-4 bg-gray-700 rounded">
      <h3 class="text-xl font-medium mb-2">Profil Bilgileri</h3>
      <p>Toplam Dinleme: <span class="font-bold">{{ userInfo.playcount }}</span></p>
      <p>Kayıt Tarihi: <span class="font-bold">{{ formatRegisteredDate(userInfo.registered.unixtime) }}</span></p>
      <p>Hesap Yaşı: <span class="font-bold">{{ calculateAccountAge(userInfo.registered.unixtime) }}</span></p>
    </div>

    <!-- Recent Tracks -->
    <div v-if="recentTracks && recentTracks.length" class="mb-8">
      <h3 class="text-xl font-medium mb-3">Son Dinlediklerim</h3>
      <ul class="space-y-3">
        <li v-for="track in recentTracks.slice(0, 5)" :key="track.mbid || track.name + track.artist.name" class="p-3 bg-gray-700 rounded flex items-center space-x-3">
          <img v-if="track.image && track.image[1]['#text']" :src="track.image[1]['#text']" alt="Albüm Kapağı" class="w-12 h-12 rounded">
          <div class="flex-grow">
            <p class="font-semibold">{{ track.name }}</p>
            <p class="text-sm text-gray-400">{{ track.artist['#text'] || track.artist.name }}</p>
          </div>
          <span v-if="track['@attr'] && track['@attr'].nowplaying" class="text-green-400 text-xs font-semibold">Şimdi Çalıyor</span>
        </li>
      </ul>
    </div>

    <!-- Top Tracks (Last 7 Days) -->
    <div v-if="topTracks && topTracks.length" class="mb-8">
      <h3 class="text-xl font-medium mb-3">En Çok Dinlenen Şarkılar (Son 7 Gün)</h3>
      <ol class="space-y-2 list-decimal list-inside">
        <li v-for="track in topTracks.slice(0, 10)" :key="track.mbid || track.name + track.artist.name" class="p-2 bg-gray-700 rounded">
          {{ track.name }} - <span class="text-gray-400">{{ track.artist.name }} ({{ track.playcount }} dinleme)</span>
        </li>
      </ol>
    </div>

    <!-- Top Artists (Last 7 Days) -->
    <div v-if="topArtists && topArtists.length">
      <h3 class="text-xl font-medium mb-3">En Çok Dinlenen Sanatçılar (Son 7 Gün)</h3>
      <ol class="space-y-2 list-decimal list-inside">
        <li v-for="artist in topArtists.slice(0, 10)" :key="artist.mbid || artist.name" class="p-2 bg-gray-700 rounded">
          {{ artist.name }} ({{ artist.playcount }} dinleme)
        </li>
      </ol>
    </div>

    <div v-if="error" class="mt-6 p-4 bg-red-700 text-white rounded">
      <p>Bir hata oluştu: {{ error.message || error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();
const apiKey = config.public.lastFmApiKey;
const username = config.public.lastFmUsername;

const userInfo = ref<any>(null);
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
    return null;
  }
}

function formatRegisteredDate(unixTimestamp: string): string {
  if (!unixTimestamp) return 'Bilinmiyor';
  const date = new Date(parseInt(unixTimestamp, 10) * 1000);
  return date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function calculateAccountAge(unixTimestamp: string): string {
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
  
  let ageString = '';
  if (years > 0) ageString += `${years} yıl `;
  if (months > 0) ageString += `${months} ay `;
  if (days > 0 && years === 0) ageString += `${days} gün`; // Only show days if less than a year old for brevity
  
  return ageString.trim() || 'Yeni hesap';
}

onMounted(async () => {
  if (!apiKey || !username) {
    error.value = 'Last.fm API anahtarı veya kullanıcı adı yapılandırılmamış.';
    console.error(error.value);
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
