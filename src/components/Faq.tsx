import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { site } from "@/config/site";

/*
  Accordion acessível usando <details>/<summary> nativos:
  - Navegável por teclado (Tab + Enter/Espaço) sem JavaScript.
  - Compatível com leitores de tela.
  - A abertura/fechamento do conteúdo é animada via CSS grid-rows (0fr -> 1fr),
    sem depender de JavaScript.
*/
export default function Faq() {
  return (
    <section
      id="faq"
      className="section-pad bg-surface"
      aria-labelledby="faq-title"
    >
      <div className="container-site max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">Perguntas frequentes</span>
          <h2 id="faq-title" className="heading-2">
            Tire suas dúvidas
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 60, 300)}>
              <details className="group rounded-xl border border-black/5 bg-sand px-5 py-1 transition-colors duration-300 open:bg-primary/[0.04] [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-lg text-ink">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-5 w-5" aria-hidden="true" />
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-open:grid-rows-[1fr]">
                  <p className="overflow-hidden pb-5 pr-10 text-base leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={150}>
          <p className="prose-soft mb-5">Ainda tem dúvidas?</p>
          <CtaButton href={site.whatsappUrl} variant="whatsapp">
            Fale comigo pelo WhatsApp
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
