<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900 min-h-screen">
    <div class="container mx-auto max-w-4xl px-4">
      <div class="space-y-12">
        <div class="space-y-4">
          <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-100">Songs</h1>
          <p class="text-lg text-zinc-600 dark:text-zinc-400">My latest listening activity on Last.fm.</p>
        </div>
        <LastFmStats />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// LastFmStats komponenti components/ dizininde olduğu için Nuxt tarafından otomatik olarak import edilecektir.
// Eğer otomatik import çalışmazsa veya spesifik olmak isterseniz:
// import LastFmStats from '~/components/LastFmStats.vue';

// Sayfa başlığı ve meta etiketleri için Nuxt 3'ün Head composable'ını kullanıyoruz.
useHead({
  title: 'Songs | İhsan Baki Doğan',
  meta: [
    { name: 'description', content: 'My latest listening activity on Last.fm, including top tracks and artists.' }
  ]
});
</script>

<style scoped>
/* Sayfaya özel stiller buraya eklenebilir */
.container {
  max-width: 900px; /* İçeriğin çok geniş olmasını engellemek için */
}
</style>
