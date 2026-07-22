import { User, Monitor, MapPin, ClipboardList, Clock } from "lucide-react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { site } from "@/config/site";

// Online vem primeiro: é a modalidade com maior volume de atendimentos.
const modalities = [
  {
    icon: Monitor,
    title: "Online",
    text: "Sessões por vídeo com a mesma qualidade, de onde você estiver, com flexibilidade e conforto. Atendo pacientes de todo o Brasil.",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Presencial em Jacareí - SP",
    text: "Atendimento em consultório para quem prefere o encontro presencial.",
    featured: false,
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Primeira sessão: anamnese",
    text: "Um momento de acolhimento e escuta para entender sua história, suas necessidades e objetivos, e começar a construir juntos o plano terapêutico.",
  },
  {
    icon: Clock,
    title: "Duração e frequência",
    text: "As sessões têm duração média de 50 minutos e costumam acontecer uma vez por semana, com ajustes conforme a sua necessidade.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="section-pad bg-surface"
      aria-labelledby="servicos-title"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Serviços e modalidades</span>
          <h2 id="servicos-title" className="heading-2">
            Terapia individual, do seu jeito
          </h2>
          <p className="prose-soft mx-auto mt-5 max-w-2xl">
            <span className="inline-flex items-center gap-2">
              <User className="h-5 w-5 text-primary" aria-hidden="true" />
              Atendimento individual
            </span>{" "}
            nas modalidades online e presencial.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {modalities.map(({ icon: Icon, title, text, featured }, i) => (
            <Reveal key={title} delay={i * 100} className="h-full">
              <div
                className={`h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                  featured
                    ? "bg-primary/[0.06] ring-2 ring-primary/25"
                    : "bg-sand ring-1 ring-black/5"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    featured
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-xl text-ink">{title}</h3>
                  {featured && (
                    <span className="rounded-full bg-primary/12 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary">
                      Mais procurado
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={200 + i * 100} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-dashed border-primary/25 p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.03]">
                <Icon
                  className="h-6 w-6 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-lg text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={150}>
          <CtaButton href={site.whatsappUrl} variant="whatsapp">
            Agende sua primeira sessão
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
