<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Daily Songs</h1>
          <p class="text-zinc-600 dark:text-zinc-400">Her gün dinlediğim şarkılar.</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="song in songs" :key="song.id" class="group">
            <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                    <Icon name="carbon:music" class="text-base text-violet-500" />
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ song.title }}</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">{{ song.artist }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeo({
  title: 'Daily Songs - İhsan Baki Doğan',
  description: 'Her gün dinlediğim şarkılar ve müzik listem.',
})

interface Song {
  id: number
  title: string
  artist: string
}

const songs: Song[] = [
  {
    id: 1,
    title: 'Yüzyüzeyken Konuşuruz',
    artist: 'Sandal'
  },
  {
    id: 2,
    title: 'Adamlar',
    artist: 'Koca Yaşlı Şişko Dünya'
  },
  {
    id: 3,
    title: 'Test Song #3',
    artist: 'Sandal'
  },
  {
    id: 4,
    title: 'Test Song #4',
    artist: 'Sandal'
  },
  {
    id: 5,
    title: 'Test Song #5',
    artist: 'Sandal'
  },
  {
    id: 6,
    title: 'Test Song #6',
    artist: 'Sandal'
  },
  {
    id: 7,
    title: 'Test Song #7',
    artist: 'Sandal'
  },
  {
    id: 8,
    title: 'Test Song #8',
    artist: 'Sandal'
  }
]

definePageMeta({
  title: 'Daily Songs'
})
</script> 