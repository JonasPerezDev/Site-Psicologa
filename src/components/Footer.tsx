import { Instagram, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-sand">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-serif text-2xl font-semibold text-ink">
              {site.name}
            </span>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Psicóloga Clínica · {site.crp}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              Terapia Cognitivo-Comportamental para adolescentes, adultos,
              crianças e idosos. Atendimento online e presencial em {site.city}.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-sm font-semibold text-ink">Navegação</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-ink">Contato</h2>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp · {site.phoneDisplay}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {site.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/5 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.crp}. Todos os direitos reservados.
          </p>
          <p className="max-w-md sm:text-right">
            Atendimento sigiloso e ético, conforme o Código de Ética Profissional
            do Psicólogo.
          </p>
        </div>
      </div>
    </footer>
  );
}
