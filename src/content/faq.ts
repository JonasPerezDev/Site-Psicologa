/* FAQ — conteúdo literal fornecido pela cliente (briefing, seção 2.4). */

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta. Conversaremos sobre sua história, suas necessidades e objetivos para que possamos construir juntos um plano terapêutico.",
  },
  {
    question: "Como saber se preciso de psicoterapia?",
    answer:
      "Se você tem enfrentado dificuldades emocionais, ansiedade, tristeza, conflitos nos relacionamentos, estresse ou sente que precisa de um espaço para se conhecer melhor e desenvolver estratégias para lidar com os desafios da vida, a psicoterapia pode ser uma excelente opção.",
  },
  {
    question: "Você atende crianças, adolescentes e adultos?",
    answer:
      "Sim. Realizo atendimento psicológico para crianças, adolescentes, adultos e idosos, sempre respeitando as necessidades e particularidades de cada fase da vida.",
  },
  {
    question: "Os atendimentos são online ou presenciais?",
    answer:
      "Realizo atendimentos online para todo o Brasil e também presenciais em Jacareí - SP, oferecendo flexibilidade e conforto para o paciente.",
  },
  {
    question: "Qual é a duração e a frequência das sessões?",
    answer:
      "As sessões têm duração média de 50 minutos e, geralmente, acontecem uma vez por semana. A frequência pode ser ajustada conforme a necessidade de cada paciente.",
  },
  {
    question: "Qual abordagem terapêutica você utiliza?",
    answer:
      "Trabalho com a Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências científicas que auxilia na compreensão e mudança de pensamentos, emoções e comportamentos.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode entrar em contato pelo WhatsApp ou pelos canais disponíveis neste site para agendar sua primeira sessão.",
  },
  {
    question: "O atendimento é sigiloso?",
    answer:
      "Sim. Todo o atendimento é conduzido com absoluto sigilo e ética profissional, conforme o Código de Ética do Psicólogo.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "As formas de pagamento serão informadas no momento do agendamento. Caso tenha dúvidas, entre em contato.",
  },
];
