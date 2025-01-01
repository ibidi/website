<template>
  <div class="px-4 pt-28 md:pt-32">
    <div class="container mx-auto max-w-4xl">
      <div class="flex flex-col gap-20">
        <div class="space-y-6">
          <h1 class="text-3xl font-medium text-zinc-900 dark:text-zinc-200">
            Hi, I am İhsan Baki Doğan
          </h1>

          <div class="flex items-center gap-3">
            <span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Online
            </span>
            <span class="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
              <Icon name="logos:spotify-icon" class="w-4 h-4" />
              <template v-if="currentTrack.song">
                <a :href="currentTrack.song.url" target="_blank" class="hover:text-violet-400 transition-colors duration-200">
                  {{ currentTrack.song.title }} - {{ currentTrack.song.artist }}
                  <span v-if="!currentTrack.isPlaying" class="text-xs text-zinc-500">(son çalan)</span>
                </a>
              </template>
              <span v-else>Listening to Nothing</span>
            </span>
          </div>

          <p class="text-base text-zinc-600 dark:text-zinc-400">
            Self taught full-stack developer from Turkey. Making projects with <span class="text-red-500">❤️</span>
          </p>

          <a href="mailto:info@ibidi.tr" class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 transition-all duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Icon name="carbon:email" class="text-base" />
            Contact
          </a>
        </div>

        <!-- Experience & Education -->
        <div class="grid gap-20 md:grid-cols-2">
          <!-- Experience -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-medium text-zinc-900 dark:text-zinc-200">Experience</h2>
            </div>

            <div class="space-y-4">
              <!-- Demirayak Yazılım -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-red-500/10 flex items-center justify-center">
                      <Icon name="carbon:globe" class="text-base text-red-500" />
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h3 class="text-base font-medium text-zinc-200">Demirayak Yazılım</h3>
                        <span class="px-2 py-0.5 text-xs bg-violet-500/10 text-violet-500 rounded">PRESENT</span>
                      </div>
                      <p class="text-sm text-zinc-400">Full Stack Developer</p>
                      <p class="text-xs text-zinc-500 mt-1">2019-Present</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Vien -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-blue-500/10 flex items-center justify-center">
                      <Icon name="carbon:code" class="text-base text-blue-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">Vien Bag</h3>
                      <p class="text-sm text-zinc-400">Web Developer</p>
                      <p class="text-xs text-zinc-500 mt-1">2024-2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- As Aksis -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-indigo-500/10 flex items-center justify-center">
                      <Icon name="carbon:logo-discord" class="text-base text-indigo-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">As Aksis Güzellik Merkezleri</h3>
                      <p class="text-sm text-zinc-400">Web Developer</p>
                      <p class="text-xs text-zinc-500 mt-1">2023-2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Not Bilgi Teknolojileri -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-green-500/10 flex items-center justify-center">
                      <Icon name="carbon:bot" class="text-base text-green-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">Not Bilgi Teknolojileri</h3>
                      <p class="text-sm text-zinc-400">Developer, Social Media Expert, IT</p>
                      <p class="text-xs text-zinc-500 mt-1">2023-2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ASEDE -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-purple-500/10 flex items-center justify-center">
                      <Icon name="carbon:list" class="text-base text-purple-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">ASEDE</h3>
                      <p class="text-sm text-zinc-400">Developer</p>
                      <p class="text-xs text-zinc-500 mt-1">2023-2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-medium text-zinc-200">Education</h2>
            </div>

            <div class="space-y-4">
              <!-- Istanbul Gelisim University -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
                      <Icon name="carbon:education" class="text-base text-emerald-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">Istanbul Gelisim University</h3>
                      <p class="text-sm text-zinc-400">Computer Programming</p>
                      <p class="text-xs text-zinc-500 mt-1">2019-2021</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Anadolu University -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-sky-500/10 flex items-center justify-center">
                      <Icon name="carbon:education" class="text-base text-sky-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">Anadolu University</h3>
                      <p class="text-sm text-zinc-400">Web Design and Development</p>
                      <p class="text-xs text-zinc-500 mt-1">2023-2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Istanbul Arel University -->
              <div class="group relative">
                <div class="block p-4 bg-zinc-900/50 hover:text-zinc-200 rounded-lg transition-colors duration-200 overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                  <div class="absolute inset-0 bg-zinc-800/50"></div>
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                  </div>
                  <div class="flex items-center gap-4 relative z-10">
                    <div class="w-10 h-10 rounded-md bg-orange-500/10 flex items-center justify-center">
                      <Icon name="carbon:education" class="text-base text-orange-500" />
                    </div>
                    <div>
                      <h3 class="text-base font-medium text-zinc-200">Istanbul Arel University</h3>
                      <p class="text-sm text-zinc-400">Software Engineering</p>
                      <p class="text-xs text-zinc-500 mt-1">2022-2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technologies -->
        <div class="space-y-8">
          <h2 class="text-xl font-medium text-zinc-900 dark:text-zinc-200">Technologies I Use</h2>

          <!-- Development -->
          <div class="space-y-8">
            <h2 class="text-xl text-zinc-200">DEVELOPMENT</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:typescript-icon" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">TypeScript</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:vue" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Vue.js</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:react" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">React.js</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:html-5" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">HTML5</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:tailwindcss-icon" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Tailwind CSS</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:nodejs-icon" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Node.js</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:sass" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Sass</span>
              </div>
            </div>
          </div>

          <!-- Apps -->
          <div class="space-y-8">
            <h2 class="text-xl text-zinc-200">APPS</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:visual-studio-code" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">VS Code</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="simple-icons:raycast" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Raycast</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:figma" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Figma</span>
              </div>
            </div>
          </div>

          <!-- Services -->
          <div class="space-y-8">
            <h2 class="text-xl text-zinc-200">SERVICES</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:github-icon" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">GitHub</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:firebase" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Firebase</span>
              </div>

              <div class="group relative flex items-center gap-3 bg-zinc-900/50 hover:text-zinc-200 rounded-lg p-4 transition-colors duration-200 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-violet-500/10"></div>
                <div class="absolute inset-0 bg-zinc-800/50"></div>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute inset-px bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:animate-gradient-x"></div>
                </div>
                <Icon name="logos:netlify" class="w-8 h-8 relative z-10" />
                <span class="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 relative z-10">Netlify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CurrentTrack {
  isPlaying: boolean
  song: {
    title: string
    artist: string
    albumArt: string
    url: string
  } | null
  lastPlayed?: {
    title: string
    artist: string
    albumArt: string
    url: string
  }
}

const currentTrack = ref<CurrentTrack>({
  isPlaying: false,
  song: null
})

let lastSongTitle = ref<string | null>(null)
let lastPlayedSong = ref<CurrentTrack['song']>(null)

const fetchCurrentTrack = async () => {
  try {
    const { data } = await useFetch('/api/spotify/now-playing')
    console.log('Spotify API yanıtı:', data.value)
    
    if (data.value) {
      const newTrack = data.value as CurrentTrack
      
      if (newTrack.isPlaying && newTrack.song) {
        // Aktif çalan şarkı varsa güncelle ve son çalanı kaydet
        currentTrack.value = newTrack
        lastSongTitle.value = newTrack.song.title
        lastPlayedSong.value = newTrack.song
        console.log('Şarkı güncellendi:', newTrack.song.title)
      } else if (lastPlayedSong.value) {
        // Aktif çalan yoksa ama son çalan varsa onu göster
        currentTrack.value = {
          isPlaying: false,
          song: lastPlayedSong.value
        }
        console.log('Son çalan şarkı gösteriliyor:', lastPlayedSong.value.title)
      }
    } else {
      console.log('API yanıtı boş geldi')
    }
  } catch (error) {
    console.error('Spotify API detaylı hata:', error)
    // Hata durumunda son çalan şarkıyı göster
    if (lastPlayedSong.value) {
      currentTrack.value = {
        isPlaying: false,
        song: lastPlayedSong.value
      }
    } else {
      currentTrack.value = {
        isPlaying: false,
        song: null
      }
    }
  }
}

// Sayfa yüklendiğinde ilk şarkı bilgisini al
onMounted(() => {
  fetchCurrentTrack()
  
  // Her 10 saniyede bir kontrol et (çok sık değil)
  setInterval(fetchCurrentTrack, 10000)
})

definePageMeta({
  title: 'Home'
})
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

::selection {
  @apply bg-violet-500/20 text-violet-200;
}

::-moz-selection {
  @apply bg-violet-500/20 text-violet-200;
}
</style> 