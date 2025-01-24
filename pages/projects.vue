<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-7xl px-4">
      <div class="space-y-12">
        <div class="space-y-4">
          <h1 class="text-4xl font-bold text-zinc-900 dark:text-zinc-200">Projelerim</h1>
          <p class="text-xl text-zinc-600 dark:text-zinc-400">Geliştirdiğim bazı özel projeler</p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 place-items-center">
          <div v-for="project in projects" :key="project.id" 
               class="group">
            <a :href="project.url" target="_blank" 
               class="block w-[500px] h-[400px] overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700/50 transition-all duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <div class="w-full h-[260px] bg-cover bg-center" :style="{ backgroundImage: `url(${project.image})` }"></div>
              <div class="p-5">
                <div class="flex items-start gap-3 mb-2">
                  <div class="w-8 h-8 shrink-0 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Icon :name="project.icon" class="text-lg text-violet-500" />
                  </div>
                  <div>
                    <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ project.title }}</h3>
                    <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">{{ project.description }}</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-1.5 mt-3">
                  <span v-for="tech in project.technologies" :key="tech" 
                    class="bg-violet-500/10 text-violet-600 dark:text-violet-400 py-0.5 px-2 rounded-md text-xs font-medium">
                    {{ tech }}
                  </span>
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
  image: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'Modern ve kişiselleştirilmiş web sitem. Vue.js ve Tailwind CSS kullanılarak geliştirildi.',
    url: 'https://github.com/ibidi/website',
    icon: 'carbon:application-web',
    image: '/images/projects/website.png',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    title: 'Discord Bot',
    description: 'Discord sunucuları için özelleştirilmiş bot uygulaması.',
    url: 'https://github.com/ibidi/discord-bot',
    icon: 'ri:discord-fill',
    image: '/images/projects/discord-bot.png',
    technologies: ['Node.js', 'Discord.js', 'MongoDB']
  }
]

definePageMeta({
  title: 'Projects'
})
</script>