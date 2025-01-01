<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900 px-4 py-12 md:py-20">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-8">
        <div class="flex items-center gap-2">
          <NuxtLink 
            to="/"
            class="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
          >
            <Icon name="carbon:arrow-left" class="text-base" />
            Ana Sayfaya Dön
          </NuxtLink>
        </div>
        <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Sayfa Bulunamadı</h1>
        <p class="text-zinc-600 dark:text-zinc-400">Aradığınız sayfa bulunamadı.</p>
      </div>
    </div>
  </div>
</template> 