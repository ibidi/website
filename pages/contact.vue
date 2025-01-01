<template>
  <div class="container mx-auto max-w-4xl px-4 py-16">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-zinc-100 mb-4">Contact</h1>
      <p class="text-lg text-zinc-400">If you have any questions, feel free to contact me.</p>
    </div>

    <!-- Contact Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Discord -->
      <a 
        href="https://discord.gg/your-invite-link" 
        target="_blank"
        class="group p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-zinc-100">Discord</h2>
          <Icon name="simple-icons:discord" class="text-2xl text-zinc-400 group-hover:text-[#5865F2]" />
        </div>
        <p class="text-zinc-400">Join my Discord server!</p>
      </a>

      <!-- Twitter -->
      <a 
        href="https://twitter.com/ibidicodes" 
        target="_blank"
        class="group p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-zinc-100">Twitter</h2>
          <Icon name="simple-icons:twitter" class="text-2xl text-zinc-400 group-hover:text-[#1DA1F2]" />
        </div>
        <p class="text-zinc-400">Follow me on Twitter!</p>
      </a>

      <!-- GitHub -->
      <a 
        href="https://github.com/ibidi" 
        target="_blank"
        class="group p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-zinc-100">Github</h2>
          <Icon name="simple-icons:github" class="text-2xl text-zinc-400 group-hover:text-white" />
        </div>
        <p class="text-zinc-400">Follow me on GitHub!</p>
      </a>

      <!-- LinkedIn -->
      <a 
        href="https://linkedin.com/in/ibidi" 
        target="_blank"
        class="group p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-zinc-100">LinkedIn</h2>
          <Icon name="simple-icons:linkedin" class="text-2xl text-zinc-400 group-hover:text-[#0A66C2]" />
        </div>
        <p class="text-zinc-400">Connect with me on LinkedIn!</p>
      </a>

      <!-- Trello -->
      <a 
        href="https://trello.com/your-board" 
        target="_blank"
        class="group p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-zinc-100">Trello</h2>
          <Icon name="simple-icons:trello" class="text-2xl text-zinc-400 group-hover:text-[#0052CC]" />
        </div>
        <p class="text-zinc-400">View my Trello board!</p>
      </a>

      <!-- Email -->
      <a 
        href="mailto:your-email@example.com" 
        class="group p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-zinc-100">Email</h2>
          <Icon name="carbon:email" class="text-2xl text-zinc-400 group-hover:text-zinc-100" />
        </div>
        <p class="text-zinc-400">Send me an email!</p>
      </a>
    </div>
  </div>
</template> 