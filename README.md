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

## Acessibilidade e SEO

- FAQ em accordion nativo (`<details>`), navegável por teclado e leitor de tela, com abertura animada via CSS (sem JavaScript).
- Animações de entrada ao rolar a página (`Reveal.tsx`) e demais transições respeitam `prefers-reduced-motion`.
- `title`, `meta description`, Open Graph e JSON-LD (`schema.org`) com Jacareí como área de atendimento.
- Mobile-first, contraste adequado, foco visível para navegação por teclado.
