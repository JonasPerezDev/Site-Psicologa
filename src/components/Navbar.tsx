"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do fundo quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-sand/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-site flex h-20 items-center justify-between"
        aria-label="Navegação principal"
      >
        <a
          href="#top"
          className="flex flex-col leading-none"
          aria-label={`${site.name}, ir para o topo`}
        >
          <span className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            {site.name}
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
            Psicóloga · {site.crp}
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all duration-200 hover:scale-[1.03] hover:bg-accent-dark active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agende pelo WhatsApp
          </a>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="container-site border-t border-black/5 bg-sand pb-8 pt-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-base font-semibold text-white shadow-card"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Agende pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
