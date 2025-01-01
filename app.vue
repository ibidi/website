<template>
  <div class="dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
html {
  @apply antialiased;
}

.dark {
  @apply bg-zinc-900;
}

.light {
  @apply bg-white;
}
</style>
