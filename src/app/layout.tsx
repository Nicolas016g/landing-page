import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NeuroMind AI — Inteligência Artificial para Empresas",
  description:
    "Plataforma de IA empresarial com automação inteligente, analytics em tempo real e suporte 24/7. Contrate direto com a desenvolvedora.",
  keywords: ["inteligência artificial", "IA empresarial", "automação", "NeuroMind"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
