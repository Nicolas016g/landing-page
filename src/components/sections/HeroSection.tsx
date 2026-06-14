"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  MapPin,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { LeadForm } from "../ui/LeadForm";
import { HeroVisual } from "./HeroVisual";

const stats = [
  { value: "2.400+", label: "Empresas ativas", icon: TrendingUp },
  { value: "98%", label: "Precisão IA", icon: Award },
  { value: "340%", label: "ROI médio", icon: Zap },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-8 pb-20 md:pb-28">
      <div className="pattern-dots absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/15 to-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-accent/20 to-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge-launch inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Plataforma líder em IA empresarial
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-primary-dark md:text-4xl lg:text-[3.25rem]">
              A inteligência artificial que{" "}
              <span className="text-gradient">transforma empresas</span> em
              máquinas de resultados
            </h1>

            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              São Paulo, SP — Presente em 47 países
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Automatize processos e reduza custos em até 70%",
                "Implementação completa em menos de 48 horas",
                "14 dias de teste gratuito — sem cartão",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-semibold text-primary-dark">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-xs text-white shadow-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contato" className="btn-primary !px-8 !py-4 !text-base shadow-xl shadow-primary/30">
                Começar Agora
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#precos" className="btn-outline !px-8 !py-4">
                Ver Planos
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <Users className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary-dark">
                +2.400 empresas já utilizam a plataforma
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["SOC 2", "LGPD", "Garantia 30 dias", "Suporte 24/7"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-bold text-primary shadow-sm"
                >
                  <Shield className="h-3 w-3 text-green-600" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative space-y-6"
          >
            <HeroVisual />
            <LeadForm compact />
          </motion.div>
        </div>

        {/* Stats bar full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-[0_16px_50px_rgba(12,61,110,0.1)] backdrop-blur-md md:gap-8 md:p-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-accent" />
              <p className="text-3xl font-extrabold text-gradient md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
