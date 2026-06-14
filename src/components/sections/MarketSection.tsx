import {
  Building2,
  Cloud,
  Globe,
  Headphones,
  MapPin,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const infrastructure = [
  { icon: Cloud, label: "Cloud AWS & Azure" },
  { icon: Server, label: "Data Centers BR" },
  { icon: Shield, label: "SOC 2 Certificado" },
  { icon: Zap, label: "API REST & GraphQL" },
  { icon: Building2, label: "Escritórios SP & RJ" },
  { icon: Headphones, label: "Suporte 24/7" },
  { icon: Globe, label: "47 Países" },
  { icon: MapPin, label: "LGPD Compliant" },
];

export function MarketSection() {
  return (
    <section id="mercado" className="section-padding bg-surface relative">
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Mercado Estratégico"
            title="Tudo que sua empresa precisa em um só lugar"
            subtitle="Presença nacional com infraestrutura global de classe mundial"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="card card-hover overflow-hidden">
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }} />
                <div className="relative text-center text-white">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-2xl font-extrabold">São Paulo, SP</p>
                  <p className="mt-1 text-sm text-white/70">Hub de Inovação em IA</p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-extrabold text-primary-dark">
                  Av. Paulista, 1000 — Bela Vista
                </h3>
                <p className="mt-1 text-sm text-text-muted">São Paulo — SP</p>
                <div className="mt-5 rounded-xl bg-surface p-4">
                  <p className="text-sm text-text-muted">
                    <strong className="text-primary-dark">Centro de Operações:</strong>
                    <br />Av. Faria Lima, 2500 — Itaim Bibi
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-2xl font-extrabold text-primary-dark">
                Presença Nacional com Infraestrutura Global
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent-dark">
                América Latina — Tecnologia ao alcance da sua empresa
              </p>
              <p className="mt-5 text-text-muted leading-relaxed">
                Posicionada no maior ecossistema de tecnologia da América Latina,
                a NeuroMind AI oferece data centers no Brasil, integração nativa
                com ferramentas empresariais e conformidade total com LGPD e GDPR.
              </p>

              <h4 className="mt-8 font-extrabold text-primary-dark">
                Infraestrutura Completa ao Seu Alcance
              </h4>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {infrastructure.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="card card-hover flex flex-col items-center p-4 text-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="mt-2.5 text-[11px] font-semibold leading-tight text-text-muted">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
