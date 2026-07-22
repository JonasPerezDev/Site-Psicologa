import { BadgeCheck, GraduationCap, Heart, ShieldCheck } from "lucide-react";
import { site } from "@/config/site";
import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";

const values = [
  { icon: Heart, label: "Acolhimento e empatia" },
  { icon: ShieldCheck, label: "Ética e sigilo profissional" },
  { icon: BadgeCheck, label: "Respeito à individualidade" },
  { icon: GraduationCap, label: "Prática baseada em evidências" },
];

export default function About() {
  return (
    <section id="sobre" className="section-pad" aria-labelledby="sobre-title">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Foto profissional em carrossel (alterna a cada 3s) */}
        <Reveal className="order-1 mx-auto w-full max-w-sm lg:order-none">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary-light/20 animate-float-slow" />
            <ImageCarousel />
          </div>
        </Reveal>

        {/* Texto */}
        <Reveal delay={120}>
          <span className="eyebrow">Sobre</span>
          <h2 id="sobre-title" className="heading-2">
            Cuidado com base científica e olhar humano
          </h2>

          <div className="prose-soft mt-5 space-y-4">
            <p>
              Sou <strong className="text-ink">{site.name}</strong>, psicóloga
              formada em Psicologia, com especialização em{" "}
              <strong className="text-ink">
                Terapia Cognitivo-Comportamental (TCC)
              </strong>{" "}
              pelo Instituto de Psiquiatria do Hospital das Clínicas da Faculdade
              de Medicina da <strong className="text-ink">USP</strong>{" "}
              <strong className="text-ink">(IPQ-HCFMUSP)</strong>. {site.crp}.
            </p>
            <p>
              Atendo adolescentes, adultos, crianças e idosos, com foco em
              acolhimento, ética e respeito à individualidade de cada paciente.
            </p>
          </div>

          {/* Frase de propósito */}
          <blockquote className="mt-7 border-l-4 border-accent pl-5">
            <p className="font-serif text-xl italic text-ink sm:text-2xl">
              “Para mim, a psicologia não é apenas uma profissão — é um propósito
              pessoal.”
            </p>
          </blockquote>

          {/* Valores */}
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
