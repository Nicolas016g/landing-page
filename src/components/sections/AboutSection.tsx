import { CheckCircle, Rocket } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding relative bg-white">
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Quem Somos"
            title="Sobre a NeuroMind AI"
            subtitle="Tecnologia de ponta para empresas que buscam resultados mensuráveis desde o primeiro dia"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p className="text-lg">
                A <strong className="text-primary-dark">NeuroMind AI</strong> é uma
                plataforma de inteligência artificial empresarial desenvolvida para
                automatizar processos, otimizar operações e gerar insights preditivos
                em tempo real.
              </p>
              <p>
                Oferecemos <strong className="text-primary-dark">4 soluções exclusivas</strong>:
                NeuroCore e NeuroFlow (consolidados com milhares de implementações),
                NeuroScale (em expansão com novas integrações) e NeuroEnterprise
                (pronto para grandes corporações — vagas limitadas neste trimestre).
              </p>
              <p>
                Planos de <strong className="text-primary-dark">R$ 297 a R$ 897/mês</strong>{" "}
                ou contratos enterprise sob consulta, com automação inteligente, IA
                generativa, dashboards analíticos e API completa.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="highlight-box">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/25">
                  <Rocket className="h-8 w-8 text-primary-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-primary-dark">
                    Elegível para Teste Gratuito de 14 Dias
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    Todas as soluções incluem período de teste completo sem cartão
                    de crédito. Implementação assistida inclusa para novos clientes.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {["Sem compromisso", "Suporte em português", "Onboarding gratuito"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-primary-dark">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
