<template>
  <div v-if="isWinter" class="fixed inset-0 pointer-events-none">
    <div v-for="i in 50" :key="i" 
      class="absolute bg-white rounded-full pointer-events-none"
      :class="[
        i % 2 === 0 ? 'w-1 h-1 animate-snow-fast' : 'w-2 h-2 animate-snow-slow',
      ]"
      :style="{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        opacity: Math.random() * 0.3 + 0.2
      }"
    />
  </div>
</template>

<script setup lang="ts">
const isWinter = computed(() => {
  const now = new Date()
  const month = now.getMonth()
  return month === 11 || month === 0 || month === 1 // Aralık, Ocak, Şubat
})
</script> 