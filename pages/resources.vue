<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-start justify-center py-16 sm:py-20">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">Kaynaklar</h1>
      <p class="mt-3 text-base sm:text-lg text-zinc-400">Geliştirici yolculuğunuzda faydalı olabilecek özenle seçilmiş kaynaklar ve araçlar.</p>

      <!-- Arama ve Filtreleme -->
      <div class="w-full mt-8 sm:mt-10">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Kaynaklarda ara (örn: React, UI, Araçlar)..."
            class="w-full pl-10 pr-4 py-3 bg-zinc-800/60 border border-zinc-700/70 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/70 focus:border-violet-500/70 transition-colors duration-300"
          />
          <Icon
            name="heroicons:magnifying-glass-20-solid"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          />
        </div>

        <div class="mt-6 flex flex-wrap gap-2 sm:gap-3 items-center">
          <span class="text-sm font-medium text-zinc-400 mr-2">Filtrele:</span>
          <button
            v-for="level in difficultyLevels"
            :key="level"
            @click="toggleDifficulty(level)"
            :class="[
              'px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-200',
              selectedDifficulties.includes(level)
                ? 'bg-violet-500/80 text-white hover:bg-violet-500/100 shadow-md'
                : 'bg-zinc-700/60 text-zinc-300 hover:bg-zinc-600/80 hover:text-zinc-100'
            ]"
          >
            {{ level }}
          </button>
          <button
            v-if="selectedDifficulties.length > 0"
            @click="selectedDifficulties = []"
            class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md bg-red-500/20 text-red-400 hover:bg-red-500/40 hover:text-red-300 transition-all duration-200 flex items-center gap-1"
          >
            <Icon name="heroicons:x-mark-20-solid" class="h-4 w-4" />
            Temizle
          </button>
        </div>
      </div>

      <!-- Kaynak Listesi -->
      <div class="w-full mt-10 sm:mt-12">
        <div v-if="filteredResources.length === 0 && (searchQuery || selectedDifficulties.length > 0)" class="text-center py-10">
          <Icon name="heroicons:archive-box-x-mark" class="mx-auto h-12 w-12 text-zinc-500" />
          <h3 class="mt-2 text-lg font-medium text-zinc-300">Sonuç Bulunamadı</h3>
          <p class="mt-1 text-sm text-zinc-400">Arama kriterlerinize uygun kaynak bulunamadı. Filtreleri değiştirmeyi deneyin.</p>
        </div>

        <div v-else class="space-y-10 sm:space-y-12">
          <div v-for="category in filteredResources" :key="category.category" class="space-y-5 sm:space-y-6">
            <div class="flex items-center gap-3">
              <Icon :name="category.categoryIcon || 'heroicons:bookmark-square-20-solid'" :class="`text-xl sm:text-2xl ${category.categoryIconColor || 'text-violet-400'}`" />
              <h2 class="text-xl sm:text-2xl font-semibold text-zinc-100">{{ category.category }}</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <a 
                v-for="item in category.items" 
                :key="item.title" 
                :href="item.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="group flex flex-col justify-between p-4 sm:p-5 bg-zinc-800/50 border border-zinc-700/60 rounded-xl hover:border-violet-500/70 hover:shadow-xl hover:shadow-violet-700/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div>
                  <div class="flex items-start gap-3 sm:gap-4">
                    <div :class="`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-${item.iconColor}-500/10 flex items-center justify-center shrink-0 border border-${item.iconColor}-500/20`">
                      <Icon :name="item.icon" :class="`text-xl sm:text-2xl text-${item.iconColor}-400`" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-base sm:text-lg text-zinc-100 group-hover:text-${item.iconColor}-400 transition-colors duration-300">{{ item.title }}</h3>
                      <span :class="`mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-${getDifficultyColor(item.difficulty)}-500/20 text-${getDifficultyColor(item.difficulty)}-300`">
                        {{ item.difficulty }}
                      </span>
                    </div>
                  </div>
                  <p class="mt-3 text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
                <div class="mt-4 pt-3 border-t border-zinc-700/50">
                  <p class="text-xs text-zinc-500 mb-1.5">Etiketler:</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span 
                      v-for="tag in item.tags" 
                      :key="tag" 
                      class="px-2 py-0.5 text-xs bg-zinc-700/70 text-zinc-300 rounded-md group-hover:bg-zinc-600/90 transition-colors duration-200"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Kaynaklar | İbrahim SARP',
  meta: [
    { name: 'description', content: 'Geliştiriciler için faydalı kaynaklar, araçlar ve platformlar. Frontend, UI/UX, backend ve daha fazlası.' },
    { property: 'og:title', content: 'Kaynaklar | İbrahim SARP' },
    { property: 'og:description', content: 'Geliştiriciler için faydalı kaynaklar, araçlar ve platformlar.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://ibrahimsarp.dev/resources' }, // Sitenizin URL'sini buraya ekleyin
    // { property: 'og:image', content: 'https://ibrahimsarp.dev/og-image-resources.png' }, // Sayfaya özel bir OG görseli varsa
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Kaynaklar | İbrahim SARP' },
    { name: 'twitter:description', content: 'Geliştiriciler için faydalı kaynaklar, araçlar ve platformlar.' },
    // { name: 'twitter:image', content: 'https://ibrahimsarp.dev/twitter-image-resources.png' }, // Sayfaya özel bir Twitter görseli varsa
  ]
})

const searchQuery = ref('')
const selectedDifficulties = ref<string[]>([])
const difficultyLevels = ['Başlangıç', 'Orta', 'İleri']

interface Resource {
  title: string
  description: string
  icon: string
  iconColor: string
  url: string
  tags: string[]
  difficulty: 'Başlangıç' | 'Orta' | 'İleri' | 'Tümü'
}

interface Category {
  category: string
  categoryIcon?: string
  categoryIconColor?: string
  items: Resource[]
}

const resources: Category[] = [
  {
    category: 'Frontend Geliştirme',
    categoryIcon: 'heroicons:code-bracket-square-20-solid',
    categoryIconColor: 'text-sky-400',
    items: [
      {
        title: 'The Odin Project',
        description: 'Ücretsiz, kapsamlı ve proje odaklı tam yığın web geliştirme eğitimi. Özellikle başlangıç için harika.',
        icon: 'simple-icons:theodinproject',
        iconColor: 'violet',
        url: 'https://theodinproject.com',
        tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Full-Stack'],
        difficulty: 'Başlangıç'
      },
      {
        title: 'Frontend Masters',
        description: 'Uzman eğitmenlerden canlı ve kayıtlı, derinlemesine frontend ve full-stack mühendislik dersleri.',
        icon: 'simple-icons:frontendmasters',
        iconColor: 'emerald',
        url: 'https://frontendmasters.com',
        tags: ['JavaScript', 'React', 'Vue', 'Angular', 'Node.js', 'CSS', 'Performans'],
        difficulty: 'İleri'
      },
      {
        title: 'freeCodeCamp',
        description: 'Binlerce saatlik ücretsiz kodlama eğitimi, sertifikalar ve büyük bir topluluk.',
        icon: 'simple-icons:freecodecamp',
        iconColor: 'blue',
        url: 'https://www.freecodecamp.org',
        tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Veri Bilimi', 'Makine Öğrenimi'],
        difficulty: 'Başlangıç'
      },
      {
        title: 'Scrimba',
        description: 'Etkileşimli kodlama dersleri ile öğrenmeyi eğlenceli hale getiren bir platform. Tarayıcıda kod yazarak öğrenin.',
        icon: 'simple-icons:scrimba',
        iconColor: 'yellow',
        url: 'https://scrimba.com',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Python', 'UI/UX'],
        difficulty: 'Orta'
      },
      {
        title: 'MDN Web Docs',
        description: 'Mozilla tarafından geliştirilen, web teknolojileri için kapsamlı ve güvenilir bir referans kaynağı.',
        icon: 'simple-icons:mdnwebdocs',
        iconColor: 'zinc',
        url: 'https://developer.mozilla.org/',
        tags: ['HTML', 'CSS', 'JavaScript', 'Web API', 'Standartlar'],
        difficulty: 'Tümü'
      },
      {
        title: 'CSS-Tricks',
        description: 'CSS, HTML, JavaScript ve web tasarımı hakkında makaleler, ipuçları ve püf noktaları.',
        icon: 'simple-icons:css-tricks',
        iconColor: 'orange',
        url: 'https://css-tricks.com',
        tags: ['CSS', 'HTML', 'JavaScript', 'Tasarım'],
        difficulty: 'Orta'
      }
    ]
  },
  {
    category: 'UI/UX Tasarım',
    categoryIcon: 'heroicons:paint-brush-20-solid',
    categoryIconColor: 'text-pink-400',
    items: [
      {
        title: 'Refactoring UI',
        description: 'Geliştiriciler için pratik UI tasarım prensipleri ve teknikleri. Kitap ve video formatında.',
        icon: 'simple-icons:tailwindcss', // Refactoring UI icon'u yok, tailwind kullandım
        iconColor: 'teal',
        url: 'https://refactoringui.com',
        tags: ['UI', 'Tasarım', 'UX', 'Geliştirici'],
        difficulty: 'Orta'
      },
      {
        title: 'Figma Community',
        description: 'Figma kullanıcıları tarafından paylaşılan binlerce ücretsiz UI kiti, eklenti ve tasarım şablonu.',
        icon: 'simple-icons:figma',
        iconColor: 'rose',
        url: 'https://www.figma.com/community',
        tags: ['UI Kit', 'Şablon', 'Eklenti', 'Figma', 'Tasarım'],
        difficulty: 'Tümü'
      },
      {
        title: 'Dribbble',
        description: 'Tasarımcıların çalışmalarını sergilediği, ilham alabileceğiniz ve trendleri takip edebileceğiniz bir platform.',
        icon: 'simple-icons:dribbble',
        iconColor: 'pink',
        url: 'https://dribbble.com',
        tags: ['İlham', 'Tasarım', 'UI', 'UX', 'Portfolyo'],
        difficulty: 'Tümü'
      },
      {
        title: 'Laws of UX',
        description: 'Tasarımcıların daha iyi kullanıcı deneyimleri oluşturmasına yardımcı olan psikolojik prensipler.',
        icon: 'heroicons:scale-20-solid',
        iconColor: 'indigo',
        url: 'https://lawsofux.com',
        tags: ['UX', 'Psikoloji', 'Tasarım İlkeleri'],
        difficulty: 'Orta'
      }
    ]
  },
  {
    category: 'Backend & DevOps',
    categoryIcon: 'heroicons:server-stack-20-solid',
    categoryIconColor: 'text-lime-400',
    items: [
      {
        title: 'Roadmap.sh',
        description: 'Geliştiriciler için farklı roller ve teknolojiler üzerine adım adım yol haritaları.',
        icon: 'heroicons:map-20-solid',
        iconColor: 'purple',
        url: 'https://roadmap.sh',
        tags: ['Yol Haritası', 'Backend', 'DevOps', 'Frontend', 'Kariyer'],
        difficulty: 'Tümü'
      },
      {
        title: 'Docker Docs',
        description: 'Docker konteynerleştirme platformunun resmi dokümantasyonu.',
        icon: 'simple-icons:docker',
        iconColor: 'sky',
        url: 'https://docs.docker.com/',
        tags: ['Docker', 'Konteyner', 'DevOps'],
        difficulty: 'Orta'
      },
      {
        title: 'Kubernetes Docs',
        description: 'Kubernetes konteyner orkestrasyon sisteminin resmi dokümantasyonu.',
        icon: 'simple-icons:kubernetes',
        iconColor: 'blue',
        url: 'https://kubernetes.io/docs/',
        tags: ['Kubernetes', 'Konteyner', 'Orkestrasyon', 'DevOps'],
        difficulty: 'İleri'
      }
    ]
  },
  {
    category: 'Yazılım Araçları ve Platformlar',
    categoryIcon: 'heroicons:wrench-screwdriver-20-solid',
    categoryIconColor: 'text-amber-400',
    items: [
      {
        title: 'VS Code',
        description: 'Popüler, ücretsiz ve açık kaynaklı kod editörü. Geniş eklenti desteğiyle özelleştirilebilir.',
        icon: 'simple-icons:visualstudiocode',
        iconColor: 'blue',
        url: 'https://code.visualstudio.com',
        tags: ['Editör', 'IDE', 'Geliştirme Aracı'],
        difficulty: 'Tümü'
      },
      {
        title: 'GitHub',
        description: 'Kod barındırma, sürüm kontrolü ve işbirliği için lider platform.',
        icon: 'simple-icons:github',
        iconColor: 'zinc',
        url: 'https://github.com',
        tags: ['Git', 'Sürüm Kontrolü', 'İşbirliği', 'Açık Kaynak'],
        difficulty: 'Tümü'
      },
      {
        title: 'Postman',
        description: 'API geliştirme, test etme ve dokümantasyon için kapsamlı bir platform.',
        icon: 'simple-icons:postman',
        iconColor: 'orange',
        url: 'https://www.postman.com/',
        tags: ['API', 'Test', 'Geliştirme Aracı'],
        difficulty: 'Orta'
      },
      {
        title: 'Obsidian',
        description: 'Markdown tabanlı, bağlantılı düşünme ve bilgi yönetimi için güçlü bir not alma uygulaması.',
        icon: 'simple-icons:obsidian',
        iconColor: 'purple',
        url: 'https://obsidian.md',
        tags: ['Not Alma', 'Bilgi Yönetimi', 'Markdown', 'Verimlilik'],
        difficulty: 'Tümü'
      }
    ]
  }
]

const toggleDifficulty = (level: string) => {
  const index = selectedDifficulties.value.indexOf(level)
  if (index === -1) {
    selectedDifficulties.value.push(level)
  } else {
    selectedDifficulties.value.splice(index, 1)
  }
}

const getDifficultyColor = (difficulty: Resource['difficulty']) => {
  switch (difficulty) {
    case 'Başlangıç': return 'green'
    case 'Orta': return 'yellow'
    case 'İleri': return 'red'
    case 'Tümü': return 'blue'
    default: return 'gray'
  }
}

const filteredResources = computed(() => {
  let filtered = resources.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const searchMatch = searchQuery.value.toLowerCase() === '' ||
        item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
      
      const difficultyMatch = selectedDifficulties.value.length === 0 || 
        selectedDifficulties.value.includes(item.difficulty) || 
        (item.difficulty === 'Tümü' && selectedDifficulties.value.length > 0) // 'Tümü' her zaman eşleşir eğer bir filtre seçiliyse

      return searchMatch && difficultyMatch
    })
  })).filter(category => category.items.length > 0) // Sadece item'ı olan kategorileri göster

  return filtered
})

</script>

<style scoped>
/* Gerekirse özel stiller buraya eklenebilir */
</style>

        title: 'Figma Community',
        description: 'Ücretsiz UI kitleri ve tasarım şablonları.',
        icon: 'simple-icons:figma',
        iconColor: 'orange',
        url: 'https://www.figma.com/community',
        tags: ['UI', 'Design', 'Figma'],
        difficulty: 'Başlangıç Seviyesi'
      }
    ]
  },
  {
    category: 'Yazılım Araçları',
    items: [
      {
        title: 'VS Code',
        description: 'Önerdiğim VS Code eklentileri ve ayarları.',
        icon: 'simple-icons:visualstudiocode',
        iconColor: 'blue',
        url: 'https://code.visualstudio.com',
        tags: ['Editor', 'IDE', 'Tools'],
        difficulty: 'Başlangıç Seviyesi'
      },
      {
        title: 'GitHub Features',
        description: 'GitHub\'ın güçlü özelliklerini keşfedin.',
        icon: 'simple-icons:github',
        iconColor: 'emerald',
        url: 'https://github.com/features',
        tags: ['Git', 'GitHub', 'Version Control'],
        difficulty: 'Orta Seviye'
      }
    ]
  }
]

const toggleDifficulty = (level: string) => {
  const index = selectedDifficulties.value.indexOf(level)
  if (index === -1) {
    selectedDifficulties.value.push(level)
  } else {
    selectedDifficulties.value.splice(index, 1)
  }
}

const filteredResources = computed(() => {
  return resources
    .map(category => {
      const filteredItems = category.items.filter(item => {
        const matchesSearch = 
          searchQuery.value === '' ||
          item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))

        const matchesDifficulty = 
          selectedDifficulties.value.length === 0 ||
          selectedDifficulties.value.includes(item.difficulty)

        return matchesSearch && matchesDifficulty
      })

      return {
        ...category,
        items: filteredItems
      }
    })
    .filter(category => category.items.length > 0)
})

definePageMeta({
  title: 'Kaynaklar'
})
</script>
