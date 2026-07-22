import { MessageCircle, Instagram, MapPin, Lock } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/config/site";

export default function Contact() {
  return (
    <section
      id="contato"
      className="section-pad"
      aria-labelledby="contato-title"
    >
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary text-white shadow-soft">
          {/* Detalhe decorativo sutil */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow !text-primary-light">Contato</span>
              <h2
                id="contato-title"
                className="font-serif text-3xl leading-tight sm:text-4xl"
              >
                Vamos conversar?
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
                Dar o primeiro passo já é um ato de cuidado consigo. Entre em
                contato para agendar sua primeira sessão — o canal mais rápido é
                o WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 text-ink shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-ink-soft">
                      WhatsApp · {site.phoneDisplay}
                    </span>
                    <span className="font-semibold">Agende sua sessão</span>
                  </span>
                </a>

                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <Instagram className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/70">Instagram</span>
                    <span className="font-semibold">{site.instagramHandle}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary-light" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-lg">Onde atendo</h3>
                  <p className="mt-1 text-white/80">
                    <strong>Online</strong> para todo o Brasil e presencial em{" "}
                    <strong>{site.city}</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Lock className="mt-1 h-6 w-6 shrink-0 text-primary-light" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-lg">Sigilo garantido</h3>
                  <p className="mt-1 text-white/80">
                    Todo atendimento é conduzido com absoluto sigilo e ética
                    profissional, conforme o Código de Ética do Psicólogo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
