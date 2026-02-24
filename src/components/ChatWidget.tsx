"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Plus, Send, X } from "lucide-react";
import { marked, Renderer, Tokens } from "marked";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Merhaba, ben site asistani. Projeler, blog yazilari veya yazilim konularinda yardimci olabilirim. Markdown da destekliyorum.",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function decodeHtmlEntities(value: string) {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&");
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
  const renderer = new Renderer();
  const defaultTableRenderer = renderer.table.bind(renderer);

  renderer.html = (token: Tokens.HTML) => {
    const text = token.text || token.raw;
    return escapeHtml(text);
  };

  renderer.code = ({ text, lang, escaped }: Tokens.Code) => {
    const codeText = escaped ? decodeHtmlEntities(text) : text;
    const codeHtml = escaped ? text : escapeHtml(text);
    const safeLang = (lang || "text").replace(/[^a-zA-Z0-9+_.-]/g, "").slice(0, 20) || "text";
    const copyPayload = encodeURIComponent(codeText);

    return [
      '<div class="chat-code-block">',
      '  <div class="chat-code-header">',
      `    <span class="chat-code-lang">${safeLang}</span>`,
      `    <button type="button" class="chat-copy-btn" data-copy-code="${copyPayload}">Kopyala</button>`,
      "  </div>",
      `  <pre><code class="language-${safeLang}">${codeHtml}</code></pre>`,
      "</div>",
    ].join("\n");
  };

  renderer.table = (token: Tokens.Table) => {
    return `<div class="chat-table-wrap">${defaultTableRenderer(token)}</div>`;
  };

  const html = marked.parse(content, {
    gfm: true,
    breaks: true,
    renderer,
  }) as string;

  return html.replace(/<a\s+href="([^"]*)"/g, (_match, href: string) => {
    const safeHref = sanitizeHref(href);
    return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer nofollow" class="text-blue-300 underline underline-offset-2"`;
  });
}

function AssistantMarkdown({ content }: { content: string }) {
  if (!content.trim()) {
    return <div className="text-sm text-neutral-400">Yaziyor...</div>;
  }

  return (
    <div
      className="chat-markdown prose prose-invert prose-sm max-w-none prose-p:my-0 prose-p:leading-relaxed prose-headings:my-2 prose-headings:text-white prose-strong:text-white prose-code:text-neutral-100 prose-ul:my-2 prose-ol:my-2 prose-li:my-0 break-words"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleMessagesClick = async (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>("[data-copy-code]");

    if (!button) return;

    const encoded = button.dataset.copyCode;
    if (!encoded) return;

    try {
      const code = decodeURIComponent(encoded);
      await navigator.clipboard.writeText(code);
      const originalText = button.textContent || "Kopyala";
      button.textContent = "Kopyalandi";
      window.setTimeout(() => {
        if (button.isConnected) button.textContent = originalText;
      }, 1200);
    } catch {
      setError("Kod kopyalanamadi.");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();

    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      content: text,
    };

    const assistantMessageId = `${Date.now()}-assistant`;

    setInput("");
    setError(null);
    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: assistantMessageId, role: "assistant", content: "" },
    ]);

    try {
      const controller = new AbortController();
      abortRef.current = controller;

      const payloadMessages = [...messages, userMessage].map(({ role, content }) => ({
        role,
        content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          messages: payloadMessages,
          pageContext: {
            pathname: window.location.pathname,
            title: document.title,
          },
        }),
      });

      if (!response.ok) {
        let errorMessage = "Sohbet istegi basarisiz oldu.";
        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          const data = (await response.json()) as { error?: string };
          if (data.error) errorMessage = data.error;
        } else {
          const textBody = (await response.text()).trim();
          if (textBody) errorMessage = textBody;
        }

        throw new Error(errorMessage);
      }

      if (!response.body) {
        throw new Error("Sohbet stream cevabi alinamadi.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let receivedAnyChunk = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          const tail = decoder.decode();
          if (tail) {
            receivedAnyChunk = true;
            setMessages((prev) =>
              prev.map((message) =>
                message.id === assistantMessageId
                  ? { ...message, content: message.content + tail }
                  : message,
              ),
            );
          }
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;

        receivedAnyChunk = true;
        setMessages((prev) =>
          prev.map((message) =>
            message.id === assistantMessageId
              ? { ...message, content: message.content + chunk }
              : message,
          ),
        );
      }

      if (!receivedAnyChunk) {
        throw new Error("AI cevabi bos dondu.");
      }
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }

      const message = err instanceof Error ? err.message : "Beklenmeyen bir hata olustu.";
      setError(message);
      setMessages((prev) => prev.filter((item) => item.id !== assistantMessageId));
    } finally {
      abortRef.current = null;
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsLoading(false);
    setError(null);
    setInput("");
    setMessages([WELCOME_MESSAGE]);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 premium-card h-14 w-14 flex items-center justify-center text-white hover:border-white/20 transition-all shadow-lg"
        aria-label={open ? "Sohbeti kapat" : "Sohbeti ac"}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {open && (
        <section className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-md premium-card overflow-hidden shadow-2xl">
          <header className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
            <div className="premium-surface h-9 w-9 rounded-full flex items-center justify-center text-blue-300">
              <Bot className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">AI Sohbet</p>
              <p className="text-xs text-neutral-500">ihsanbakidogan.com</p>
            </div>
            <button
              type="button"
              onClick={handleNewChat}
              className="premium-surface inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[11px] font-semibold text-neutral-200 hover:border-white/20 transition-colors whitespace-nowrap"
              aria-label="Yeni sohbet olustur"
              title="Yeni sohbet olustur"
            >
              <Plus className="h-3.5 w-3.5" />
              Yeni sohbet
            </button>
          </header>

          <div
            ref={listRef}
            onClick={handleMessagesClick}
            className="max-h-[50vh] min-h-72 overflow-y-auto px-3 py-3 space-y-2 bg-black/10"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] min-w-0 rounded-2xl px-3 py-2 text-sm leading-relaxed overflow-hidden ${message.role === "user"
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
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/5 p-3 space-y-2">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Bir sey sor..."
                className="flex-1 rounded-xl border border-white/10 bg-neutral-950 px-3 py-2.5 text-sm text-white outline-none focus:border-blue-500/50"
                maxLength={2000}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="premium-surface h-11 w-11 rounded-xl flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-white/20 transition-colors"
                aria-label="Gonder"
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
