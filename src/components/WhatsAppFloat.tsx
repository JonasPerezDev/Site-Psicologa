import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

// Botão flutuante fixo no canto inferior direito — presente em toda a página.
export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende uma conversa pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-accent py-3 pl-3 pr-4 text-white shadow-soft transition-transform duration-200 hover:scale-[1.03] hover:bg-accent-dark sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-white/40"
        />
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="hidden pr-1 text-sm font-semibold sm:inline">
        Agende pelo WhatsApp
      </span>
    </a>
  );
}
