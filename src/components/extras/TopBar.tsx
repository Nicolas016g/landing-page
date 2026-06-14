"use client";

import { Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-2.5 text-center text-xs text-white md:text-sm">
      <span className="inline-flex items-center gap-2 font-medium">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span>
          Teste gratuito por <strong className="text-accent">14 dias</strong> — sem cartão de crédito
        </span>
        <span className="hidden text-white/40 md:inline">|</span>
        <span className="hidden md:inline">Implementação em até 48 horas</span>
      </span>
    </div>
  );
}
