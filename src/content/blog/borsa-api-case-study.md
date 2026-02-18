---
title: "Borsa-API: BIST Verilerine Programatik Erişim (Teknik İnceleme)"
date: "2026-02-18"
description: "Türk borsa verilerine (BIST) erişimi kolaylaştıran modern bir API wrapper süreci. Node.js ve TypeScript ile nasıl güvenli bir borsa botu altyapısı kurulur?"
category: "Proje Analizi"
---

Bir yazılımcı olarak finansal verilerle uğraşmak her zaman heyecan vericidir. Ancak Borsa İstanbul (BIST) verilerine erişmek, özellikle bireysel geliştiriciler ve eğitim meraklıları için bazen zorlayıcı olabiliyor. İşte bu sorunu çözmek için geliştirdiğim **Borsa-API** projesinin teknik detayları ve arkasındaki strateji.

## Projenin Amacı ve Ortaya Çıkışı

Piyasada bulunan birçok finansal araç ya çok pahalı ya da modern yazılım dilleriyle (Node.js, Python vb.) entegrasyonu zordu. **Borsa-API**, bu boşluğu doldurmak için şu temel prensipler üzerine kuruldu:
1.  **Hız:** Verilere en düşük gecikmeyle (latency) erişim.
2.  **Kolaylık:** Tek bir `npm install borsa-api` komutuyla projeye dahil edebilme.
3.  **Modern Altyapı:** Tamamen TypeScript ile yazılmış, tip güvenli bir yapı.

## Teknik Stack ve Mimari

Proje, modern bir Full Stack geliştiricinin ihtiyaç duyacağı tüm araçları barındırıyor:
*   **TypeScript:** Veri modellerinin doğruluğunu sağlamak için.
*   **Axios & Cheerio:** Veri çekme ve parse işlemleri için.
*   **CLI Desteği:** Terminal üzerinden anlık fiyat takibi yapabilme özelliği.

## SEO Stratejisi: Neden Bu Proje Önemli?

Suparank prensiplerine göre, bir projeyi paylaşırken sadece "kod yazdım" demek yetmez. Bu projenin çözdüğü sorunu (BIST veri erişimi) ve sağladığı katma değeri vurgulamak gerekir. Bu yazı, arama motorlarında "Borsa API", "BIST veri çekme Node.js" gibi aramalarda sitenizin üst sıralara çıkmasını sağlar.

## Gelecek Planları

İlerleyen versiyonlarda, projeye **WebSocket** desteği ekleyerek gerçek zamanlı veri akışını daha da optimize etmeyi planlıyorum. Ayrıca yapay zeka entegrasyonu ile basit fiyat tahmini modelleri de gündemimizde.

*Eğer siz de finansal teknolojilerle ilgileniyorsanız, projeye GitHub üzerinden katkıda bulunabilir veya fikirlerinizi yorumlarda paylaşabilirsiniz!*
