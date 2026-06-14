"use client";

import { Loader2, Lock, Send, Sparkles } from "lucide-react";
import { useState } from "react";

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function LeadForm({
  id = "lead-form",
  title = "Solicite uma Demonstração",
  subtitle = "Fale com um especialista e descubra o plano ideal para sua empresa.",
  compact = false,
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  if (sent) {
    return (
      <div className="card-premium p-8 text-center shadow-[0_16px_50px_rgba(12,61,110,0.12)]">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-3xl text-white shadow-lg">
          ✓
        </div>
        <h3 className="text-xl font-extrabold text-primary-dark">Solicitação Enviada!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Um especialista entrará em contato em até 24 horas.
        </p>
      </div>
    );
  }

  return (
    <div className="card-premium relative overflow-hidden shadow-[0_16px_50px_rgba(12,61,110,0.12)]" id={id}>
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-cyan-500 to-accent" />

      <div className="border-b border-border/60 bg-gradient-to-r from-primary/5 via-cyan-500/5 to-accent/5 px-6 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-600 shadow-md">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-primary-dark">{title}</h3>
            <p className="text-xs text-text-muted">{subtitle}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-6 md:p-8">
        {!compact && (
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-primary-dark">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input required type="text" placeholder="Seu nome completo" className="input-field" />
          </div>
        )}

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-dark">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input required type="email" placeholder="seu@email.com" className="input-field" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-dark">
            WhatsApp <span className="text-red-500">*</span>
          </label>
          <input required type="tel" placeholder="(11) 99999-9999" className="input-field" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-primary-dark">
            Plano de Interesse <span className="text-red-500">*</span>
          </label>
          <select required className="input-field" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            <option value="starter">Starter — Pequenas Empresas</option>
            <option value="professional">Professional — Mais Popular</option>
            <option value="enterprise">Enterprise — Sob Medida</option>
          </select>
        </div>

        {!compact && (
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-primary-dark">Mensagem</label>
            <textarea rows={3} placeholder="Como podemos ajudar sua empresa?" className="input-field resize-none" />
          </div>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full !py-4 disabled:opacity-70">
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Solicitar Demonstração Grátis
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-text-muted">
          <Lock className="h-3 w-3" />
          Dados protegidos · Sem compromisso · LGPD
        </p>
      </form>
    </div>
  );
}
