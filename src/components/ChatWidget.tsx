"use client";

import { FormEvent, useEffect, useRef, useState, useTransition } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { marked } from "marked";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "Merhaba, ben site asistanı. Projeler, blog yazıları veya yazılım konularında yardımcı olabilirim.",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function sanitizeHref(rawHref: string) {
  if (!rawHref) return "#";

  if (rawHref.startsWith("/") || rawHref.startsWith("#")) {
    return rawHref;
  }

  try {
    const parsed = new URL(rawHref);
    const allowedProtocols = new Set(["http:", "https:", "mailto:", "tel:"]);
    return allowedProtocols.has(parsed.protocol) ? rawHref : "#";
  } catch {
    return "#";
  }
}

function renderMarkdown(content: string) {
  const safeSource = escapeHtml(content);
  const html = marked.parse(safeSource, {
    gfm: true,
    breaks: true,
  }) as string;

  return html.replace(/<a\s+href="([^"]*)"/g, (_match, href: string) => {
    const safeHref = sanitizeHref(href);
    return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer nofollow" class="text-blue-300 underline underline-offset-2"`;
  });
}

function AssistantMarkdown({ content }: { content: string }) {
  return (
    <div
      className="prose prose-invert prose-sm max-w-none prose-p:my-0 prose-p:leading-relaxed prose-pre:my-2 prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-code:text-neutral-100 prose-ul:my-2 prose-ol:my-2 prose-li:my-0 break-words"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();

    if (!text || isPending) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      content: text,
    };

    setInput("");
    setError(null);
    setMessages((prev) => [...prev, userMessage]);

    startTransition(async () => {
      try {
        const payloadMessages = [...messages, userMessage].map(({ role, content }) => ({
          role,
          content,
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: payloadMessages,
            pageContext: {
              pathname: window.location.pathname,
              title: document.title,
            },
          }),
        });

        const data = (await response.json()) as { reply?: string; error?: string };

        if (!response.ok || !data.reply) {
          throw new Error(data.error || "Sohbet isteği başarısız oldu.");
        }

        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-assistant`,
            role: "assistant",
            content: data.reply as string,
          },
        ]);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Beklenmeyen bir hata oluştu.";
        setError(message);
      }
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 premium-card h-14 w-14 flex items-center justify-center text-white hover:border-white/20 transition-all shadow-lg"
        aria-label={open ? "Sohbeti kapat" : "Sohbeti aç"}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {open && (
        <section className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-md premium-card overflow-hidden shadow-2xl">
          <header className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
            <div className="premium-surface h-9 w-9 rounded-full flex items-center justify-center text-blue-300">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">AI Sohbet</p>
              <p className="text-xs text-neutral-500">ihsanbakidogan.com</p>
            </div>
          </header>

          <div
            ref={listRef}
            className="max-h-[50vh] min-h-72 overflow-y-auto px-3 py-3 space-y-2 bg-black/10"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-white text-black"
                      : "premium-surface text-neutral-100"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <AssistantMarkdown content={message.content} />
                  ) : (
                    <div className="whitespace-pre-wrap break-words">{message.content}</div>
                  )}
                </div>
              </div>
            ))}

            {isPending && (
              <div className="flex justify-start">
                <div className="premium-surface rounded-2xl px-3 py-2 text-sm text-neutral-300">
                  Yazıyor...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/5 p-3 space-y-2">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Bir şey sor..."
                className="flex-1 rounded-xl border border-white/10 bg-neutral-950 px-3 py-2.5 text-sm text-white outline-none focus:border-blue-500/50"
                maxLength={2000}
              />
              <button
                type="submit"
                disabled={isPending || !input.trim()}
                className="premium-surface h-11 w-11 rounded-xl flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-white/20 transition-colors"
                aria-label="Gönder"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {error && <p className="text-xs text-red-300 px-1">{error}</p>}
          </form>
        </section>
      )}
    </>
  );
}
