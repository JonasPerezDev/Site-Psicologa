import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/*
  A configuração é exportada como FUNÇÃO para receber a "fase" atual do Next
  (desenvolvimento ou build). Isso é necessário para separar as pastas de
  trabalho — ver comentário do `distDir` abaixo.
*/

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Export estático — gera HTML/CSS/JS puros na pasta `out/`,
  // compatível com Vercel, Netlify, GitHub Pages ou qualquer hospedagem estática.
  output: "export",
  images: {
    // Necessário no modo export (sem servidor de otimização de imagem).
    unoptimized: true,
  },

  /*
    IMPORTANTE — pastas de trabalho separadas para `dev` e `build`.

    Por padrão os dois usam a mesma pasta `.next`. Se você rodar `npm run build`
    com o servidor de desenvolvimento ligado, o build sobrescreve os arquivos do
    dev e o site passa a aparecer SEM CSS (o navegador recebe 404 ao buscar os
    estilos e scripts). Só voltava ao normal apagando `.next` e reiniciando.

    Solução: o servidor de desenvolvimento usa a pasta separada `.next-dev`,
    enquanto o build segue o padrão do Next (`.next`, publicando em `out/`).
    Assim os dois rodam ao mesmo tempo sem conflito e o processo de publicação
    continua exatamente como na documentação oficial.

    Obs.: o teste precisa ser pela fase, e não por `NODE_ENV` — o Next carrega
    este arquivo ANTES de definir `NODE_ENV=production` no build.
  */
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});

export default nextConfig;
