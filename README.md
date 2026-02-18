# ihsanbakidogan.com - v2 (Modern Era)

![Banner](https://img.shields.io/badge/Next.js-16+-black?style=for-the-badge&logo=next.js)
![Banner](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)
![Banner](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)

Kişisel portfolyo ve blog sitemin yepyeni, modern ve yüksek performanslı versiyonu. Bu proje, "v1" olarak adlandırılan eski Nuxt tabanlı sürümün üzerine inşa edilmiş, tam donanımlı bir **Next.js 16** uygulamasıdır.

## 🚀 Öne Çıkan Özellikler

- **Modern Stack:** Next.js 16 (App Router), TypeScript ve Tailwind CSS 4.0.
- **Dinamik Blog:** Markdown tabanlı, SEO uyumlu ve "Vibecoder" estetiğine sahip blog sistemi.
- **Müzik Kutusu:** Last.fm API entegrasyonu ile gerçek zamanlı "Şu an dinleniyor" ve haftalık favori sanatçılar.
- **GitHub & NPM:** API üzerinden çekilen canlı repo yıldız sayıları ve paket indirme istatistikleri.
- **Premium Tasarım:** Cam morfolojisi (glassmorphism), ipeksi (silk) arka plan animasyonları ve kusursuz mobil uyumluluk.

## 📁 Proje Yapısı

```bash
├── src/
│   ├── app/            # Next.js App Router (Sayfalar ve API rotaları)
│   ├── components/     # Yeniden kullanılabilir React bileşenleri
│   ├── content/        # Markdown (.md) blog yazıları
│   └── lib/            # Yardımcı fonksiyonlar ve servisler
├── public/             # Statik varlıklar (İkonlar, GIF'ler, resimler)
└── v1-legacy           # v1 sürümünün arşivlendiği dal (git checkout v1)
```

## 🛠 Kurulum

1. Depoyu klonlayın:
```bash
git clone https://github.com/ibidi/website.git
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env.local` dosyasını oluşturun ve gerekli anahtarları ekleyin:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
LASTFM_API_KEY=your_api_key_here
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 📜 Versiyon Geçmişi

- **v2 (Güncel):** Next.js 16 ile tamamen sıfırdan yazıldı. Modern UI/UX ve gelişmiş performans.
- **v1 (Legacy):** Nuxt.js ve Vue tabanlı eski sürüm. Gelişim sürecini görmek için `git checkout v1` komutu ile inceleyebilirsiniz.

## 📫 İletişim

- **Web:** [ihsanbakidogan.com](https://ihsanbakidogan.com)
- **LinkedIn:** [ibidi](https://linkedin.com/in/ibidi)
- **Instagram:** [ihsanbakidogann](https://instagram.com/ihsanbakidogann)
- **E-posta:** [ihsanbakidogann@gmail.com](mailto:ihsanbakidogann@gmail.com)

---
Made with ❤️ by [ihsanbakidogan](https://github.com/ibidi)
