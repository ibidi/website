<template>
  <div class="pt-32 pb-16 bg-zinc-900 text-zinc-200 min-h-screen">
    <div class="container mx-auto max-w-7xl px-4">
      <div class="space-y-8 mb-16">
        <h1 class="text-5xl font-bold text-center text-white">Projelerim</h1>
        <p class="text-xl text-zinc-400 text-center">Geliştirdiğim ve katkıda bulunduğum bazı özel projeler.</p>
      </div>

      <div class="space-y-24">
        <div v-for="project in projects" :key="project.id"
             class="flex flex-col md:flex-row items-center gap-8 md:gap-12"
             :class="{ 'md:flex-row-reverse': !project.imageOnLeft }">
          
          <!-- Image Section -->
          <div class="w-full md:w-1/2 flex-shrink-0">
            <img :src="project.image" :alt="project.title" class="rounded-lg shadow-2xl object-cover w-full h-auto max-h-[400px]" />
          </div>

          <!-- Text Content Section -->
          <div class="w-full md:w-1/2 space-y-4">
            <p class="text-sm font-medium text-violet-400">{{ project.tag }}</p>
            <h2 class="text-3xl md:text-4xl font-bold text-white">{{ project.title }}</h2>
            <p class="text-zinc-400 text-lg">{{ project.description }}</p>
            <div class="flex flex-wrap gap-3 pt-2">
              <a v-for="button in project.buttons" :key="button.text" :href="button.url" target="_blank"
                 class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-md text-sm font-medium transition-colors duration-200 border border-zinc-700">
                <Icon v-if="button.icon" :name="button.icon" class="w-4 h-4" />
                {{ button.text }}
              </a>
              <button @click="openModal(project)"
                      class="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-md text-sm font-medium transition-colors duration-200">
                <Icon name="carbon:popup" class="w-4 h-4" />
                Detaylar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <div v-if="isModalOpen && selectedProjectForModal" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out"
         @click.self="closeModal"> 
      <div class="bg-zinc-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-zinc-200 space-y-6 transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-appear">
        <div class="flex justify-between items-center">
          <h3 class="text-2xl font-bold text-white">{{ selectedProjectForModal.title }}</h3>
          <button @click="closeModal" class="text-zinc-400 hover:text-white transition-colors">
            <Icon name="carbon:close" class="w-6 h-6" />
          </button>
        </div>
        <div>
          <p class="text-sm font-medium text-violet-400 mb-1">{{ selectedProjectForModal.tag }}</p>
          <img :src="selectedProjectForModal.image" :alt="selectedProjectForModal.title" class="rounded-md shadow-lg object-cover w-full h-auto max-h-[300px] mb-4" />
          <div class="prose prose-invert prose-sm md:prose-base max-w-none text-zinc-300" v-html="selectedProjectForModal.longDescription"></div>
        </div>
        <div v-if="selectedProjectForModal.technologies && selectedProjectForModal.technologies.length > 0" class="pt-2">
          <h4 class="text-md font-semibold text-white mb-2">Kullanılan Teknolojiler:</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in selectedProjectForModal.technologies" :key="tech"
                  class="bg-zinc-700 text-violet-300 py-1 px-3 rounded-full text-xs font-medium">
              {{ tech }}
            </span>
          </div>
        </div>
        <div class="flex justify-end pt-4">
          <button @click="closeModal" class="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-md text-sm font-medium transition-colors">
            Kapat
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ProjectButton {
  text: string;
  url: string;
  icon?: string;
}

interface Project {
  id: number;
  tag: string;
  title: string;
  description: string;
  longDescription: string; // For the modal
  image: string;
  buttons: ProjectButton[];
  imageOnLeft: boolean;
  technologies?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    tag: 'Social Platform',
    title: 'Message Board',
    description: 'ibidi katılımcıları için özel bir sosyal medya platformu. Next.js, Firebase ve Tailwind CSS ile geliştirildi.',
    longDescription: '<p>ibidi katılımcıları için geliştirilmiş, özel bir iletişim ve paylaşım platformudur. Bu platform, katılımcıların program boyunca ve sonrasında birbirleriyle etkileşimde kalmalarını, duyuruları takip etmelerini ve anılarını paylaşmalarını kolaylaştırmayı amaçlamıştır.</p><p><strong>Temel Özellikler:</strong></p><ul><li>Kullanıcı profilleri ve kişisel feed\'ler</li><li>Grup tartışmaları ve mesajlaşma</li><li>Etkinlik takvimi ve duyurular</li><li>Fotoğraf ve video paylaşımı</li><li>Güvenli ve özel erişim</li></ul><p>Proje, modern web teknolojileri kullanılarak kısa bir sürede hayata geçirilmiş ve katılımcılardan olumlu geri dönüşler almıştır.</p>',
    image: '/images/projects/ibidi.png', // Placeholder - Update this path
    buttons: [
      { text: 'Video', url: '#', icon: 'carbon:video-filled' },
      // { text: 'Live Demo', url: '#', icon: 'carbon:launch' }
    ],
    imageOnLeft: true,
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Vercel']
  },
  {
    id: 2,
    tag: 'Gelişim Üniversitesi Telegram Bot',
    title: 'Gelişim Üniversitesi Telegram Bot',
    description: 'Gelişim Üniversitesi öğrencileri ve personeli için geliştirilmiş Telegram bot.',
    longDescription: '<p>Gelişim Üniversitesi\'nin öğrenci ve personeline yönelik olarak tasarlanan Telegram bot, üniversite yaşamını kolaylaştıran birçok özelliği bir araya getirmektedir. Kullanıcılar ders programlarına, sınav sonuçlarına, duyurulara ve daha birçok bilgiye kolayca erişebilirler.</p><p><strong>Öne Çıkan Modüller:</strong></p><ul><li>Ders Programı ve Takvimi</li><li>Not Görüntüleme</li><li>Akademik Takvim</li><li>Yemekhane Menüsü</li><li>Kampüs Haritası ve Navigasyon</li><li>Üniversite Haberleri ve Duyuruları</li><li>İletişim Rehberi</li></ul><p>Uygulama, hem iOS hem de Android platformları için native olarak geliştirilmiş olup, kullanıcı dostu arayüzü ve performansıyla dikkat çekmektedir.</p>',
    image: '/images/projects/igu_telegram_bot.png', // Placeholder - Update this path
    buttons: [
      { text: 'App Store', url: '#', icon: 'simple-icons:appleappstore' },
      { text: 'Play Store', url: '#', icon: 'simple-icons:googleplay' }
    ],
    imageOnLeft: false,
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
  },
  {
    id: 3,
    tag: 'Kişisel / Web Geliştirme',
    title: 'Kişisel Web Sitem',
    description: 'Vue.js, Nuxt 3 ve Tailwind CSS kullanarak geliştirdiğim, en son projelerimi ve deneyimlerimi sergilediğim kişisel portfolyo sitem.',
    longDescription: '<p>Bu web sitesi, yazılım geliştirme becerilerimi, tamamladığım projeleri ve profesyonel deneyimlerimi sergilemek amacıyla oluşturulmuştur. Modern web teknolojilerinden Vue.js ve Nuxt 3 çatısı altında, Tailwind CSS ile stilize edilmiştir. Sitenin amacı, potansiyel işverenlere ve işbirlikçilerine yeteneklerim hakkında kapsamlı bir fikir vermek ve benimle kolayca iletişime geçmelerini sağlamaktır.</p><p><strong>Site Özellikleri:</strong></p><ul><li>Duyarlı (Responsive) tasarım</li><li>Karanlık/Aydınlık mod desteği</li><li>Proje detaylarını içeren portfolyo bölümü</li><li>Last.fm entegrasyonu ile müzik zevkimi yansıtma</li><li>Blog yazıları (planlanan)</li></ul>',
    image: '/images/projects/website.png', // Assuming this exists from previous context
    buttons: [
      { text: 'GitHub', url: 'https://github.com/ibidi/website', icon: 'carbon:logo-github' }
    ],
    imageOnLeft: true,
    technologies: ['Vue.js', 'Nuxt 3', 'Tailwind CSS', 'TypeScript']
  }
  // Add more projects here following the same structure
];

const isModalOpen = ref(false);
const selectedProjectForModal = ref<Project | null>(null);

function openModal(project: Project) {
  selectedProjectForModal.value = project;
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  // Delay clearing to allow for fade-out animation if desired
  setTimeout(() => {
    selectedProjectForModal.value = null;
  }, 300); 
}

useSeoMeta({
  title: 'Projelerim - İhsan Baki Doğan',
  description: 'İhsan Baki Doğan tarafından geliştirilen ve katkıda bulunulan projelerin bir listesi. Web, mobil ve diğer çeşitli alanlardaki çalışmalarım.',
});

definePageMeta({
  // title: 'Projects' // Already handled by useSeoMeta
});
</script>

<style lang="postcss">
/* Basic modal animation */
@keyframes modal-appear-animation {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.animate-modal-appear {
  animation: modal-appear-animation 0.3s ease-out forwards;
}

/* Custom scrollbar for modal content if needed */
.prose {
  /* Tailwind's prose class handles typography well */
}
</style>