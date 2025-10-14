<template>
  <div class="pt-32 pb-16 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 min-h-screen">
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
    tag: 'Gelişim Üniversitesi Telegram Bot',
    title: 'Gelişim Üniversitesi Telegram Bot',
    description: 'Gelişim Üniversitesi öğrencileri ve personeli için geliştirilmiş Telegram bot.',
    longDescription: '<p>Gelişim Üniversitesi\'nin öğrenci ve personeline yönelik olarak tasarlanan Telegram bot, üniversite yaşamını kolaylaştıran birçok özelliği bir araya getirmektedir. Kullanıcılar ders programlarına, sınav sonuçlarına, duyurulara ve daha birçok bilgiye kolayca erişebilirler.</p><p><strong>Öne Çıkan Modüller:</strong></p><ul><li>Ders Programı ve Takvimi</li><li>Not Görüntüleme</li><li>Akademik Takvim</li><li>Yemekhane Menüsü</li><li>Kampüs Haritası ve Navigasyon</li><li>Üniversite Haberleri ve Duyuruları</li><li>İletişim Rehberi</li></ul><p>Uygulama, hem iOS hem de Android platformları için native olarak geliştirilmiş olup, kullanıcı dostu arayüzü ve performansıyla dikkat çekmektedir.</p>',
    image: '/images/projects/igu_telegram_bott.png', // Placeholder - Update this path
    buttons: [
      { text: 'App Store', url: '#', icon: 'simple-icons:appleappstore' },
      { text: 'Play Store', url: '#', icon: 'simple-icons:googleplay' }
    ],
    imageOnLeft: false,
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    tag: 'Automation / Bot',
    title: 'Schengen Visa Bot',
    description: 'Schengen vizesi randevu süreçlerini takip eden ve kullanıcıları bilgilendiren Telegram botu.',
    longDescription: '<p>Schengen vizesi başvuru süreçlerinde randevu bulma zorluğunu hafifletmek amacıyla geliştirilmiş bir Telegram botudur. Belirli aralıklarla konsoloslukların randevu sistemlerini kontrol eder ve boş yer bulunduğunda kullanıcıya bildirim gönderir.</p><p><strong>Temel Özellikler:</strong></p><ul><li>Otomatik randevu takibi</li><li>Telegram üzerinden anlık bildirimler</li><li>Kullanıcı dostu komut arayüzü</li><li>Birden fazla konsolosluk desteği (isteğe bağlı)</li></ul>',
    image: '/images/projects/schengen-visa-bot.png', // Placeholder - Update this path
    buttons: [
      { text: 'GitHub', url: 'https://github.com/ibidi/schengen-visa-bot', icon: 'carbon:logo-github' }
    ],
    imageOnLeft: false,
    technologies: ['Python', 'Telethon', 'SQLite', 'Telegram API']
  },
  {
    id: 4,
    tag: 'AI / Education',
    title: 'Oğuzkaan AI',
    description: 'Oğuzkaan Koleji için geliştirilmiş, yapay zeka destekli çeşitli eğitim araçları ve modülleri.',
    longDescription: '<p>Oğuzkaan Koleji öğrencileri ve öğretmenlerinin eğitim süreçlerini desteklemek amacıyla geliştirilmiş yapay zeka tabanlı bir projedir. Öğrenci performansını analiz etme, kişiselleştirilmiş öğrenme materyalleri önerme ve eğitim süreçlerini otomatize etme gibi çeşitli modüller içerir.</p><p><strong>Öne Çıkanlar:</strong></p><ul><li>Yapay zeka destekli soru bankası</li><li>Kişiselleştirilmiş çalışma planları</li><li>Performans analizi ve raporlama</li><li>OpenAI API entegrasyonu</li></ul>',
    image: '/images/projects/oguzkaan-ai.png', // Placeholder - Update this path
    buttons: [
      { text: 'GitHub', url: 'https://github.com/ibidi/oguzkaan-ai', icon: 'carbon:logo-github' }
    ],
    imageOnLeft: true,
    technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI API', 'Pandas', 'NumPy']
  },
  {
    id: 5,
    tag: 'Siber Güvenlik / Simülasyon',
    title: 'Siber Güvenlik Simülasyonu',
    description: 'Yeni başlayanlar için etkileşimli siber güvenlik deneyimi. Phishing, zayıf şifreler, güncel olmayan yazılımlar ve sosyal mühendislik senaryoları içerir.',
    longDescription: '<p>Bu simülasyon, siber güvenliğe ilgi duyan herkesin temel prensipleri uygulamalı olarak öğrenmesini hedefliyor. Kullanıcılar, bir IT güvenlik görevlisi rolüne girerek çeşitli gerçekçi senaryolarda doğru kararlar vermeye çalışır.</p><p><strong>Ele Alınan Senaryolar:</strong></p><ul><li>🔐 Phishing saldırılarını tespit etme</li><li>🔑 Zayıf şifrelerin etkisini anlama</li><li>⚠️ Güncellenmemiş yazılımlarla başa çıkma</li><li>🕵️‍♂️ Sosyal mühendislik tuzaklarını analiz etme</li></ul><p><strong>✨ Öne Çıkan Özellikler:</strong></p><ul><li>Kullanıcı adı ile giriş & skor tablosu</li><li>Her bölüm sonunda "Ne öğrendin?" bilgilendirme ekranı</li><li>Doğru kararlarla puan toplama, yanlışlarla risk puanı artışı</li><li>Simülasyon sonunda detaylı geri bildirim raporu</li></ul>',
    image: '/images/projects/cyber-security-simulation.png', // Placeholder - Update this path
    buttons: [
      { text: 'Live App', url: 'https://sibersimulasyon.netlify.app', icon: 'carbon:launch' }
    ],
    imageOnLeft: false,
    technologies: ['JavaScript', 'HTML', 'CSS', 'Vue.js', 'Netlify']
  },
  {
    id: 6,
    tag: 'WooCommerce / E-ticaret Eklentisi',
    title: 'WooCommerce Kargo Barkod Eklentisi',
    description: 'WooCommerce için sipariş kargo barkod etiketlerini kolayca yazdırmayı sağlayan eklenti. Termal yazıcılarla uyumlu, çeşitli formatları destekler.',
    longDescription: '<p>WooCommerce ile e-ticaret yapanlar için geliştirilmiş, sipariş kargo barkod etiketlerini yazdırma sürecini kolaylaştıran bir eklentidir. Özellikle bazı yazıcılarda yaşanan ölçeklendirme sorunlarına çözüm sunar.</p><p><strong>✅ Temel Özellikler:</strong></p><ul><li>Siparişe özel otomatik barkod üretimi</li><li>Termal yazıcılarla tam uyum</li><li>Tek tıkla veya toplu barkod yazdırma</li><li>QR, Code128 gibi çeşitli barkod formatı desteği</li><li>Kargo etiketlerine kolayca entegre edilebilir yapı</li><li>WooCommerce ile sorunsuz ve tam entegre çalışma</li></ul><p>Bu eklenti, kargolama süreçlerini hızlandırmak ve operasyonel verimliliği artırmak isteyen işletmeler için idealdir.</p>',
    image: '/images/projects/woo.png', // Placeholder - Update this path
    buttons: [
      { text: 'Daha Fazla Bilgi', url: 'https://hayatikodla.net/kargo-barkod-woocommerce/', icon: 'carbon:link' }
    ],
    imageOnLeft: true,
    technologies: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript', 'HTML', 'CSS']
  },
  {
    id: 7,
    tag: 'Eğitim / Kaynak / Web Uygulaması',
    title: 'Yazılım Sözlük',
    description: 'Yazılım terimlerini, kavramlarını ve teknolojilerini anlaşılır bir şekilde sunan, kapsamlı ve erişilebilir bir sözlük platformu.',
    longDescription: '<p>Yazılım Sözlük, yazılım dünyasında sıkça karşılaşılan terimleri, kavramları ve teknolojilerini anlaşılır bir şekilde sunan bir platformdur. Herkesin kolayca bilgiye ulaşmasını sağlamak amacıyla tasarlanmıştır.</p><p><strong>💡 Amacı:</strong></p><ul><li>Özellikle yazılıma yeni başlayanlar için temel bir kaynak olmak.</li><li>Sektör profesyonelleri için hızlı ve güvenilir bir referans noktası sunmak.</li><li>Kapsamlı, erişilebilir ve sürekli güncellenen bir bilgi havuzu oluşturmak.</li></ul><p>Platform, kullanıcıların yazılım alanındaki bilgilerini artırmalarına ve kavramları daha iyi anlamalarına yardımcı olmayı hedefler.</p>',
    image: '/images/projects/yazilim.png', // Placeholder - Update this path
    buttons: [
      { text: 'Sözlüğe Göz At', url: 'https://yazilim-sozluk.vercel.app', icon: 'carbon:launch' }
    ],
    imageOnLeft: false,
    technologies: ['Next.js', 'React', 'Vercel', 'Tailwind CSS', 'TypeScript']
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