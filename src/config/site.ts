/* =============================================================================
   CONFIGURAÇÃO CENTRAL DO SITE — Camila Perez
   -----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para atualizar os dados de
   contato e identidade. Todos os componentes leem daqui.
   ============================================================================= */

/*  Número de contato (WhatsApp Business).
    Formato internacional, SÓ dígitos: 55 (país) + DDD + número.
    Para trocar: edite as duas constantes abaixo.
*/
const WHATSAPP_NUMBER = "551233513285"; // (12) 3351-3285
const PHONE_DISPLAY = "(12) 3351-3285"; // como aparece na tela

// Mensagem que já vem escrita quando o paciente abre o WhatsApp.
const WHATSAPP_MESSAGE =
  "Olá, Camila! Vim pelo seu site e gostaria de saber mais sobre os atendimentos.";

export const site = {
  // A Camila prefere ser identificada apenas como "Camila Perez" em todo o site.
  name: "Camila Perez",
  role: "Psicóloga Clínica",
  crp: "CRP 06/213789",
  approach: "Terapia Cognitivo-Comportamental (TCC)",
  city: "Jacareí - SP",
  region: "Jacareí - SP",

  // Contatos
  whatsappNumber: WHATSAPP_NUMBER,
  phoneDisplay: PHONE_DISPLAY,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`,
  instagramHandle: "@apsidoprimeiroandar",
  instagramUrl: "https://instagram.com/apsidoprimeiroandar",

  // SEO / URL pública (ajuste quando definir o domínio)
  url: "https://camilaperez.psi.br",
} as const;

// Itens de navegação (âncoras da página única).
export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Serviços", href: "#servicos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;
