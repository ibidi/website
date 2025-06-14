import { c as useSeoMeta, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/Users/ibidi/Desktop/website/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/ibidi/Desktop/website/node_modules/unctx/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/ibidi/Desktop/website/node_modules/radix3/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/defu/dist/defu.mjs";
import "/Users/ibidi/Desktop/website/node_modules/ufo/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/klona/dist/index.mjs";
import "/Users/ibidi/Desktop/website/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/Users/ibidi/Desktop/website/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        id: 1,
        tag: "Social Platform",
        title: "Message Board",
        description: "ibidi katılımcıları için özel bir sosyal medya platformu. Next.js, Firebase ve Tailwind CSS ile geliştirildi.",
        longDescription: "<p>ibidi katılımcıları için geliştirilmiş, özel bir iletişim ve paylaşım platformudur. Bu platform, katılımcıların program boyunca ve sonrasında birbirleriyle etkileşimde kalmalarını, duyuruları takip etmelerini ve anılarını paylaşmalarını kolaylaştırmayı amaçlamıştır.</p><p><strong>Temel Özellikler:</strong></p><ul><li>Kullanıcı profilleri ve kişisel feed'ler</li><li>Grup tartışmaları ve mesajlaşma</li><li>Etkinlik takvimi ve duyurular</li><li>Fotoğraf ve video paylaşımı</li><li>Güvenli ve özel erişim</li></ul><p>Proje, modern web teknolojileri kullanılarak kısa bir sürede hayata geçirilmiş ve katılımcılardan olumlu geri dönüşler almıştır.</p>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "Video", url: "#", icon: "carbon:video-filled" }
          // { text: 'Live Demo', url: '#', icon: 'carbon:launch' }
        ],
        imageOnLeft: true,
        technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Vercel"]
      },
      {
        id: 2,
        tag: "Gelişim Üniversitesi Telegram Bot",
        title: "Gelişim Üniversitesi Telegram Bot",
        description: "Gelişim Üniversitesi öğrencileri ve personeli için geliştirilmiş Telegram bot.",
        longDescription: "<p>Gelişim Üniversitesi'nin öğrenci ve personeline yönelik olarak tasarlanan Telegram bot, üniversite yaşamını kolaylaştıran birçok özelliği bir araya getirmektedir. Kullanıcılar ders programlarına, sınav sonuçlarına, duyurulara ve daha birçok bilgiye kolayca erişebilirler.</p><p><strong>Öne Çıkan Modüller:</strong></p><ul><li>Ders Programı ve Takvimi</li><li>Not Görüntüleme</li><li>Akademik Takvim</li><li>Yemekhane Menüsü</li><li>Kampüs Haritası ve Navigasyon</li><li>Üniversite Haberleri ve Duyuruları</li><li>İletişim Rehberi</li></ul><p>Uygulama, hem iOS hem de Android platformları için native olarak geliştirilmiş olup, kullanıcı dostu arayüzü ve performansıyla dikkat çekmektedir.</p>",
        image: "/images/projects/igu_telegram_bot.png",
        // Placeholder - Update this path
        buttons: [
          { text: "App Store", url: "#", icon: "simple-icons:appleappstore" },
          { text: "Play Store", url: "#", icon: "simple-icons:googleplay" }
        ],
        imageOnLeft: false,
        technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
      },
      {
        id: 3,
        tag: "Kişisel / Web Geliştirme",
        title: "Kişisel Web Sitem",
        description: "Vue.js, Nuxt 3 ve Tailwind CSS kullanarak geliştirdiğim, en son projelerimi ve deneyimlerimi sergilediğim kişisel portfolyo sitem.",
        longDescription: "<p>Bu web sitesi, yazılım geliştirme becerilerimi, tamamladığım projeleri ve profesyonel deneyimlerimi sergilemek amacıyla oluşturulmuştur. Modern web teknolojilerinden Vue.js ve Nuxt 3 çatısı altında, Tailwind CSS ile stilize edilmiştir. Sitenin amacı, potansiyel işverenlere ve işbirlikçilerine yeteneklerim hakkında kapsamlı bir fikir vermek ve benimle kolayca iletişime geçmelerini sağlamaktır.</p><p><strong>Site Özellikleri:</strong></p><ul><li>Duyarlı (Responsive) tasarım</li><li>Karanlık/Aydınlık mod desteği</li><li>Proje detaylarını içeren portfolyo bölümü</li><li>Last.fm entegrasyonu ile müzik zevkimi yansıtma</li><li>Blog yazıları (planlanan)</li></ul>",
        image: "/images/projects/website.png",
        // Assuming this exists from previous context
        buttons: [
          { text: "GitHub", url: "https://github.com/ibidi/website", icon: "carbon:logo-github" }
        ],
        imageOnLeft: true,
        technologies: ["Vue.js", "Nuxt 3", "Tailwind CSS", "TypeScript"]
      },
      {
        id: 4,
        tag: "Automation / Bot",
        title: "Schengen Visa Bot",
        description: "Schengen vizesi randevu süreçlerini takip eden ve kullanıcıları bilgilendiren Telegram botu.",
        longDescription: "<p>Schengen vizesi başvuru süreçlerinde randevu bulma zorluğunu hafifletmek amacıyla geliştirilmiş bir Telegram botudur. Belirli aralıklarla konsoloslukların randevu sistemlerini kontrol eder ve boş yer bulunduğunda kullanıcıya bildirim gönderir.</p><p><strong>Temel Özellikler:</strong></p><ul><li>Otomatik randevu takibi</li><li>Telegram üzerinden anlık bildirimler</li><li>Kullanıcı dostu komut arayüzü</li><li>Birden fazla konsolosluk desteği (isteğe bağlı)</li></ul>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "GitHub", url: "https://github.com/ibidi/schengen-visa-bot", icon: "carbon:logo-github" }
        ],
        imageOnLeft: false,
        technologies: ["Python", "Telethon", "SQLite", "Telegram API"]
      },
      {
        id: 5,
        tag: "AI / Education",
        title: "Oğuzkaan AI",
        description: "Oğuzkaan Koleji için geliştirilmiş, yapay zeka destekli çeşitli eğitim araçları ve modülleri.",
        longDescription: "<p>Oğuzkaan Koleji öğrencileri ve öğretmenlerinin eğitim süreçlerini desteklemek amacıyla geliştirilmiş yapay zeka tabanlı bir projedir. Öğrenci performansını analiz etme, kişiselleştirilmiş öğrenme materyalleri önerme ve eğitim süreçlerini otomatize etme gibi çeşitli modüller içerir.</p><p><strong>Öne Çıkanlar:</strong></p><ul><li>Yapay zeka destekli soru bankası</li><li>Kişiselleştirilmiş çalışma planları</li><li>Performans analizi ve raporlama</li><li>OpenAI API entegrasyonu</li></ul>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "GitHub", url: "https://github.com/ibidi/oguzkaan-ai", icon: "carbon:logo-github" }
        ],
        imageOnLeft: true,
        technologies: ["Python", "TensorFlow", "Flask", "OpenAI API", "Pandas", "NumPy"]
      },
      {
        id: 6,
        tag: "Music / Web App",
        title: "Radio Quuzy",
        description: "Çeşitli müzik türlerinde kesintisiz yayın yapan online radyo platformu.",
        longDescription: "<p>Radio Quuzy, kullanıcıların farklı müzik türlerini keşfedebileceği ve 7/24 kesintisiz müzik dinleyebileceği bir online radyo platformudur. Kullanıcı dostu arayüzü ve geniş müzik arşivi ile keyifli bir dinleme deneyimi sunmayı hedefler.</p><p><strong>Özellikler:</strong></p><ul><li>Farklı türlerde radyo kanalları</li><li>Canlı ve kesintisiz yayın</li><li>Şarkı ve sanatçı bilgileri</li><li>Mobil uyumlu tasarım</li></ul>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "Live App", url: "https://radio.quuzy.com", icon: "carbon:launch" }
        ],
        imageOnLeft: false,
        technologies: ["HTML5 Audio", "JavaScript", "CSS", "Streaming Server (e.g., Icecast)"]
      },
      {
        id: 7,
        tag: "AI / Music Discovery",
        title: "Quuzy",
        description: "Yapay zeka tabanlı Quuzy, Spotify entegrasyonu sayesinde modunuza özel ruh analizi yaparak size otomatik şarkılar öneriyor.",
        longDescription: "<p>Geliştirdiğim yapay zeka tabanlı Quuzy, Spotify entegrasyonu sayesinde modunuza özel ruh analizi yaparak size otomatik şarkılar öneriyor. Proje, kullanıcıların müzik keşif deneyimini kişiselleştirmeyi ve ruh hallerine uygun yeni parçalar bulmalarını kolaylaştırmayı amaçlamaktadır.</p><p><strong>Anahtar Özellikler:</strong></p><ul><li>Spotify API ile derin entegrasyon</li><li>Doğal dil işleme ile ruh hali analizi</li><li>Makine öğrenmesi tabanlı kişiselleştirilmiş şarkı önerileri</li><li>Kullanıcı dostu ve etkileşimli arayüz</li><li>Geniş müzik veri tabanına erişim ve akıllı filtreleme</li></ul><p>Quuzy, müziğinizi sizinle birlikte hissetmesini sağlar.</p>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "Live App", url: "https://quuzy.com", icon: "carbon:launch" }
        ],
        imageOnLeft: true,
        technologies: ["Python", "FastAPI", "Spotify API", "NLP", "Machine Learning", "Vue.js", "Nuxt.js"]
      },
      {
        id: 8,
        tag: "Siber Güvenlik / Simülasyon",
        title: "Siber Güvenlik Simülasyonu",
        description: "Yeni başlayanlar için etkileşimli siber güvenlik deneyimi. Phishing, zayıf şifreler, güncel olmayan yazılımlar ve sosyal mühendislik senaryoları içerir.",
        longDescription: '<p>Bu simülasyon, siber güvenliğe ilgi duyan herkesin temel prensipleri uygulamalı olarak öğrenmesini hedefliyor. Kullanıcılar, bir IT güvenlik görevlisi rolüne girerek çeşitli gerçekçi senaryolarda doğru kararlar vermeye çalışır.</p><p><strong>Ele Alınan Senaryolar:</strong></p><ul><li>🔐 Phishing saldırılarını tespit etme</li><li>🔑 Zayıf şifrelerin etkisini anlama</li><li>⚠️ Güncellenmemiş yazılımlarla başa çıkma</li><li>🕵️‍♂️ Sosyal mühendislik tuzaklarını analiz etme</li></ul><p><strong>✨ Öne Çıkan Özellikler:</strong></p><ul><li>Kullanıcı adı ile giriş & skor tablosu</li><li>Her bölüm sonunda "Ne öğrendin?" bilgilendirme ekranı</li><li>Doğru kararlarla puan toplama, yanlışlarla risk puanı artışı</li><li>Simülasyon sonunda detaylı geri bildirim raporu</li></ul>',
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "Live App", url: "https://sibersimulasyon.netlify.app", icon: "carbon:launch" }
        ],
        imageOnLeft: false,
        technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Netlify"]
      },
      {
        id: 9,
        tag: "WooCommerce / E-ticaret Eklentisi",
        title: "WooCommerce Kargo Barkod Eklentisi",
        description: "WooCommerce için sipariş kargo barkod etiketlerini kolayca yazdırmayı sağlayan eklenti. Termal yazıcılarla uyumlu, çeşitli formatları destekler.",
        longDescription: "<p>WooCommerce ile e-ticaret yapanlar için geliştirilmiş, sipariş kargo barkod etiketlerini yazdırma sürecini kolaylaştıran bir eklentidir. Özellikle bazı yazıcılarda yaşanan ölçeklendirme sorunlarına çözüm sunar.</p><p><strong>✅ Temel Özellikler:</strong></p><ul><li>Siparişe özel otomatik barkod üretimi</li><li>Termal yazıcılarla tam uyum</li><li>Tek tıkla veya toplu barkod yazdırma</li><li>QR, Code128 gibi çeşitli barkod formatı desteği</li><li>Kargo etiketlerine kolayca entegre edilebilir yapı</li><li>WooCommerce ile sorunsuz ve tam entegre çalışma</li></ul><p>Bu eklenti, kargolama süreçlerini hızlandırmak ve operasyonel verimliliği artırmak isteyen işletmeler için idealdir.</p>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "Daha Fazla Bilgi", url: "https://hayatikodla.net/kargo-barkod-woocommerce/", icon: "carbon:link" }
        ],
        imageOnLeft: true,
        technologies: ["PHP", "WordPress", "WooCommerce", "JavaScript", "HTML", "CSS"]
      },
      {
        id: 10,
        tag: "E-ticaret / Entegrasyon / Açık Kaynak",
        title: "Shopify - Trendyol Entegrasyonu",
        description: "React ile geliştirilen, Shopify ve Trendyol arasında veri akışını otomatikleştiren açık kaynaklı entegrasyon projesi.",
        longDescription: "<p>E-ticaret süreçlerini kolaylaştırmak amacıyla React ile geliştirilmiş bir Shopify-Trendyol entegrasyonudur. Bu proje, yakın bir zamanda açık kaynak olarak paylaşılacaktır.</p><p><strong>✅ Projenin Sağladıkları:</strong></p><ul><li>Shopify mağazanız ile Trendyol arasındaki veri akışını otomatikleştirebilirsiniz.</li><li>Ürün senkronizasyonu ve sipariş yönetimini kolaylaştırabilirsiniz.</li><li>Açık kaynak olması sayesinde kendi ihtiyacınıza göre projeyi özelleştirebilirsiniz!</li></ul><p>E-ticaret entegrasyonlarını geliştirmek ve açık kaynak dünyasına katkıda bulunmak isteyenler için tasarlanmıştır.</p>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "GitHub", url: "https://github.com/ibidi/trendyol-shopify", icon: "carbon:logo-github" }
        ],
        imageOnLeft: false,
        technologies: ["React", "JavaScript", "Node.js", "Shopify API", "Trendyol API"]
      },
      {
        id: 11,
        tag: "Eğitim / Kaynak / Web Uygulaması",
        title: "Yazılım Sözlük",
        description: "Yazılım terimlerini, kavramlarını ve teknolojilerini anlaşılır bir şekilde sunan, kapsamlı ve erişilebilir bir sözlük platformu.",
        longDescription: "<p>Yazılım Sözlük, yazılım dünyasında sıkça karşılaşılan terimleri, kavramları ve teknolojilerini anlaşılır bir şekilde sunan bir platformdur. Herkesin kolayca bilgiye ulaşmasını sağlamak amacıyla tasarlanmıştır.</p><p><strong>💡 Amacı:</strong></p><ul><li>Özellikle yazılıma yeni başlayanlar için temel bir kaynak olmak.</li><li>Sektör profesyonelleri için hızlı ve güvenilir bir referans noktası sunmak.</li><li>Kapsamlı, erişilebilir ve sürekli güncellenen bir bilgi havuzu oluşturmak.</li></ul><p>Platform, kullanıcıların yazılım alanındaki bilgilerini artırmalarına ve kavramları daha iyi anlamalarına yardımcı olmayı hedefler.</p>",
        image: "/images/projects/ibidi.png",
        // Placeholder - Update this path
        buttons: [
          { text: "Sözlüğe Göz At", url: "https://yazilim-sozluk.vercel.app", icon: "carbon:launch" }
        ],
        imageOnLeft: true,
        technologies: ["Next.js", "React", "Vercel", "Tailwind CSS", "TypeScript"]
      }
      // Add more projects here following the same structure
    ];
    const isModalOpen = ref(false);
    const selectedProjectForModal = ref(null);
    useSeoMeta({
      title: "Projelerim - İhsan Baki Doğan",
      description: "İhsan Baki Doğan tarafından geliştirilen ve katkıda bulunulan projelerin bir listesi. Web, mobil ve diğer çeşitli alanlardaki çalışmalarım."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-32 pb-16 bg-zinc-900 text-zinc-200 min-h-screen" }, _attrs))}><div class="container mx-auto max-w-7xl px-4"><div class="space-y-8 mb-16"><h1 class="text-5xl font-bold text-center text-white">Projelerim</h1><p class="text-xl text-zinc-400 text-center">Geliştirdiğim ve katkıda bulunduğum bazı özel projeler.</p></div><div class="space-y-24"><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="${ssrRenderClass([{ "md:flex-row-reverse": !project.imageOnLeft }, "flex flex-col md:flex-row items-center gap-8 md:gap-12"])}"><div class="w-full md:w-1/2 flex-shrink-0"><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} class="rounded-lg shadow-2xl object-cover w-full h-auto max-h-[400px]"></div><div class="w-full md:w-1/2 space-y-4"><p class="text-sm font-medium text-violet-400">${ssrInterpolate(project.tag)}</p><h2 class="text-3xl md:text-4xl font-bold text-white">${ssrInterpolate(project.title)}</h2><p class="text-zinc-400 text-lg">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-3 pt-2"><!--[-->`);
        ssrRenderList(project.buttons, (button) => {
          _push(`<a${ssrRenderAttr("href", button.url)} target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-md text-sm font-medium transition-colors duration-200 border border-zinc-700">`);
          if (button.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: button.icon,
              class: "w-4 h-4"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(button.text)}</a>`);
        });
        _push(`<!--]--><button class="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-md text-sm font-medium transition-colors duration-200">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:popup",
          class: "w-4 h-4"
        }, null, _parent));
        _push(` Detaylar </button></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (isModalOpen.value && selectedProjectForModal.value) {
        _push(`<div class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out"><div class="bg-zinc-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-zinc-200 space-y-6 transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-appear"><div class="flex justify-between items-center"><h3 class="text-2xl font-bold text-white">${ssrInterpolate(selectedProjectForModal.value.title)}</h3><button class="text-zinc-400 hover:text-white transition-colors">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "carbon:close",
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</button></div><div><p class="text-sm font-medium text-violet-400 mb-1">${ssrInterpolate(selectedProjectForModal.value.tag)}</p><img${ssrRenderAttr("src", selectedProjectForModal.value.image)}${ssrRenderAttr("alt", selectedProjectForModal.value.title)} class="rounded-md shadow-lg object-cover w-full h-auto max-h-[300px] mb-4"><div class="prose prose-invert prose-sm md:prose-base max-w-none text-zinc-300">${selectedProjectForModal.value.longDescription ?? ""}</div></div>`);
        if (selectedProjectForModal.value.technologies && selectedProjectForModal.value.technologies.length > 0) {
          _push(`<div class="pt-2"><h4 class="text-md font-semibold text-white mb-2">Kullanılan Teknolojiler:</h4><div class="flex flex-wrap gap-2"><!--[-->`);
          ssrRenderList(selectedProjectForModal.value.technologies, (tech) => {
            _push(`<span class="bg-zinc-700 text-violet-300 py-1 px-3 rounded-full text-xs font-medium">${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex justify-end pt-4"><button class="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-md text-sm font-medium transition-colors"> Kapat </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-Bz8FR1p7.js.map
