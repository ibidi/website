import { NextResponse } from "next/server";
import { buildChatSystemPrompt } from "@/lib/chat-context";

type ChatRole = "user" | "assistant";

type IncomingMessage = {
  role: ChatRole;
  content: string;
};

const MAX_MESSAGES = 12;
const MAX_CONTENT_LENGTH = 2000;
const STREAM_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  Connection: "keep-alive",
};

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

function extractDeltaContent(payload: string) {
  if (!payload) return { done: false, content: "" };
  if (payload === "[DONE]") return { done: true, content: "" };

  try {
    const parsed = JSON.parse(payload) as {
      choices?: Array<{ delta?: { content?: string | null } }>;
    };

    return {
      done: false,
      content: parsed.choices?.[0]?.delta?.content ?? "",
    };
  } catch {
    return { done: false, content: "" };
  }
}

function createTextStreamResponse(upstream: Response) {
  if (!upstream.body) {
    return NextResponse.json({ error: "AI stream body bulunamadi." }, { status: 502 });
  }

  const upstreamReader = upstream.body.getReader();
  const upstreamDecoder = new TextDecoder();
  const downstreamEncoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await upstreamReader.read();

          if (done) {
            buffer += upstreamDecoder.decode();
            break;
          }

          buffer += upstreamDecoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine.startsWith("data:")) continue;

            const chunk = extractDeltaContent(trimmedLine.slice(5).trim());
            if (chunk.done) {
              controller.close();
              return;
            }

            if (chunk.content) {
              controller.enqueue(downstreamEncoder.encode(chunk.content));
            }
          }
        }

        for (const line of buffer.split("\n")) {
          const trimmedLine = line.trim();
          if (!trimmedLine.startsWith("data:")) continue;

          const chunk = extractDeltaContent(trimmedLine.slice(5).trim());
          if (chunk.done) break;
          if (chunk.content) {
            controller.enqueue(downstreamEncoder.encode(chunk.content));
          }
        }

        controller.close();
      } catch (error) {
        console.error("Groq stream parse error:", error);
        controller.error(error);
      } finally {
        upstreamReader.releaseLock();
      }
    },
    cancel() {
      upstreamReader.cancel().catch(() => undefined);
    },
  });

  return new Response(stream, { headers: STREAM_HEADERS });
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "GROQ_API_KEY tanimli degil." }, { status: 500 });
    }

    const body = await request.json().catch(() => ({}));
    const parsedBody = body as { messages?: unknown; pageContext?: unknown };
    const messages = normalizeMessages(parsedBody.messages);

    if (messages.length === 0) {
      return NextResponse.json({ error: "Gecerli mesaj bulunamadi." }, { status: 400 });
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
        stream: true,
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
      return NextResponse.json({ error: "Groq API istegi basarisiz oldu." }, { status: 502 });
    }

    return createTextStreamResponse(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Sohbet servisi su anda kullanilamiyor." },
      { status: 500 },
    );
  }
}