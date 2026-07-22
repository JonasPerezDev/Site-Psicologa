/* Áreas de atuação organizadas por público (briefing, seção 1.2).
   Foco principal de comunicação: Adolescentes e Adultos — sem excluir os demais. */

export type AudienceGroup = {
  id: string;
  audience: string;
  icon: "users" | "sprout" | "heart-handshake";
  featured?: boolean;
  // Texto de apresentação (opcional). Quando ausente, o card mostra só a lista.
  intro?: string;
  topics: string[];
};

export const areas: AudienceGroup[] = [
  {
    id: "adolescentes-adultos",
    audience: "Adolescentes e Adultos",
    icon: "users",
    featured: true,
    topics: [
      "Ansiedade (generalizada, crises, fobias e ataques de pânico)",
      "Depressão e sintomas depressivos",
      "Transtorno Bipolar (psicoeducação, adesão ao tratamento e prevenção de recaídas)",
      "Regulação emocional e manejo de emoções intensas",
      "Compulsão alimentar e relação emocional com a comida",
      "Autoestima e autoimagem",
      "Luto e perdas",
      "Relacionamentos (familiares, conjugais e interpessoais)",
      "Estresse, esgotamento (burnout) e dificuldades no trabalho",
    ],
  },
  {
    id: "criancas",
    audience: "Crianças",
    icon: "sprout",
    intro:
      "Acolhimento cuidadoso e adaptado a cada fase do desenvolvimento infantil.",
    topics: [
      "Ansiedade",
      "Dificuldades de regulação emocional",
      "Comportamentos repetitivos (roer unhas, morder dedos)",
      "Habilidades sociais",
      "Dificuldades comportamentais",
    ],
  },
  {
    id: "idosos",
    audience: "Idosos",
    icon: "heart-handshake",
    intro:
      "Suporte respeitoso ao paciente idoso e à sua rede de apoio familiar.",
    topics: [
      "Transtorno do pânico",
      "Suporte a familiares em casos de comprometimento cognitivo",
      "Envelhecimento saudável e adaptação às mudanças do ciclo de vida",
      "Manejo de ansiedade, depressão e sintomas relacionados ao envelhecimento",
      "Intervenção em processos de luto e perdas",
      "Promoção de autonomia e qualidade de vida",
      "Estimulação cognitiva e estratégias de manutenção das funções cognitivas",
      "Psicoeducação para pacientes e familiares",
    ],
  },
];
