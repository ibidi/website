<template>
  <div class="relative pt-32 pb-16 bg-white dark:bg-zinc-900 overflow-hidden">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Galeri
        </h1>
        <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Piksel geçiş efektleriyle oluşturulmuş görseller.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        <PixelTransition
          v-for="item in galleryItems"
          :key="item.id"
          :grid-size="item.gridSize || 10"
          :pixel-color="item.pixelColor || '#1f2937'" 
          :animation-step-duration="item.duration || 0.4"
          class-name="w-full h-auto shadow-lg"
          aspect-ratio="100%" 
        >
          <template #firstContent>
            <img 
              :src="item.firstImage"
              :alt="item.altText || 'Galeri öğesi'"
              class="w-full h-full object-cover"
            />
          </template>
          <template #secondContent>
            <div class="w-full h-full flex flex-col items-center justify-center p-4 bg-zinc-800 text-white">
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-sm text-center">{{ item.description }}</p>
            </div>
          </template>
        </PixelTransition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PixelTransition from '~/components/PixelTransition.vue';

interface GalleryItem {
  id: string;
  firstImage: string;
  title: string;
  description: string;
  altText?: string;
  gridSize?: number;
  pixelColor?: string;
  duration?: number;
}

const galleryItems = ref<GalleryItem[]>([
  {
    id: '1',
    firstImage: 'https://source.unsplash.com/random/400x400?nature,water',
    title: 'Doğa Harikası',
    description: 'Suyun ve yeşilin muhteşem uyumu.',
    altText: 'Doğa ve su manzarası',
    gridSize: 12,
    pixelColor: '#34d399', // Emerald
    duration: 0.3
  },
  {
    id: '2',
    firstImage: 'https://source.unsplash.com/random/400x400?city,night',
    title: 'Şehir Işıkları',
    description: 'Geceleyin parlayan metropol.',
    altText: 'Gece şehir manzarası',
    gridSize: 8,
    pixelColor: '#f59e0b', // Amber
    duration: 0.5
  },
  {
    id: '3',
    firstImage: 'https://source.unsplash.com/random/400x400?technology,abstract',
    title: 'Teknolojik Soyutlama',
    description: 'Modern sanat ve teknoloji bir arada.',
    altText: 'Teknolojik ve soyut görsel',
    gridSize: 15,
    pixelColor: '#60a5fa', // Blue
    duration: 0.25
  },
  {
    id: '4',
    firstImage: 'https://source.unsplash.com/random/400x400?food,colorful',
    title: 'Lezzet Şöleni',
    description: 'Rengarenk ve iştah açıcı yiyecekler.',
    altText: 'Renkli yiyecekler',
    gridSize: 10,
    pixelColor: '#f472b6', // Pink
    duration: 0.4
  },
]);

definePageMeta({
  title: 'Galeri'
});
</script>

<style scoped>
/* Galeri sayfasına özel ek stiller gerekirse buraya eklenebilir */
</style>
