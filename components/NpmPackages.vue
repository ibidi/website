<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">NPM Packages</h2>
      <a 
        :href="`https://www.npmjs.com/~${username}`" 
        target="_blank"
        class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
      >
        <Icon name="simple-icons:npm" class="w-4 h-4 text-[#CB3837]" />
        NPM Profile
      </a>
    </div>

    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#CB3837]"></div>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <Icon name="carbon:error" class="w-12 h-12 text-red-500 mx-auto mb-3" />
      <p class="text-red-600 dark:text-red-400">{{ error }}</p>
    </div>

    <div v-else-if="packages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <a 
        v-for="pkg in packages" 
        :key="pkg.name"
        :href="`https://www.npmjs.com/package/${pkg.name}`" 
        target="_blank"
        class="group flex flex-col gap-3 p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-[#CB3837]/50"
      >
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <div class="w-8 h-8 rounded-md bg-[#CB3837]/10 flex items-center justify-center flex-shrink-0">
              <Icon name="simple-icons:npm" class="text-base text-[#CB3837]" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-medium text-zinc-900 dark:text-zinc-100 truncate text-sm group-hover:text-[#CB3837] transition-colors">
                {{ pkg.name }}
              </h3>
            </div>
          </div>
        </div>
        
        <p class="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 min-h-[2.5rem]">
          {{ pkg.description || 'No description available' }}
        </p>
        
        <div class="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 pt-2 border-t border-zinc-200 dark:border-zinc-700/50">
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1">
              <Icon name="carbon:download" class="w-3 h-3" />
              {{ formatDownloads(pkg.downloads) }}
            </span>
            <span class="flex items-center gap-1">
              <Icon name="carbon:tag" class="w-3 h-3" />
              {{ pkg.version }}
            </span>
          </div>
        </div>
      </a>
    </div>

    <div v-else class="text-center py-8">
      <Icon name="simple-icons:npm" class="w-12 h-12 text-[#CB3837] mx-auto mb-3 opacity-50" />
      <p class="text-zinc-600 dark:text-zinc-400">No packages published yet</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NpmPackage {
  name: string
  description: string
  version: string
  downloads: number
}

const props = defineProps<{
  username?: string
}>()

const username = props.username || 'ihsanbakidogan'
const loading = ref(true)
const error = ref<string | null>(null)
const packages = ref<NpmPackage[]>([])

const formatDownloads = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`
  }
  return count.toString()
}

const fetchPackages = async () => {
  loading.value = true
  error.value = null

  try {
    // NPM registry API'den kullanıcının paketlerini çek
    const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=maintainer:${username}&size=20`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch NPM packages')
    }

    const data = await response.json()
    
    // Her paket için download sayısını al
    const packagesWithDownloads = await Promise.all(
      data.objects.map(async (obj: any) => {
        const pkg = obj.package
        
        // Son 7 günün download sayısını al
        try {
          const downloadResponse = await fetch(
            `https://api.npmjs.org/downloads/point/last-week/${pkg.name}`
          )
          const downloadData = await downloadResponse.json()
          
          return {
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            downloads: downloadData.downloads || 0
          }
        } catch {
          return {
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            downloads: 0
          }
        }
      })
    )

    // Download sayısına göre sırala
    packages.value = packagesWithDownloads.sort((a, b) => b.downloads - a.downloads)

  } catch (err: any) {
    console.error('Error fetching NPM packages:', err)
    error.value = 'Unable to load NPM packages'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPackages()
})
</script>
