import { Users, Sprout, HeartHandshake, Check, type LucideIcon } from "lucide-react";
import { areas } from "@/content/areas";
import Reveal from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  sprout: Sprout,
  "heart-handshake": HeartHandshake,
};

export default function Areas() {
  return (
    <section id="atuacao" className="section-pad" aria-labelledby="atuacao-title">
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center">Áreas de atuação</span>
          <h2 id="atuacao-title" className="heading-2">
            Cuidado para cada fase da vida
          </h2>
          <p className="prose-soft mx-auto mt-5 max-w-2xl">
            Atendo diferentes públicos e demandas, sempre com um tom acolhedor e
            respeitando as particularidades de cada pessoa.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {areas.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal
                key={group.id}
                delay={i * 100}
                className={group.featured ? "lg:col-span-2" : ""}
              >
                <article className="h-full rounded-2xl bg-surface p-7 shadow-card ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        group.featured
                          ? "bg-accent/12 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-xl text-ink">
                          {group.audience}
                        </h3>
                        {group.featured && (
                          <span className="rounded-full bg-accent/12 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent-dark">
                            Foco principal
                          </span>
                        )}
                      </div>
                      {group.intro && (
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                          {group.intro}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul
                    className={`mt-5 grid gap-x-6 gap-y-2.5 ${
                      group.featured ? "sm:grid-cols-2" : ""
                    }`}
                  >
                    {group.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-ink-soft">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Não encontrou a sua demanda? Entre em contato — teremos prazer em
          conversar sobre como posso ajudar.
        </p>
      </div>
    </section>
  );
}
