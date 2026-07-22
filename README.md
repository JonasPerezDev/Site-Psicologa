# Site — Camila Perez (Psicóloga)

Site profissional de captação da psicóloga **Camila Perez** (CRP 06/213789), com foco em **Terapia Cognitivo-Comportamental (TCC)**. Construído em **Next.js (App Router) + React + TypeScript + Tailwind CSS**, exportado como site estático.

## Como rodar

```bash
npm install        # instala as dependências (só na primeira vez)
npm run dev        # ambiente de desenvolvimento em http://localhost:3000
npm run build      # gera o site estático na pasta out/ (pronto para publicar)
```

O `npm run build` gera a pasta `out/` com HTML/CSS/JS puros — pode ser publicada em **Vercel**, **Netlify**, **GitHub Pages** ou qualquer hospedagem estática.

### Se o site aparecer sem CSS (todo desformatado)

Isso acontecia quando `npm run build` rodava com o `npm run dev` ligado: os dois gravavam na mesma pasta `.next` e o build apagava os arquivos que o servidor de desenvolvimento estava usando.

**Já está resolvido** — o `next.config.mjs` coloca o modo de desenvolvimento numa pasta separada (`.next-dev`), então dá para rodar os dois ao mesmo tempo sem conflito.

Se mesmo assim acontecer, o conserto é: parar o servidor, apagar as pastas `.next` e `.next-dev`, e rodar `npm run dev` de novo.

## Estrutura

```
src/
  app/
    layout.tsx        # fontes, SEO (metadata + Open Graph) e dados estruturados (schema.org)
    page.tsx          # home (página única com âncoras)
    globals.css       # PALETA DE CORES fica aqui
    icon.svg          # favicon
  components/         # Navbar, Hero, About, Approach, Areas, Services, Faq, Contact, Footer...
                      # ImageCarousel.tsx (fotos do Sobre) e Reveal.tsx (animação de entrada ao rolar)
  config/site.ts      # DADOS DE CONTATO (WhatsApp, Instagram, nome, CRP) — edite aqui
  content/            # areas.ts (áreas de atuação), faq.ts (FAQ)
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
| **Domínio próprio** | `src/config/site.ts` → campo `url` (usado no SEO). Ajuste também `public/robots.txt`. |

> A seção de "Conteúdos/Blog" foi removida a pedido (não havia material pronto). Se um dia a Camila quiser publicar artigos/vídeos, dá para reintroduzir a seção — a estrutura é simples de refazer.

O número de contato (WhatsApp Business **(12) 3351-3285**) e as fotos profissionais já estão configurados. Para trocar o número, edite `WHATSAPP_NUMBER` e `PHONE_DISPLAY` em `src/config/site.ts`.

## Decisões de conteúdo importantes (não alterar sem intenção)

Conforme o briefing e as normas do **Conselho Federal de Psicologia (CFP)**:

- ❌ **Não** há menção a tempo de atuação ("X anos de experiência") — a cliente pediu explicitamente para omitir.
- ❌ **Não** há seção de depoimentos/testemunhos de pacientes — vedado pelas normas de publicidade do CFP.
- ❌ **Não** mencionar a graduação na Anhembi Morumbi — a Camila pediu para omitir.
- ✅ O nome usado é sempre **"Camila Perez"** (sem o nome completo).
- ✅ A especialização **IPQ-HCFMUSP (USP)** e a abordagem **TCC** aparecem com destaque.
- ✅ **Online sempre antes de presencial** — é a modalidade com maior volume de atendimentos.
- ✅ Menção ao **sigilo** e ao **Código de Ética do Psicólogo**.

> Observação: antes de publicar, a cliente pode confirmar a redação final das seções "Sobre" e "FAQ" com o CRP de sua região.

## Acessibilidade e SEO

- FAQ em accordion nativo (`<details>`), navegável por teclado e leitor de tela, com abertura animada via CSS (sem JavaScript).
- Animações de entrada ao rolar a página (`Reveal.tsx`) e demais transições respeitam `prefers-reduced-motion`.
- `title`, `meta description`, Open Graph e JSON-LD (`schema.org`) com Jacareí como área de atendimento.
- Mobile-first, contraste adequado, foco visível para navegação por teclado.
