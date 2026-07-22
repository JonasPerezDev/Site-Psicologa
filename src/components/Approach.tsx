import { Brain, LineChart, Target, FlaskConical } from "lucide-react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { site } from "@/config/site";

const pillars = [
  {
    icon: Brain,
    title: "Pensamentos, emoções e comportamentos",
    text: "A TCC parte da ideia de que a forma como interpretamos as situações influencia o que sentimos e como agimos.",
  },
  {
    icon: Target,
    title: "Foco no presente e em objetivos",
    text: "O trabalho é ativo e orientado a metas concretas, ajudando você a lidar com os desafios do dia a dia.",
  },
  {
    icon: FlaskConical,
    title: "Baseada em evidências",
    text: "É uma das abordagens com mais respaldo científico para ansiedade, depressão e outras demandas.",
  },
  {
    icon: LineChart,
    title: "Mudanças que se sustentam",
    text: "Você desenvolve estratégias e recursos próprios para manter os avanços além do consultório.",
  },
];

// Bloco de maior destaque do site (pedido explícito da cliente).
export default function Approach() {
  return (
    <section
      id="abordagem"
      className="section-pad bg-primary text-white"
      aria-labelledby="abordagem-title"
    >
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center !text-primary-light">
            Abordagem terapêutica
          </span>
          <h2
            id="abordagem-title"
            className="font-serif text-3xl leading-tight sm:text-4xl"
          >
            Terapia Cognitivo-Comportamental (TCC)
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Uma abordagem estruturada e colaborativa que auxilia na compreensão
            e na mudança de pensamentos, emoções e comportamentos — sempre com
            base em evidências científicas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={200}>
          <CtaButton
            href={site.whatsappUrl}
            variant="whatsapp"
            className="!bg-white !text-primary hover:!bg-white/90"
          >
            Quero começar minha terapia
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
