import {
  BarChart3,
  Bot,
  Brain,
  Headphones,
  Lock,
  MessageSquare,
  Workflow,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const amenities = [
  { icon: Bot, label: "IA Generativa", desc: "Respostas inteligentes e contextuais" },
  { icon: Workflow, label: "Automação Total", desc: "Fluxos sem intervenção manual" },
  { icon: BarChart3, label: "Analytics Avançado", desc: "Dashboards em tempo real" },
  { icon: MessageSquare, label: "Chat Multicanal", desc: "WhatsApp, email e web" },
  { icon: Lock, label: "Segurança Enterprise", desc: "Criptografia e compliance" },
  { icon: Headphones, label: "Suporte 24/7", desc: "Equipe dedicada em português" },
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="section-padding bg-surface relative">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Plataforma"
            title="Recursos e Comodidades"
            subtitle="Ecossistema completo para transformar cada área da sua operação"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <ScrollReveal delay={0.1}>
            <div className="card card-hover relative h-full overflow-hidden p-8 md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-accent/15 to-transparent" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-primary-dark">
                Motor Neural Proprietário
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent-dark">
                Diferencial exclusivo da plataforma
              </p>
              <p className="mt-5 text-text-muted leading-relaxed">
                Modelos neurais treinados com bilhões de parâmetros para automação
                de atendimento, análise preditiva, geração de conteúdo e decisões
                em tempo real — um recurso que multiplica a produtividade do seu
                negócio.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["NLP Avançado", "ML Preditivo", "GPT Enterprise"].map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map(({ icon: Icon, label, desc }, i) => (
              <ScrollReveal key={label} delay={0.1 + i * 0.05}>
                <div className="card card-hover flex h-full flex-col items-center p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/15 shadow-sm">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="mt-4 font-extrabold text-primary-dark">{label}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
