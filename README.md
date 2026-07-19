# Site — Camila Perez (Psicóloga)

Site profissional de captação da psicóloga **Camila Perez** (CRP 06/213789), com foco em **Terapia Cognitivo-Comportamental (TCC)**. Construído em **Next.js (App Router) + React + TypeScript + Tailwind CSS**, exportado como site estático.

## Como rodar

```bash
npm install        # instala as dependências (só na primeira vez)
npm run dev        # ambiente de desenvolvimento em http://localhost:3000
npm run build      # gera o site estático na pasta out/ (pronto para publicar)
```

O `npm run build` gera a pasta `out/` com HTML/CSS/JS puros — pode ser publicada em **Vercel**, **Netlify**, **GitHub Pages** ou qualquer hospedagem estática.

## Estrutura

```
src/
  app/
    layout.tsx        # fontes, SEO (metadata + Open Graph) e dados estruturados (schema.org)
    page.tsx          # home (página única com âncoras)
    conteudos/page.tsx# página de blog/artigos
    globals.css       # PALETA DE CORES fica aqui
    icon.svg          # favicon
  components/         # Navbar, Hero, About, Approach, Areas, Services, Faq, Contact, Footer...
                      # ImageCarousel.tsx (fotos do Sobre) e Reveal.tsx (animação de entrada ao rolar)
  config/site.ts      # DADOS DE CONTATO (WhatsApp, Instagram, nome, CRP) — edite aqui
  content/            # areas.ts (áreas de atuação), faq.ts (FAQ), posts.ts (artigos)
public/
  images/             # camila-1.jpg, camila-2.jpg, camila-3.jpg — fotos da seção Sobre
  og-image.svg, robots.txt
```

## Fotos da seção Sobre

A seção "Sobre" exibe um carrossel (`src/components/ImageCarousel.tsx`) que alterna automaticamente entre as 3 fotos em `public/images/` a cada 3 segundos, com transição suave (crossfade). Para trocar ou adicionar fotos, edite o array `images` no topo do arquivo.

## ⚠️ Pendências a preencher antes de publicar

Todas as informações que faltam foram centralizadas em poucos arquivos, com comentários indicando exatamente onde trocar:

| Pendência | Onde editar |
|---|---|
| **Cores oficiais** (a cliente acredita já ter enviado) | `src/app/globals.css` → bloco `:root` marcado como "PALETA PLACEHOLDER". Basta trocar os valores RGB. |
| **Artigos/vídeos reais** | `src/content/posts.ts` → substitua os 3 posts placeholder pelos reais (ou deixe o array vazio `[]` para exibir "conteúdos em breve"). |
| **Domínio próprio** | `src/config/site.ts` → campo `url` (usado no SEO). Ajuste também `public/robots.txt`. |

O número de WhatsApp e as fotos profissionais já estão configurados.

## Decisões de conteúdo importantes (não alterar sem intenção)

Conforme o briefing e as normas do **Conselho Federal de Psicologia (CFP)**:

- ❌ **Não** há menção a tempo de atuação ("X anos de experiência") — a cliente pediu explicitamente para omitir.
- ❌ **Não** há seção de depoimentos/testemunhos de pacientes — vedado pelas normas de publicidade do CFP.
- ✅ Formação **USP / IPQ-HCFMUSP** e a abordagem **TCC** aparecem com destaque.
- ✅ Menção ao **sigilo** e ao **Código de Ética do Psicólogo**.

> Observação: antes de publicar, a cliente pode confirmar a redação final das seções "Sobre" e "FAQ" com o CRP de sua região.

## Acessibilidade e SEO

- FAQ em accordion nativo (`<details>`), navegável por teclado e leitor de tela, com abertura animada via CSS (sem JavaScript).
- Animações de entrada ao rolar a página (`Reveal.tsx`) e demais transições respeitam `prefers-reduced-motion`.
- `title`, `meta description`, Open Graph e JSON-LD (`schema.org`) com Jacareí como área de atendimento.
- Mobile-first, contraste adequado, foco visível para navegação por teclado.
