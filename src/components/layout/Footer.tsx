"use client";

import { Brain, Mail, MapPin, Phone } from "lucide-react";

const links = {
  produto: ["Recursos", "Integrações", "API", "Preços"],
  empresa: ["Sobre", "Blog", "Carreiras", "Imprensa"],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light">
                <Brain className="h-6 w-6 text-primary-dark" />
              </div>
              <span className="text-xl font-extrabold">NeuroMind AI</span>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              Plataforma de inteligência artificial empresarial. Contrate direto
              com a desenvolvedora e transforme sua operação com tecnologia de ponta.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-accent">Produto</h4>
            <ul className="space-y-3">
              {links.produto.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/65 transition-colors hover:text-accent">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-accent">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/65 transition-colors hover:text-accent">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-accent">Contato</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Av. Paulista, 1000 — São Paulo, SP
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                (11) 4002-8922
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                contato@neuromind.ai
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>© 2026 NeuroMind AI. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-accent">Privacidade</a>
            <a href="#" className="transition-colors hover:text-accent">Termos de Uso</a>
            <a href="#" className="transition-colors hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
