---
title: "TypeScript ve Node.js ile Kendi Verilerinizi AI'ya Tanıtın (RAG Rehberi)"
date: "2026-02-18"
description: "RAG (Retrieval-Augmented Generation) nedir? TypeScript ve Node.js kullanarak kendi veritabanınızı veya belgelerinizi yapay zekaya nasıl entegre edebileceğinizi adım adım öğrenin."
category: "Teknik"
---

Standart AI modelleri (ChatGPT gibi) internetteki genel bilgilerle sınırlıdır. Ancak şirketinizin özel belgelerini veya kendi veritabanınızdaki bilgileri AI'ya sormak istediğinizde devreye **RAG (Retrieval-Augmented Generation)** girer. Bu yazıda, TypeScript ile basit ama etkili bir RAG yapısını nasıl kuracağımızı inceleyeceğiz.

## RAG Mantığı Nasıl Çalışır?

RAG süreci temel olarak şu adımlardan oluşur:

1.  **Parçalama (Chunking):** Uzun belgeleri küçük, anlamlı parçalara böleriz.
2.  **Vektörleştirme (Embedding):** Bu metin parçalarını matematiksel vektörlere dönüştürürüz.
3.  **Arama (Retrieval):** Kullanıcı bir soru sorduğunda, bu soruyla en alakalı metin parçalarını vektör veritabanından buluruz.
4.  **Yanıt (Generation):** Bulunan bu metin parçalarını AI'ya "bağlam" (context) olarak veririz ve soruyu cevaplamasını isteriz.

## Gerekli Araçlar

*   **LangChain.js:** AI akışlarını yönetmek için en popüler kütüphane.
*   **OpenAI Embeddings:** Metinleri vektöre dönüştürmek için.
*   **HNSWLib veya Pinecone:** Vektörleri saklamak için.

## Uygulama Kod Örneği

İşte basit bir belgeden veri çeken RAG yapısı:

```typescript
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";

async function runRAG() {
  // 1. Veriyi Hazırla (Örnek Metin)
  const text = "İhsan Baki Doğan, Next.js ve AI konusunda uzman bir geliştiricidir.";
  
  // 2. Metni Parçala
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 50,
    chunkOverlap: 10,
  });
  const docs = await splitter.createDocuments([text]);

  // 3. Vektörleştir ve Sakla
  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );

  // 4. Soru-Cevap Zinciri Oluştur
  const model = new ChatOpenAI({ modelName: "gpt-4o" });
  const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());

  // 5. Soruyu Sor
  const res = await chain.call({
    query: "İhsan Baki Doğan hangi konularda uzmandır?",
  });

  console.log(res.text); // "İhsan Baki Doğan, Next.js ve AI konularında uzmandır."
}

runRAG();
```

## Neden TypeScript?

AI projelerinde veri akışı çok karmaşıktır. Metinlerin, vektörlerin ve API yanıtlarının doğru tipte (type) olması, çalışma anında (runtime) hata alma riskini minimize eder. Özellikle LangChain gibi kütüphanelerle çalışırken TypeScript'in sunduğu otomatik tamamlama özellikleri geliştirme hızınızı 2 katına çıkarır.

## Sonuç

RAG, yapay zekayı "kişisel" veya "kurumsal" kılan en önemli teknolojidir. TypeScript ve Node.js ekosistemi, bu teknolojiyi hızlı ve güvenli bir şekilde hayata geçirmek için gereken tüm araçlara fazlasıyla sahip.

Kendi projelerinizde hangi veri kaynaklarını (notlar, dokümanlar, veritabanları) AI ile konuşturmak istersiniz? Fikirlerinizi paylaşın!
