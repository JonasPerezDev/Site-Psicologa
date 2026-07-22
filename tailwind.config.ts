import type { Config } from "tailwindcss";

/*
  As cores usam CSS variables definidas em src/app/globals.css.
  Para trocar a paleta oficial, edite APENAS os valores em globals.css.
*/
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Marca (verde-azulado suave — competência + calma)
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        // Accent (terracota suave — CTAs, acolhimento)
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          dark: "rgb(var(--color-accent-dark) / <alpha-value>)",
        },
        // Neutros quentes
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          soft: "rgb(var(--color-ink-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        // Ligadas às variáveis do next/font em layout.tsx
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgb(15 45 45 / 0.15)",
        card: "0 4px 24px -8px rgb(15 45 45 / 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(0, -18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(12px, 14px) scale(1.04)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.15", transform: "scale(1.35)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
