<template>
  <div class="container mx-auto px-4 py-8">
    <Head>
      <Title>Müzik İstatistiklerim - Last.fm</Title>
      <Meta name="description" content="Last.fm üzerinden alınan kişisel müzik dinleme istatistiklerim." />
    </Head>
    <LastFmStats />
  </div>
</template>

<script setup lang="ts">
// LastFmStats komponenti components/ dizininde olduğu için Nuxt tarafından otomatik olarak import edilecektir.
// Eğer otomatik import çalışmazsa veya spesifik olmak isterseniz:
// import LastFmStats from '~/components/LastFmStats.vue';

// Sayfa başlığı ve meta etiketleri için Nuxt 3'ün Head composable'ını kullanıyoruz.
useHead({
  title: 'Müzik Köşem',
  meta: [
    { name: 'description', content: 'Last.fm üzerinden en son dinlediklerim, favori şarkılarım ve sanatçılarım.' }
  ]
});
</script>

<style scoped>
/* Sayfaya özel stiller buraya eklenebilir */
.container {
  max-width: 900px; /* İçeriğin çok geniş olmasını engellemek için */
}
</style>
