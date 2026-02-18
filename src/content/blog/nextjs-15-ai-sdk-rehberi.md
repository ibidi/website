---
title: "Next.js 15 ve Vercel AI SDK ile Akıllı Uygulamalar Geliştirmek"
date: "2026-02-18"
description: "Yapay zekayı web uygulamalarınıza dahil etmenin en hızlı yolu. Next.js 15 ve Vercel AI SDK kullanarak modern AI özelliklerini nasıl entegre edebileceğinizi keşfedin."
category: "Yazılım"
---

Günümüzde artık "akıllı" olmayan uygulamalar kullanıcıların ilgisini çekmekte zorlanıyor. Neyse ki, Next.js 15 ve Vercel AI SDK bu süreci her zamankinden daha kolay hale getiriyor. Bu yazıda, projenize saniyeler içinde bir chat arayüzü veya yapay zeka destekli bir özellik eklemenin yollarını inceleyeceğiz.

## Neden Vercel AI SDK?

Vercel AI SDK, farklı dil modellerini (OpenAI, Anthropic, Gemini, Mistral vb.) tek bir standart arayüz üzerinden yönetmenizi sağlar. Next.js ile olan derin entegrasyonu sayesinde şu avantajları sunar:

1.  **Streaming:** AI yanıtlarını harf harf akıtarak mükemmel bir kullanıcı deneyimi sağlar.
2.  **Hooks (useChat, useCompletion):** UI durumlarını (state management) manuel olarak yönetme zahmetini ortadan kaldırır.
3.  **Edge & Runtime Desteği:** En düşük gecikme süresi için modelleri doğrudan Edge network'te çalıştırabilir.

## Kurulum ve Başlangıç

Öncelikle gerekli paketleri projemize ekleyelim:

```bash
npm install ai @ai-sdk/openai
```

## API Rotası Oluşturma (Route Handler)

Next.js App Router üzerinde bir AI endpoint'i kurmak işte bu kadar basit:

```typescript
// src/app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    messages,
  });

  return result.toDataStreamResponse();
}
```

## Frontend Tarafında Kullanım

`useChat` hook'u sayesinde karmaşık form işlemlerine gerek kalmadan AI ile iletişim kurabiliriz:

```tsx
'use client';

import { useChat } from 'ai/react';

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Yapay zekaya bir şey sor..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
```

## Sonuç

Next.js 15 ve Vercel AI SDK ikilisi, karmaşık yapay zeka entegrasyonlarını standart bir CRUD operasyonu kadar basit hale getirdi. Bu araçları kullanarak sadece birkaç dakika içinde uygulamanızı "akıllı" bir asistanla donatabilirsiniz.

Eğer daha gelişmiş özellikler (RAG, Tool Calling, Image Generation) hakkında daha fazla bilgi isterseniz, bir sonraki yazımızı bekleyin!
