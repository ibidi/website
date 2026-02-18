import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ihsanbakidogan.com"),
  title: {
    default: "İhsan Baki Doğan | Full Stack Developer",
    template: "%s | İhsan Baki Doğan"
  },
  description: "Full Stack Web Developer - Node.js, TypeScript, React ve Vue uzmanı. Modern ve performanslı web deneyimleri inşa ediyorum.",
  keywords: ["İhsan Baki Doğan", "Full Stack Developer", "Web Yazılım", "Node.js uzmanı", "React geliştirici", "ibidi", "software engineer"],
  authors: [{ name: "İhsan Baki Doğan", url: "https://ihsanbakidogan.com" }],
  creator: "İhsan Baki Doğan",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ihsanbakidogan.com",
    title: "İhsan Baki Doğan | Full Stack Developer",
    description: "Modern web teknolojileri ile dijital deneyimler inşa ediyorum.",
    siteName: "İhsan Baki Doğan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "İhsan Baki Doğan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İhsan Baki Doğan | Full Stack Developer",
    description: "Modern web teknolojileri ile dijital deneyimler inşa ediyorum.",
    creator: "@ihsanbakidogan",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
