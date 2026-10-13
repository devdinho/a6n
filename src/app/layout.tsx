import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/providers/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Desenvolvimento de software sob medida: sistemas web e mobile, plataformas de IA com agentes e RAG, APIs, dados e infraestrutura em nuvem.";

export const metadata: Metadata = {
  metadataBase: new URL("https://a6n.tech"),
  title: {
    default: "A6N Tecnologia — Transformando ideias em soluções digitais",
    template: "%s | A6N Tecnologia",
  },
  description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "A6N Tecnologia",
    title: "A6N Tecnologia — Transformando ideias em soluções digitais",
    description,
  },
  twitter: {
    card: "summary",
    title: "A6N Tecnologia",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
