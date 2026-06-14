import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "../ui/LeadForm";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 — São Paulo, SP" },
  { icon: Phone, label: "Telefone", value: "(11) 4002-8922" },
  { icon: Mail, label: "E-mail", value: "contato@neuromind.ai" },
];

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Fale Conosco"
            title="Entre em Contato"
            subtitle="Preencha o formulário e contrate direto com a desenvolvedora"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed">
                Nossa equipe de especialistas está pronta para entender suas
                necessidades e apresentar a solução ideal para sua empresa.
              </p>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">{label}</p>
                    <p className="mt-1 font-semibold text-primary-dark">{value}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white">
                <p className="font-extrabold">Horário de Atendimento</p>
                <p className="mt-2 text-sm text-white/80">
                  Segunda a Sexta: 8h às 20h<br />
                  Sábado: 9h às 14h<br />
                  Suporte 24/7 para clientes ativos
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <LeadForm
              title="Solicite uma Proposta"
              subtitle="Resposta garantida em até 24 horas úteis."
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
