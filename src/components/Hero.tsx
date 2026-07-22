import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import CtaButton from "./CtaButton";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 sm:pt-40"
      aria-labelledby="hero-title"
    >
      {/* Fundo decorativo suave, com flutuação lenta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 animate-float rounded-full bg-primary-light/25 blur-3xl" />
        <div className="absolute -left-20 top-40 h-72 w-72 animate-float-slow rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-site pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow animate-fade-up justify-center">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {site.approach}
          </span>

          <h1
            id="hero-title"
            className="animate-fade-up font-serif text-4xl font-semibold leading-[1.1] text-ink [animation-delay:100ms] sm:text-5xl md:text-6xl"
          >
            {site.name}
            <span className="mt-2 block text-2xl font-normal text-primary sm:text-3xl">
              Psicóloga Clínica
            </span>
          </h1>

          <p className="prose-soft mx-auto mt-6 max-w-2xl animate-fade-up [animation-delay:200ms]">
            Um espaço seguro para se conhecer, compreender suas emoções e
            construir mudanças reais, com base em evidências científicas.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:300ms] sm:flex-row">
            <CtaButton href={site.whatsappUrl} variant="whatsapp">
              Agende pelo WhatsApp
            </CtaButton>
            <CtaButton href={site.instagramUrl} variant="instagram">
              Instagram {site.instagramHandle}
            </CtaButton>
          </div>

          {/* Selos de autoridade / atendimento */}
          <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-soft [animation-delay:400ms]">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
              Especialização em TCC · IPQ-HCFMUSP (USP)
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              Online e presencial em {site.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
