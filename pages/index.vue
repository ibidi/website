<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900">
    <div class="container mx-auto max-w-4xl">
      <div class="flex flex-col gap-20">
        <div class="space-y-6">
          <BlurText 
            text="Hi, I am İhsan Baki Doğan"
            tag="h1"
            class-name="text-3xl font-medium text-zinc-900 dark:text-zinc-200"
            :delay="100"
            animate-by="words"
            direction="top"
          />

          <div class="flex items-center gap-3">
            <span 
              class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-sm transition-all duration-300"
              :class="isOnline ? 
                'bg-gradient-to-r from-emerald-400/15 via-green-400/15 to-teal-400/15 dark:from-emerald-400/25 dark:via-green-400/25 dark:to-teal-400/25 border border-emerald-200/60 dark:border-emerald-700/60 text-emerald-700 dark:text-emerald-300 animate-gradient-online backdrop-blur-sm' : 
                'bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400'"
            >
              <span class="w-2 h-2 rounded-full transition-all duration-300" :class="isOnline ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30 animate-pulse' : 'bg-red-500'"></span>
              {{ isOnline ? 'Online' : 'Offline' }}
            </span>
            <span v-if="lastPlayedTrack" 
              class="inline-flex items-center px-2.5 py-1 rounded-md text-sm transition-all duration-300"
              :class="lastPlayedTrack.nowPlaying ? 
                'bg-gradient-to-r from-violet-500/15 via-pink-500/15 to-cyan-500/15 dark:from-violet-500/25 dark:via-pink-500/25 dark:to-cyan-500/25 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-700/60 backdrop-blur-sm animate-gradient-music' : 
                'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50'"
            >
              <span class="inline-flex items-center">
                <Icon name="simple-icons:lastdotfm" class="w-4 h-4 text-[#d51007]" />
              </span>
              <template v-if="lastPlayedTrack.url">
                <a :href="lastPlayedTrack.url" target="_blank" class="hover:text-violet-400 transition-colors duration-200 ml-2">
                  {{ lastPlayedTrack.name }} - {{ lastPlayedTrack.artist }}
                  <span v-if="lastPlayedTrack.nowPlaying" class="text-xs text-emerald-500">(şimdi çalıyor)</span>
                  <span v-else class="text-xs text-zinc-500">(son çalan)</span>
                </a>
              </template>
              <span v-else class="ml-2">
                {{ lastPlayedTrack.name }} - {{ lastPlayedTrack.artist }}
                <span v-if="lastPlayedTrack.nowPlaying" class="text-xs text-emerald-500">(şimdi çalıyor)</span>
                <span v-else class="text-xs text-zinc-500">(son çalan)</span>
              </span>
            </span>
            <span v-else-if="!fetchError && !lastPlayedTrack" class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-300">
                <Icon name="simple-icons:lastdotfm" class="w-4 h-4 text-[#d51007] opacity-60" />
                <span>Müzik aktivitesi yok</span>
            </span>
            <span v-else-if="fetchError" class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-red-500 dark:text-red-400 border border-zinc-200 dark:border-zinc-700/50">
                <Icon name="carbon:error" class="w-4 h-4" /> <!-- Changed to error icon -->
                <span>Veri alınamadı</span>
            </span>
          </div>

          <ShinyText 
            text="Full Stack Web Developer - in ❤️ with Node.js, TypeScript, React.js and Vue.js - 🇹🇷"
            tag="p"
            class-name="text-base text-zinc-600 dark:text-zinc-400"
            :speed="8"
          />

          <AnimatedContent
            :distance="50"
            direction="horizontal"
            :duration="0.8"
            :delay="0.2"
            ease="power2.out"
          >
            <div class="flex items-center gap-3">
            <a href="mailto:info@ihsanbakidogan.com" class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
              <Icon name="carbon:email" class="text-base" />
              Contact
            </a>

            <div class="flex items-center gap-2 relative social-glow-container">
              <a href="https://github.com/ibidi" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-github" class="text-xl" />
              </a>
              <a href="https://twitter.com/ibidicodes" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-twitter" class="text-xl" />
              </a>
              <a href="https://linkedin.com/in/ibidi" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-linkedin" class="text-xl" />
              </a>
              <a href="https://instagram.com/ihsanbakidogann" target="_blank" class="inline-flex items-center justify-center w-10 h-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <Icon name="carbon:logo-instagram" class="text-xl" />
              </a>
            </div>
          </div>
          </AnimatedContent>
        </div>

        <!-- Experience & Education -->
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Experience -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Experience</h2>
              <button 
                v-if="jobs.length > 3"
                @click="showAllJobs = !showAllJobs"
                class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <Icon :name="showAllJobs ? 'carbon:chevron-up' : 'carbon:chevron-down'" class="w-4 h-4" />
                {{ showAllJobs ? 'Show Less' : `Show All (${jobs.length})` }}
              </button>
            </div>
            <div class="space-y-4">
              <!-- First 3 jobs - Full display -->
              <div v-for="job in jobs.slice(0, 3)" :key="job.id" class="group">
                <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                        <img :src="job.image" :alt="job.company" class="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ job.company }}</h3>
                          <span v-if="job.isPresent" class="px-2 py-0.5 text-xs bg-violet-500/10 text-violet-500 rounded">PRESENT</span>
                        </div>
                        <p class="text-sm text-zinc-600 dark:text-zinc-400">{{ job.title }}</p>
                        <p class="text-sm text-zinc-500 dark:text-zinc-500">{{ job.date }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Remaining jobs - Compact display when expanded -->
              <Transition name="slide-fade">
                <div v-if="showAllJobs && jobs.length > 3" class="space-y-2">
                  <div v-for="job in jobs.slice(3)" :key="job.id" class="group">
                    <div class="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-md border border-zinc-200/50 dark:border-zinc-700/30 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
                      <div class="w-8 h-8 rounded-md bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <img :src="job.image" :alt="job.company" class="w-full h-full object-contain" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                          <h3 class="text-sm font-medium text-zinc-900 dark:text-zinc-200 truncate">{{ job.company }}</h3>
                          <span v-if="job.isPresent" class="px-1.5 py-0.5 text-xs bg-violet-500/10 text-violet-500 rounded flex-shrink-0">NOW</span>
                        </div>
                        <p class="text-xs text-zinc-600 dark:text-zinc-400 truncate">{{ job.title }}</p>
                      </div>
                      <div class="text-xs text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                        {{ job.date.split('-')[0] }}
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Education -->
          <div class="space-y-4">
            <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Education</h2>
            <div class="space-y-4">
              <div v-for="education in educations" :key="education.id" class="group">
                <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                        <img :src="education.image" :alt="education.school" class="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">{{ education.school }}</h3>
                        <p class="text-sm text-zinc-600 dark:text-zinc-400">{{ education.field }}</p>
                        <p class="text-sm text-zinc-500 dark:text-zinc-500">{{ education.date }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recently Listened Songs -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Recently Listened Songs</h2>
            <a 
              href="https://www.last.fm/user/ibidi" 
              target="_blank"
              class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Icon name="simple-icons:lastdotfm" class="w-4 h-4 text-[#d51007]" />
              Last.fm Profile
            </a>
          </div>
          
          <div v-if="recentTracks.length > 0" class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div 
              v-for="track in recentTracks.slice(0, 6)" 
              :key="`${track.name}-${track.artist}`"
              class="group"
            >
              <div class="flex items-center gap-3 p-3 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="w-10 h-10 rounded-md bg-zinc-200 dark:bg-zinc-700 flex-shrink-0 overflow-hidden">
                  <img 
                    v-if="track.albumArt" 
                    :src="track.albumArt" 
                    :alt="`${track.name} album art`"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center bg-zinc-300 dark:bg-zinc-600">
                  </div>
                </div>
                
                <div class="min-w-0 flex-1">
                  <h3 class="font-medium text-zinc-900 dark:text-zinc-100 truncate text-sm">
                    <template v-if="track.url">
                      <a :href="track.url" target="_blank" class="hover:text-violet-500 transition-colors">
                        {{ track.name }}
                      </a>
                    </template>
                    <span v-else>{{ track.name }}</span>
                  </h3>
                  <p class="text-xs text-zinc-600 dark:text-zinc-400 truncate">{{ track.artist }}</p>
                </div>
                
                <div class="flex-shrink-0">
                  <Icon name="simple-icons:lastdotfm" class="w-3 h-3 text-[#d51007]" />
                </div>
              </div>
            </div>
          </div>
          
          <div v-else-if="!fetchError" class="text-center py-8">
            <Icon name="simple-icons:lastdotfm" class="w-12 h-12 text-[#d51007] mx-auto mb-3" />
            <p class="text-zinc-600 dark:text-zinc-400">Henüz şarkı dinlememiş görünüyorsunuz</p>
          </div>
          
          <div v-else class="text-center py-8">
            <Icon name="carbon:error" class="w-12 h-12 text-red-500 mx-auto mb-3" />
            <p class="text-red-600 dark:text-red-400">{{ fetchError }}</p>
          </div>
        </div>


        <!-- Blog & Bookmarks Grid -->
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Blog Section -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Recent Blog Posts</h2>
              <NuxtLink 
                to="/blog" 
                class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <Icon name="carbon:blog" class="w-4 h-4" />
                View All
              </NuxtLink>
            </div>
            
            <div class="space-y-3">
              <article class="group cursor-pointer">
                <NuxtLink to="/blog/vue-3-composition-api" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        Vue 3 Composition API ile Modern Geliştirme
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                        Vue 3'ün getirdiği Composition API ile daha temiz ve sürdürülebilir kod yazma teknikleri...
                      </p>
                      <time class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        2 gün önce
                      </time>
                    </div>
                  </div>
                </NuxtLink>
              </article>

              <article class="group cursor-pointer">
                <NuxtLink to="/blog/typescript-best-practices" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        TypeScript Best Practices 2024
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                        TypeScript projelerinde kod kalitesini artıran en iyi uygulamalar ve ipuçları...
                      </p>
                      <time class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        1 hafta önce
                      </time>
                    </div>
                  </div>
                </NuxtLink>
              </article>

              <article class="group cursor-pointer">
                <NuxtLink to="/blog/nuxt-3-performance" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        Nuxt 3 Performance Optimizasyonu
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                        Nuxt 3 uygulamalarında performansı maksimuma çıkarmak için kullanabileceğiniz teknikler...
                      </p>
                      <time class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        2 hafta önce
                      </time>
                    </div>
                  </div>
                </NuxtLink>
              </article>
            </div>
          </div>

          <!-- Bookmarks Section -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Bookmarks</h2>
              <a 
                href="/bookmarks" 
                class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <Icon name="carbon:bookmark" class="w-4 h-4" />
                View All
              </a>
            </div>
            
            <div class="space-y-3">
              <article class="group cursor-pointer">
                <a href="https://vuejs.org/guide/introduction.html" target="_blank" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="logos:vue" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        Vue.js Official Documentation
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        The official Vue.js documentation and guide
                      </p>
                      <span class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        vuejs.org
                      </span>
                    </div>
                    <Icon name="carbon:launch" class="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  </div>
                </a>
              </article>

              <article class="group cursor-pointer">
                <a href="https://nuxt.com/docs" target="_blank" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-md bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="logos:nuxt-icon" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        Nuxt 3 Documentation
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        Build your next Vue.js application with confidence using Nuxt
                      </p>
                      <span class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        nuxt.com
                      </span>
                    </div>
                    <Icon name="carbon:launch" class="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  </div>
                </a>
              </article>

              <article class="group cursor-pointer">
                <a href="https://tailwindcss.com/docs" target="_blank" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-md bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="logos:tailwindcss-icon" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        Tailwind CSS Documentation
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        A utility-first CSS framework for rapidly building custom designs
                      </p>
                      <span class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        tailwindcss.com
                      </span>
                    </div>
                    <Icon name="carbon:launch" class="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  </div>
                </a>
              </article>

              <article class="group cursor-pointer">
                <a href="https://typescript-eslint.io/" target="_blank" class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-md bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon name="logos:typescript-icon" class="w-5 h-5" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-500 transition-colors">
                        TypeScript ESLint
                      </h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        Monorepo for all the tooling which enables ESLint to support TypeScript
                      </p>
                      <span class="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
                        typescript-eslint.io
                      </span>
                    </div>
                    <Icon name="carbon:launch" class="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>

        <!-- Technologies -->
        <div class="space-y-4">
          <h2 class="text-2xl font-medium text-zinc-900 dark:text-zinc-200">Technologies I Use</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <!-- Frontend -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:application-web" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Frontend</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">Vue.js, React.js, TypeScript, TailwindCSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Backend -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:data-base" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Backend</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">Node.js, PHP, MySQL, MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tools -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:tools" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Tools</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">VS Code, Git, Docker, Figma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cloud -->
            <div class="group">
              <div class="block p-4 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
                <div class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center">
                      <Icon name="carbon:cloud" class="text-base text-violet-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-900 dark:text-zinc-200">Cloud</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400">AWS, Netlify, Vercel, DigitalOcean</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import HomeBlogSection from '~/components/HomeBlogSection.vue';
import BlurText from '~/components/BlurText.vue';
import ShinyText from '~/components/ShinyText.vue';
import AnimatedContent from '~/components/AnimatedContent.vue';

const config = useRuntimeConfig();
const apiKey = config.public.lastFmApiKey;
const username = config.public.lastFmUsername;
const LASTFM_API_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

interface LastPlayedTrack {
  name: string;
  artist: string;
  url?: string;
  nowPlaying?: boolean;
  albumArt?: string;
}

interface RecentTrack {
  name: string;
  artist: string;
  album: string;
  url?: string;
  albumArt?: string;
  playedAt?: string;
}

const lastPlayedTrack = ref<LastPlayedTrack | null>(null);
const recentTracks = ref<RecentTrack[]>([]);
const fetchError = ref<string | null>(null);
const showAllJobs = ref(false);

const isOnline = computed(() => !!lastPlayedTrack.value?.nowPlaying);

// function formatDate(dateString?: string) {
//   if (!dateString) return '';
//   try {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffTime = Math.abs(now.getTime() - date.getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     
//     if (diffDays === 1) {
//       return 'Dün';
//     } else if (diffDays < 7) {
//       return `${diffDays} gün önce`;
//     } else {
//       return date.toLocaleDateString('tr-TR', {
//         day: 'numeric',
//         month: 'short'
//       });
//     }
//   } catch {
//     return dateString;
//   }
// }

async function fetchLastPlayedTrack() {
  if (!apiKey || !username) {
    fetchError.value = 'Last.fm API anahtarı veya kullanıcı adı yapılandırılmamış.';
    console.error(fetchError.value);
    return;
  }
  try {
    const params = new URLSearchParams({
      method: 'user.getrecenttracks',
      user: username,
      api_key: apiKey,
      format: 'json',
      limit: '1'
    }).toString();

    const response = await $fetch<any>(`${LASTFM_API_BASE_URL}?${params}`);

    if (response && response.recenttracks && response.recenttracks.track && response.recenttracks.track.length > 0) {
      const track = response.recenttracks.track[0];
      lastPlayedTrack.value = {
        name: track.name,
        artist: track.artist['#text'],
        url: track.url,
        nowPlaying: track['@attr']?.nowplaying === 'true',
        albumArt: track.image?.find((img: any) => img.size === 'medium')?.['#text']
      };
    } else {
      lastPlayedTrack.value = null; // No recent tracks or unexpected response
    }
  } catch (err: any) {
    console.error('Error fetching Last.fm recent track:', err);
    fetchError.value = `Last.fm verisi alınamadı: ${err.message}`;
    lastPlayedTrack.value = null;
  }
}

async function fetchRecentTracks() {
  if (!apiKey || !username) {
    return;
  }
  try {
    const params = new URLSearchParams({
      method: 'user.getrecenttracks',
      user: username,
      api_key: apiKey,
      format: 'json',
      limit: '8'
    }).toString();

    const response = await $fetch<any>(`${LASTFM_API_BASE_URL}?${params}`);

    if (response && response.recenttracks && response.recenttracks.track) {
      const tracks = Array.isArray(response.recenttracks.track) 
        ? response.recenttracks.track 
        : [response.recenttracks.track];
      
      recentTracks.value = tracks.map((track: any) => ({
        name: track.name,
        artist: track.artist['#text'],
        album: track.album['#text'] || '',
        url: track.url,
        albumArt: track.image?.find((img: any) => img.size === 'medium')?.['#text'],
        playedAt: track.date?.['#text'] || 'Şimdi çalıyor'
      }));
    }
  } catch (err: any) {
    console.error('Error fetching recent tracks:', err);
  }
}

let refreshInterval: NodeJS.Timeout | null = null;

onMounted(() => {
  fetchLastPlayedTrack();
  fetchRecentTracks();
  // Refresh every 30 seconds (30000 milliseconds)
  refreshInterval = setInterval(() => {
    fetchLastPlayedTrack();
    fetchRecentTracks();
  }, 30000);
});

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval);
  }
});

const animatedCodeBackground = ref<HTMLElement | null>(null);
const codeSnippets = [
  'const', 'let', 'var', 'function', '=>', 'async', 'await',
  'import', 'export', 'default', 'React', 'Vue', 'Angular',
  '<div>', '<span>', '<p>', '<h1>', 'useEffect', 'useState',
  'computed', 'watch', 'ref', 'props', 'class', 'interface',
  'type', 'enum', 'public', 'private', 'protected', 'static',
  'return', 'if', 'else', 'for', 'while', 'switch', 'case',
  'break', 'continue', 'try', 'catch', 'finally', 'throw',
  'new', 'this', 'super', 'extends', 'implements', 'package',
  'null', 'undefined', 'true', 'false', 'NaN', 'Infinity',
  'JSON.parse', 'JSON.stringify', 'console.log', 'fetch',
  'axios', 'Promise', '.then()', '.catch()', 'Array.map',
  'Array.filter', 'Array.reduce', '{...obj}', '[...arr]',
  'CSS', 'HTML', 'JS', 'TS', 'Python', 'Java', 'C#', 'C++',
  'Ruby', 'Go', 'Rust', 'SQL', 'NoSQL', 'API', 'REST', 'GraphQL',
  'Docker', 'K8s', 'AWS', 'Azure', 'GCP', 'git', 'npm', 'yarn',
  'webpack', 'babel', 'tailwind', 'bootstrap', '0x', '// TODO:',
  '/* comment */', 'Error', 'Exception', 'module.exports'
];

onMounted(() => {
  fetchLastPlayedTrack();
  refreshInterval = setInterval(fetchLastPlayedTrack, 30000);

  const backgroundContainer = document.getElementById('animated-code-background');
  if (backgroundContainer) {
    const numberOfSnippets = 70; // Adjust for density
    for (let i = 0; i < numberOfSnippets; i++) {
      const snippetElement = document.createElement('span');
      snippetElement.innerText = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      snippetElement.style.position = 'absolute';
      snippetElement.style.left = `${Math.random() * 100}%`;
      snippetElement.style.top = `${Math.random() * 100}%`; // Start at random positions
      snippetElement.style.fontSize = `${Math.random() * 10 + 8}px`; // e.g., 8px to 18px
      snippetElement.style.animationName = 'drift';
      snippetElement.style.animationDuration = `${Math.random() * 20 + 15}s`; // 15s to 35s
      snippetElement.style.animationDelay = `${Math.random() * 15}s`; // 0s to 15s delay
      snippetElement.style.animationIterationCount = 'infinite';
      snippetElement.style.animationTimingFunction = 'linear';
      snippetElement.style.opacity = '0'; // Animation will handle fade in
      backgroundContainer.appendChild(snippetElement);
    }
  }
});

// SEO
useSeo({
  title: 'İhsan Baki Doğan - Full Stack Developer',
  description: 'Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies. Check out my portfolio and blog.',
})

interface Job {
  id: number
  company: string
  title: string
  date: string
  image: string // Changed from icon to image
  isPresent?: boolean
}

interface Education {
  id: number
  school: string
  field: string
  date: string
  image: string // Added image property
}

const jobs: Job[] = [
{
    id: 1,
    company: 'Uğur Döküm',
    title: 'IT Specialist',
    date: '2025-Present',
    image: '/images/experience/ugurdokum.jpeg', // Placeholder image path
    isPresent: true
  },
  {
    id: 2,
    company: 'EduDekor Bilgi Teknolojileri',
    title: 'Full Stack Developer / Social Media Expert',
    date: '2022-Present',
    image: '/images/experience/edudekor.jpeg', // Placeholder image path
    isPresent: true
  },
  {
    id: 3,
    company: 'Hayati Kodla',
    title: 'Full Stack Developer / Operation Manager',
    date: '2024-Present',
    image: '/images/experience/hayatikodla.png', // Placeholder image path
    isPresent: true
  },
  {
    id: 4,
    company: 'Demirayak Yazılım',
    title: 'Full Stack Developer / Co-Founder',
    date: '2019-Present',
    image: '/images/experience/demirayak.png', // Placeholder image path
  },
  {
    id: 5,
    company: 'Aksis Güzellik Salonları',
    title: 'Full Stack Developer / Social Media Expert',
    date: '2023-2025',
    image: '/images/experience/aksis.jpeg' // Placeholder image path
  },
  {
    id: 6,
    company: 'ASEDE',
    title: 'Full Stack Developer',
    date: '2022-2025',
    image: '/images/experience/asede.PNG' // Placeholder image path
  },
  {
    id: 7,
    company: "Oguzkaan Koleji",
    title: "Information Technology Teacher / IT Specialist",
    date: '2022-2024',
    image: '/images/experience/oguzkaan.png' // Placeholder image path
  }
]

const educations: Education[] = [
  {
    id: 1,
    school: 'Istanbul Gelisim University',
    field: 'Computer Programming',
    date: '2019-2021',
    image: '/images/education/gelisim.png' // Placeholder image path
  },
  {
    id: 2,
    school: 'Anadolu University',
    field: 'Web Design and Development',
    date: '2023-2025',
    image: '/images/education/anadolu.png' // Placeholder image path
  },
  {
    id: 3,
    school: 'Istanbul University',
    field: 'Medical Documentation and Secretarial Services',
    date: '2022-2024',
    image: '/images/education/istanbul.png' // Placeholder image path
  }
]
</script>

<style lang="postcss">
@keyframes gradient-x {
  0% {
    background-size: 200% 100%;
    background-position: 0% 0%;
  }
  100% {
    background-size: 200% 100%;
    background-position: -200% 0%;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s linear infinite;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Hareketli gradient animasyonları */
@keyframes gradient-online {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-music {
  0%, 100% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 25% 75%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 75% 25%;
  }
}

.animate-gradient-online {
  background-size: 200% 200%;
  animation: gradient-online 3s ease-in-out infinite;
}

.animate-gradient-music {
  background-size: 300% 300%;
  animation: gradient-music 4s ease-in-out infinite;
}

/* Sosyal medya konteyner ışık efekti */
.social-glow-container {
  position: relative;
}

.social-glow-container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6);
  background-size: 400% 400%;
  border-radius: 12px;
  z-index: -1;
  animation: glow-border 6s ease-in-out infinite;
  opacity: 0.6;
  filter: blur(1px);
}

.social-glow-container::after {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, 
    #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6);
  background-size: 400% 400%;
  border-radius: 10px;
  z-index: -1;
  animation: glow-border 6s ease-in-out infinite reverse;
  opacity: 0.8;
}

@keyframes glow-border {
  0%, 100% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
}

/* Dark mode'da daha belirgin görünüm */
@media (prefers-color-scheme: dark) {
  .social-glow-container::before {
    opacity: 0.8;
    filter: blur(2px);
  }
  
  .social-glow-container::after {
    opacity: 1;
  }
}

#animated-code-background span {
  font-family: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  user-select: none;
  /* Base color will be set by dark/light mode specific styles */
}

.dark #animated-code-background span {
  color: rgba(200, 200, 220, 0.1); /* Light text on dark bg, 90% transparent -> 10% opacity */
}

html:not(.dark) #animated-code-background span {
  color: rgba(50, 50, 70, 0.1); /* Dark text on light bg, 90% transparent -> 10% opacity */
}

@keyframes drift {
  0% {
    transform: translateY(15vh) translateX(0vw) rotate(0deg);
    opacity: 0;
  }
  10%, 90% {
    /* Target opacity is 0.3 (70% transparent), but color already has low alpha. */
    /* Let's make it slightly more visible during animation if base alpha is low */
    opacity: 1; /* The color's alpha will dictate the actual visibility */
  }
  100% {
    transform: translateY(-100vh) translateX(calc(var(--random-drift-x, 0) * 1vw)) rotate(calc(var(--random-rotate, 0) * 1deg));
    opacity: 0;
  }
}

/* Add this if you want varied horizontal drift and rotation */
/* In the onMounted script, you would add: */
/* snippetElement.style.setProperty('--random-drift-x', (Math.random() * 20 - 10).toString()); */
/* snippetElement.style.setProperty('--random-rotate', (Math.random() * 60 - 30).toString()); */

::selection {
  @apply bg-violet-500/20 text-violet-200;
}

::-moz-selection {
  @apply bg-violet-500/20 text-violet-200;
}
</style>
