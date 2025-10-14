---
title: 'Web Siteme Yeni Güncellemeler: Dinamik İçerik ve Animasyonlar!'
date: '2025-10-14'
description: 'Kişisel web siteme eklediğim son güncellemeleri keşfedin: dinamik blog ve bookmark entegrasyonu, animasyonlu experience/education bölümleri ve daha fazlası.'
tags: ['web geliştirme', 'nuxt', 'vuejs', 'typescript', 'animasyon', 'ux', 'güncellemeler']
readTime: 7
image: '/images/updates-2025.gif'
coverImage: '/images/updates-2025.gif'
---

Merhaba! 👋

Web sitemi sürekli geliştirmek ve kullanıcı deneyimini iyileştirmek benim için bir tutku haline geldi. Bugün sizlerle, sitemin ana sayfasına eklediğim yeni güncellemeleri paylaşmak istiyorum. Bu güncellemeler hem görsel açıdan hem de işlevsellik açısından önemli iyileştirmeler getiriyor.

## 🎯 Neler Değişti?

### 1. Dinamik Blog Entegrasyonu

Daha önce ana sayfadaki "Recent Blog Posts" bölümünde hardcode edilmiş örnek yazılar vardı. Bu, blog sayfasındaki gerçek yazılarla tutarsızlık yaratıyordu. Artık:

- ✅ Blog yazıları **dinamik olarak** `content/blog` klasöründen çekiliyor
- ✅ En son 3 yazı otomatik olarak gösteriliyor
- ✅ Tarih formatlaması eklendi ("2 gün önce", "1 hafta önce" gibi)
- ✅ "View All" butonuna tıklandığında tutarlı içerik görüntüleniyor

**Teknik Detaylar:**

```typescript
// Blog verilerini çek (setup içinde çağrılmalı)
const { data: blogPostsData } = await useAsyncData('blog-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
);
```

Nuxt Content'in `useAsyncData` ve `queryContent` fonksiyonlarını kullanarak, blog yazılarını server-side'da çekiyoruz. Bu sayede SEO dostu ve performanslı bir çözüm elde ediyoruz.

### 2. Bookmarks Bölümü Güncellendi

Ana sayfadaki bookmarks bölümü de aynı sorunu yaşıyordu. Şimdi:

- ✅ Bookmarks sayfasındaki verilerle **tam tutarlılık**
- ✅ En son eklenen 3 bookmark gösteriliyor
- ✅ URL'den otomatik domain çıkarma
- ✅ Daha fazla bookmark eklendi (TypeScript Handbook, Node.js Docs vb.)

**Yardımcı Fonksiyonlar:**

```typescript
const getDomainFromUrl = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};
```

### 3. Animasyonlu Experience & Education Bölümleri 🎨

En heyecan verici güncelleme! Experience ve Education kartlarına **GSAP tabanlı animasyonlar** ekledik:

- ✨ Kartlar **soldan sağa** kayarak giriş yapıyor
- ✨ Her kart **sırayla** belirir (stagger effect)
- ✨ Yumuşak ve profesyonel animasyonlar
- ✨ `AnimatedContent` komponenti ile kolay yönetim

**Nasıl Çalışıyor?**

```vue
<AnimatedContent
  :distance="50"
  direction="horizontal"
  :duration="0.8"
  :delay="0.3"
  ease="power2.out"
>
  <!-- Experience kartları -->
</AnimatedContent>
```

Her bir iş deneyimi kartı için:

```vue
<AnimatedContent
  v-for="(job, index) in jobs.slice(0, 3)" 
  :key="job.id"
  :distance="30"
  direction="vertical"
  :duration="0.6"
  :delay="0.4 + (index * 0.1)"
  ease="power2.out"
>
  <!-- Kart içeriği -->
</AnimatedContent>
```

Bu sayede her kart 0.1 saniye arayla belirir ve kullanıcıya hoş bir görsel deneyim sunar.

### 4. Geliştirilmiş .gitignore Dosyası 🔒

Projenin güvenliği ve temizliği için `.gitignore` dosyasını güncelledik:

```gitignore
# Nuxt build output
.output
.nuxt
.nitro
.cache

# Environment variables
.env
.env.*
!.env.example

# OS files
.DS_Store
Thumbs.db
```

Artık:
- ✅ Environment dosyaları git'e yüklenmiyor
- ✅ Build dosyaları ignore ediliyor
- ✅ OS-specific dosyalar temizlendi
- ✅ Deployment klasörleri (.vercel, .netlify) ignore ediliyor

## 🚀 Performans İyileştirmeleri

Bu güncellemelerle birlikte:

1. **Server-Side Rendering**: Blog yazıları server-side'da çekiliyor
2. **Lazy Loading**: Animasyonlar sadece gerektiğinde yükleniyor
3. **Optimized Queries**: Sadece gerekli veriler çekiliyor (limit: 3)
4. **Cached Data**: `useAsyncData` ile veri cache'leniyor

## 💡 Kullanıcı Deneyimi İyileştirmeleri

- **Tutarlılık**: Ana sayfa ve alt sayfalar arasında tam tutarlılık
- **Görsel Geri Bildirim**: Animasyonlar sayesinde daha canlı bir deneyim
- **Responsive Design**: Tüm güncellemeler mobil uyumlu
- **Accessibility**: Animasyonlar `prefers-reduced-motion` ile uyumlu

## 🎓 Öğrendiklerim

Bu güncellemeleri yaparken:

1. **Nuxt Content**: `useAsyncData` ve `queryContent` kullanımı
2. **GSAP Animasyonlar**: Stagger effects ve timing kontrolü
3. **TypeScript**: Interface'ler ve type safety
4. **Vue 3 Composition API**: Reactive data ve lifecycle hooks

## 📝 Sonuç

Bu güncellemeler, web sitemi daha profesyonel, dinamik ve kullanıcı dostu hale getirdi. Özellikle animasyonların eklenmesi, siteye modern bir hava kattı.

Siz de kendi projelerinizde benzer güncellemeleri deneyebilirsiniz. Nuxt 3 ve Vue 3'ün sunduğu imkanlar gerçekten harika!

### Gelecek Planlar 🔮

- 🎯 Blog yazılarına kategori filtreleme
- 🎯 Dark mode toggle animasyonu
- 🎯 Bookmark'lara tag sistemi
- 🎯 Daha fazla micro-interactions

Geri bildirimlerinizi ve önerilerinizi duymaktan mutluluk duyarım! 

Okuduğunuz için teşekkürler! 🙏

---

**Kullanılan Teknolojiler:**
- Nuxt 3
- Vue 3 Composition API
- TypeScript
- Nuxt Content
- GSAP (GreenSock Animation Platform)
- Tailwind CSS
