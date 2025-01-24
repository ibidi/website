<template>
  <div class="min-h-screen bg-zinc-900 px-4 pt-32 md:pt-40 pb-12 md:pb-20">
    <div class="container mx-auto max-w-4xl">
      <div class="flex flex-col gap-20">
        <div class="space-y-6">
          <h1 class="text-3xl font-medium text-zinc-200">Projeler</h1>
          <p class="text-base text-zinc-400">
            Geliştirdiğim açık kaynak ve kişisel projeler.
          </p>
        </div>

        <div class="space-y-4">
          <div class="group">
            <a href="#" class="block p-4 bg-zinc-800/50 rounded-md border border-zinc-700/50 transition-all duration-200 hover:bg-zinc-800">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
                  <Icon name="carbon:code" class="text-base text-emerald-500" />
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-base font-medium text-zinc-200">Proje Adı</h3>
                    <span class="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-500 rounded">AÇIK KAYNAK</span>
                  </div>
                  <p class="text-sm text-zinc-400">Proje açıklaması</p>
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
// SEO
useSeo({
  title: 'Projeler - İhsan Baki Doğan',
  description: 'Geliştirdiğim açık kaynak ve kişisel projeler. Web uygulamaları, araçlar ve daha fazlası.',
})

interface FeaturedProject {
  id: number
  title: string
  description: string
  technologies: string[]
  icon: string
  demo?: string
  github: string
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: 'E-Ticaret Platformu',
    description: 'Modern ve ölçeklenebilir bir e-ticaret platformu. Nuxt.js, TypeScript ve TailwindCSS kullanılarak geliştirildi.',
    technologies: ['Nuxt.js', 'TypeScript', 'TailwindCSS', 'Stripe', 'PostgreSQL'],
    icon: 'carbon:shopping-cart',
    demo: 'https://demo-ecommerce.com',
    github: 'https://github.com/username/ecommerce'
  },
  {
    id: 2,
    title: 'Task Yönetim Uygulaması',
    description: 'Takımlar için geliştirilmiş, gerçek zamanlı task yönetim uygulaması.',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'PWA'],
    icon: 'carbon:task',
    demo: 'https://task-app.com',
    github: 'https://github.com/username/task-app'
  }
]
</script> 