"use client";

import { Check, Crown, Star } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const plans = [
  {
    name: "Starter",
    price: 297,
    oldPrice: null,
    description: "Ideal para começar com IA",
    features: ["10.000 requisições/mês", "1 modelo de IA", "Suporte por email", "Dashboard básico"],
    popular: false,
  },
  {
    name: "Professional",
    price: 897,
    oldPrice: null,
    promo: "20% off no 1º mês",
    promoPrice: 717,
    description: "O mais escolhido — máximo ROI",
    features: [
      "Requisições ilimitadas",
      "Todos os modelos de IA",
      "Suporte 24/7 prioritário",
      "Analytics avançado",
      "Treinamento personalizado",
      "Onboarding gratuito",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    oldPrice: null,
    description: "Para grandes corporações",
    features: ["Infraestrutura dedicada", "SLA 99.99%", "Gerente de conta", "On-premise"],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="precos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-surface" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Investimento"
            title="Planos transparentes, resultados reais"
            subtitle="Escolha o plano ideal e comece com 14 dias de teste gratuito"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`card relative h-full overflow-hidden p-8 ${
                  plan.popular
                    ? "scale-105 border-2 border-primary/30 shadow-[0_20px_60px_rgba(12,61,110,0.15)] ring-4 ring-primary/10"
                    : "card-hover"
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-primary to-cyan-600 px-10 py-1 text-[10px] font-extrabold uppercase text-white shadow-lg">
                      Mais Popular
                    </div>
                    <div className="mb-4 flex items-center gap-2">
                      <Crown className="h-5 w-5 text-accent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-dark">
                        Recomendado
                      </span>
                    </div>
                  </>
                )}

                <h3 className="text-xl font-extrabold text-primary-dark">{plan.name}</h3>
                <p className="mt-1 text-sm text-text-muted">{plan.description}</p>

                <div className="mt-6">
                  {plan.price ? (
                    <>
                      {"promoPrice" in plan && plan.promoPrice ? (
                        <>
                          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-dark">
                            {plan.promo} — R$ {plan.promoPrice} no primeiro mês
                          </span>
                          <div className="mt-3 flex items-baseline gap-1">
                            <span className="text-sm font-bold text-text-muted">R$</span>
                            <span className="price-highlight">{plan.price}</span>
                            <span className="text-text-muted">/mês</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold text-text-muted">R$</span>
                          <span className="price-highlight">{plan.price}</span>
                          <span className="text-text-muted">/mês</span>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-2xl font-extrabold text-primary-dark">Sob consulta</p>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={`mt-8 block w-full text-center ${plan.popular ? "btn-primary" : "btn-outline"}`}
                >
                  Começar Agora
                </a>

                {plan.popular && (
                  <p className="mt-3 flex items-center justify-center gap-1 text-center text-[11px] font-semibold text-text-muted">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    Escolhido por 89% dos novos clientes
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-text-muted">
            ✓ 14 dias grátis &nbsp;·&nbsp; ✓ Cancele quando quiser &nbsp;·&nbsp; ✓ Garantia de 30 dias
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
