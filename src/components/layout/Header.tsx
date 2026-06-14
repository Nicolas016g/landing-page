"use client";

import { Brain, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TopBar } from "../extras/TopBar";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Preços", href: "#precos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-[0_4px_30px_rgba(12,61,110,0.1)] backdrop-blur-md"
            : "bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary-light to-cyan-600 shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-primary-dark">
                NeuroMind <span className="text-gradient">AI</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-dark">
                Neural Systems
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+551140028922"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              <Phone className="h-4 w-4 text-accent" />
              (11) 4002-8922
            </a>
            <a href="#contato" className="btn-primary !px-5 !py-2.5 !text-sm">
              Falar com Especialista
            </a>
          </div>

          <button className="rounded-lg p-2 hover:bg-surface lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-white px-4 py-4 shadow-lg lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-3 font-medium text-text-muted hover:bg-surface hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className="btn-primary mt-3 w-full text-sm" onClick={() => setOpen(false)}>
              Falar com Especialista
            </a>
          </div>
        )}
      </header>
    </>
  );
}
