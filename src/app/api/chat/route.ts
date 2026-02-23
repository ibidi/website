import { NextResponse } from "next/server";
import { buildChatSystemPrompt } from "@/lib/chat-context";

type ChatRole = "user" | "assistant";

type IncomingMessage = {
  role: ChatRole;
  content: string;
};

const MAX_MESSAGES = 12;
const MAX_CONTENT_LENGTH = 2000;

function normalizeMessages(input: unknown): IncomingMessage[] {
  if (!Array.isArray(input)) return [];

  return input
    .filter((item): item is IncomingMessage => {
      if (!item || typeof item !== "object") return false;
      const candidate = item as Partial<IncomingMessage>;
      return (
        (candidate.role === "user" || candidate.role === "assistant") &&
        typeof candidate.content === "string"
      );
    })
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, MAX_CONTENT_LENGTH),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-MAX_MESSAGES);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY tanımlı değil." },
        { status: 500 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const parsedBody = body as { messages?: unknown; pageContext?: unknown };
    const messages = normalizeMessages(parsedBody.messages);

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "Geçerli mesaj bulunamadı." },
        { status: 400 },
      );
    }

    const systemPrompt = await buildChatSystemPrompt(parsedBody.pageContext);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
        temperature: 0.5,
        max_tokens: 700,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Groq API isteği başarısız oldu." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string | null } }>;
    };

    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "AI cevabı boş döndü." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Sohbet servisi şu anda kullanılamıyor." },
      { status: 500 },
    );
  }
}
