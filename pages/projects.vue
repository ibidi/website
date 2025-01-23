<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl">
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">Projects</h1>
          <p class="text-zinc-600 dark:text-zinc-400">Geliştirdiğim projeler.</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="project in projects" :key="project.id" class="group">
            <a :href="project.url" target="_blank" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                    <Icon :name="project.icon" class="text-base text-violet-500" />
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ project.title }}</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400">{{ project.description }}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  url: string
  icon: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'Kişisel web sitem',
    url: 'https://github.com/ibidi/website',
    icon: 'carbon:application-web'
  },
  {
    id: 2,
    title: 'Discord Bot',
    description: 'Discord için müzik botu',
    url: 'https://github.com/ibidi/discord-bot',
    icon: 'carbon:music'
  }
]

definePageMeta({
  title: 'Projects'
})
</script> 