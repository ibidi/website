---
title: 'Anasayfama Taze Bir Soluk: Animasyonlu Arka Plan ve Blog Entegrasyonu!'
date: '2025-06-08'
description: 'Kişisel web sitemin anasayfasına eklediğim son yenilikleri keşfedin: dinamik bir kod animasyonu arka planı ve en son blog yazılarımı sergileyen bir bölüm.'
tags: ['web geliştirme', 'nuxt', 'vuejs', 'javascript', 'css', 'kişisel web sitesi', 'yeni özellikler', 'animasyon', 'blog']
---

Herkese merhaba!

Kişisel web sitemi sürekli olarak geliştirmek ve daha interaktif hale getirmek benim için her zaman bir keyif oldu. Bu doğrultuda, geçtiğimiz günlerde anasayfama iki heyecan verici yeni özellik ekledim: Yazılımla ilgili terimlerden oluşan **dinamik bir animasyonlu arka plan** ve en son yazdığım **blog yazılarını doğrudan anasayfada gösteren bir bölüm**.

Bu yazıda, bu iki özelliği nasıl hayata geçirdiğimi ve siteme neler kattığını sizlerle paylaşmak istiyorum.

## 1. Animasyonlu Kod Arka Planı: Sayfaya Hareket Katmak

Anasayfama biraz daha "yazılımcı ruhu" katmak ve görsel bir derinlik oluşturmak istedim. Aklıma gelen fikir, arka planda yazılımla ilgili anahtar kelimelerin ve sembollerin rastgele hareket ettiği, ince bir animasyon eklemekti.

**Nasıl Yaptık?**

Bu özelliği hayata geçirirken Vue.js ve Tailwind CSS'in gücünden faydalandık:

*   **HTML Yapısı:** Öncelikle anasayfa içeriğimin (`pages/index.vue`) en dış sarmalayıcısını `relative` konumlandırdık ve `overflow-hidden` ile taşmaları engelledik. Ardından, tüm ekranı kaplayacak (`fixed`, `w-full`, `h-full`) ve içeriğin arkasında duracak (`z-index: -1`) bir `div` (`#animated-code-background`) ekledik. Bu `div`'e `pointer-events-none` vererek kullanıcı etkileşimlerini engellememesini sağladık.
*   **CSS Stilleri ve Animasyon:**
    *   Arka plan `div`'i içindeki `span` elementleri (kod parçacıkları) için `monospace` bir font ailesi belirledik.
    *   Renkleri, açık ve koyu moda uyumlu olacak şekilde ve %10 görünürlük (yani %90 şeffaflık) sağlayacak `rgba` değerleri ile ayarladık. Bu, arka planın dikkat dağıtmadan, hoş bir detay olarak kalmasını sağladı.
    *   `@keyframes drift` adında bir CSS animasyonu tanımladık. Bu animasyon, kod parçacıklarının aşağıdan yukarıya doğru yavaşça süzülmesini ve bu sırada opaklıklarının değişerek yumuşak bir giriş-çıkış efekti yaratmasını sağlıyor.
*   **JavaScript ile Dinamik Oluşturma:**
    *   `<script setup>` içinde, yazılımla ilgili birçok terimden (`const`, `function`, `=>`, `<div>`, `API`, `SQL` vb.) oluşan bir `codeSnippets` dizisi tanımladık.
    *   Sayfa yüklendiğinde (`onMounted`), belirlediğimiz sayıda (örneğin 70 adet) `span` elementi dinamik olarak oluşturuluyor.
    *   Her bir `span` için:
        *   `codeSnippets` dizisinden rastgele bir terim seçiliyor.
        *   Rastgele bir başlangıç pozisyonu (`left`, `top`), font boyutu, animasyon süresi ve animasyon gecikmesi atanıyor. Bu sayede her bir parçacık farklı bir davranış sergileyerek daha doğal bir görünüm elde ediliyor.
        *   Oluşturulan bu `span`'ler `#animated-code-background` `div`'inin içine ekleniyor.

Sonuç olarak, anasayfada gezinirken arka planda usulca akan, yazılıma dair bir atmosfer oluştu!

## 2. En Son Blog Yazıları Artık Anasayfada!

Blogumda paylaştığım yazıları daha görünür kılmak ve ziyaretçilerimin en son içeriklerimden kolayca haberdar olmasını sağlamak amacıyla anasayfama "Latest Blog Posts" (En Son Blog Yazıları) bölümünü ekledim.

**Nasıl Yaptık?**

Bu entegrasyon için Nuxt Content modülünün nimetlerinden yararlandık:

*   **`HomeBlogSection.vue` Komponenti:** Öncelikle `components` klasörü altına bu yeni bölümü yönetecek bir Vue komponenti oluşturduk.
*   **İçerik Çekme (`queryContent`):** Bu komponent içinde, Nuxt Content'in sağladığı `queryContent('/blog')` fonksiyonunu kullanarak `/content/blog` dizinindeki Markdown dosyalarımı sorguladık.
    *   Yazıları tarihe göre tersten sıralayarak (`sort({ date: -1 })`) en yeni olanların başa gelmesini sağladık.
    *   Sadece en son 3 yazıyı almak için `limit(3)` kullandık.
*   **Gösterim:** Çektiğimiz her yazı için başlık, (varsa) açıklama, yayın tarihi ve "Devamını Oku" bağlantısını gösteren kartlar oluşturduk. Ayrıca, tüm blog yazılarına ulaşılabilecek bir "Tüm Yazıları Görüntüle" butonu da ekledik.
*   **Anasayfaya Entegrasyon:** Son olarak, oluşturduğumuz `HomeBlogSection.vue` komponentini `pages/index.vue` dosyamızın içine, "Teknolojiler" bölümünün hemen altına yerleştirdik.

Artık anasayfamı ziyaret edenler, en güncel yazılarıma hızlıca göz atabilecekler.

---

Bu yenilikler, web sitemi hem görsel olarak zenginleştirdi hem de kullanıcı deneyimini bir adım öteye taşıdı diye düşünüyorum. Siz ne düşünüyorsunuz? Geri bildirimlerinizi ve yorumlarınızı duymaktan mutluluk duyarım!

Okuduğunuz için teşekkürler!
