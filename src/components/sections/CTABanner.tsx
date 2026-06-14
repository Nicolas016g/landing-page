"use client";

import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-cyan-700 py-16 md:py-20">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white">
            <Sparkles className="h-4 w-4 text-accent" />
            Próximo passo
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Pronto para liderar com{" "}
            <span className="text-accent">inteligência artificial?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Contrate direto com a desenvolvedora. Onboarding gratuito,
            implementação em 48h e suporte dedicado em português.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contato" className="btn-accent !px-10 !py-4 !text-base shadow-2xl">
            Agendar Demonstração Grátis
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="tel:+551140028922"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <Phone className="h-5 w-5" />
            (11) 4002-8922
          </a>
          <a
            href="https://wa.me/551140028922"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
