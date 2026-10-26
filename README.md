# Sistema Político do Brasil

Guia interativo e didático sobre o sistema político brasileiro, do básico ao avançado. Cada etapa tem uma parte **Básica** (o essencial, em linguagem simples) e uma parte **Avançada** (detalhes técnicos), com cards, simuladores, exercícios e links para fontes oficiais.

Baseado na pesquisa “Arquitetura Institucional e Dinâmica Política do Brasil” e conferido com a Constituição Federal (Planalto) e outras fontes oficiais. O resultado da conferência está na página `/validacao/`.

## Tecnologias

- [Astro](https://astro.build/) 7 (páginas estáticas, sem framework de UI)
- [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`)
- [Material Symbols](https://fonts.google.com/icons) (ícones) e Google Fonts (Fraunces e Nunito)
- Node.js 22 ou superior

## Como rodar

```bash
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # gera o site estático em dist/
npm run preview   # serve o build localmente
npm test          # testes da calculadora eleitoral
```

## Deploy no Netlify

O arquivo `netlify.toml` já está configurado:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 22

No Netlify, escolha **Add new site → Import an existing project**, conecte este repositório e confirme as configurações sugeridas.

## Estrutura do projeto

```
.
├── public/                  Arquivos estáticos (favicon, robots.txt)
├── src/
│   ├── pages/               Uma página por etapa da trilha (rotas do site)
│   ├── layouts/             Base.astro: HTML, cabeçalho, rodapé e fontes
│   ├── components/
│   │   ├── layout/          Estrutura das etapas: PageHeader, PageNav, LevelBlock (Básico/Avançado)
│   │   └── ui/              Peças reutilizáveis: Icon, Callout, InfoCard, Quiz, Section, Fonte
│   ├── data/
│   │   ├── paginas/         Conteúdo de cada página (textos, listas, dados dos simuladores)
│   │   ├── trilha.ts        Lista de etapas, grupos e helper de URLs
│   │   ├── links.ts         Fontes oficiais (Planalto, Senado, Câmara, STF, CNJ, TCU, TSE)
│   │   ├── validacao.ts     Itens da página de conferência (confirmado, corrigido, pendente)
│   │   └── referencias.json As 80 referências da pesquisa original
│   ├── lib/
│   │   ├── eleitoral.js     Cálculo do quociente eleitoral e das sobras (com testes)
│   │   └── tones.ts         Cores pastel usadas nos cards
│   └── styles/global.css    Tailwind e tema (cores, fontes, classes utilitárias)
├── tests/                   Testes automatizados (node:test)
├── astro.config.mjs
├── netlify.toml
└── tsconfig.json            Alias @/ aponta para src/
```

## Como adicionar ou editar conteúdo

- **Texto e dados de uma etapa:** edite `src/data/paginas/<etapa>.ts` (listas, cards, simuladores) ou a página em `src/pages/<etapa>.astro` (textos e exercícios).
- **Nova etapa:** crie `src/pages/<slug>.astro`, `src/data/paginas/<slug>.ts` e adicione a etapa em `src/data/trilha.ts`.
- **Nova fonte oficial:** adicione em `src/data/links.ts` e use no componente `<Fonte itens={[...]} />`.
- **Nova checagem:** adicione um item em `src/data/validacao.ts`.
- **Ícones:** use o nome do ícone em <https://fonts.google.com/icons> (por exemplo, `balance`) com `<Icon name="balance" />`.

## Regras de conteúdo

- Linguagem simples e formal, sem gírias.
- Toda informação factual deve ter fonte. Prefira o texto oficial (Constituição no Planalto, leis, STF, CNJ, TCU, TSE).
- O que não puder ser confirmado deve aparecer como “não confirmado” em `validacao.ts`.

## Observação sobre links do TSE

Os endereços de `tse.jus.br` bloqueiam acesso automatizado (HTTP 403), mas abrem normalmente em navegadores.
