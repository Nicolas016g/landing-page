import { Check, Gift } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const benefits = [
  "Implementação em menos de 48 horas",
  "Teste gratuito de 14 dias sem cartão",
  "Subsídio de onboarding incluso",
  "Taxas competitivas a partir de R$ 297/mês",
  "Integração com ferramentas existentes",
  "Financiamento flexível em até 12x",
  "Composição de equipes com até 3 departamentos",
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Condições Especiais"
            title="Vantagens Exclusivas"
            subtitle="Acelere a transformação digital com benefícios para novos clientes"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <div className="highlight-box">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-light shadow-md">
                <Gift className="h-6 w-6 text-primary-dark" />
              </div>
              <p className="text-center text-sm font-bold text-primary-dark md:text-left">
                Aproveite as vantagens exclusivas para novos clientes NeuroMind AI
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-xl bg-white/60 p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="pt-0.5 font-medium text-text-muted">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-xs text-text-muted">
              * Condições promocionais sujeitas à análise de cada empresa e plano selecionado.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
