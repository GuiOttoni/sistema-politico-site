import type { Tone } from '../lib/tones';

export type Nivel = 1 | 2 | 3;

export interface Etapa {
  slug: string;
  titulo: string;
  emoji: string;
  nivel: Nivel;
  tone: Tone;
  resumo: string;
  tempo: string;
}

export const niveis: Record<Nivel, { nome: string; descricao: string }> = {
  1: { nome: 'Básico', descricao: 'O essencial para entender como o país funciona.' },
  2: { nome: 'Intermediário', descricao: 'Como leis, tribunais e eleições operam na prática.' },
  3: { nome: 'Avançado', descricao: 'Regras finas, jurisprudência e ciência política.' },
};

export const trilha: Etapa[] = [
  { slug: 'constituicao', titulo: 'A Constituição e os 4 pilares', emoji: '📜', nivel: 1, tone: 'lilac', tempo: '6 min',
    resumo: 'República, Federação, Presidencialismo e Democracia: o que cada palavra quer dizer.' },
  { slug: 'poderes', titulo: 'Os Três Poderes', emoji: '⚖️', nivel: 1, tone: 'sky', tempo: '7 min',
    resumo: 'Legislativo, Executivo e Judiciário — e como um vigia o outro (freios e contrapesos).' },
  { slug: 'cargos', titulo: 'Quem eu elejo?', emoji: '🗳️', nivel: 1, tone: 'mint', tempo: '5 min',
    resumo: 'Presidente, senador, deputado, vereador… mandato, voto e função de cada um.' },
  { slug: 'federacao', titulo: 'Quem faz o quê?', emoji: '🏛️', nivel: 1, tone: 'peach', tempo: '6 min',
    resumo: 'União, Estados e Municípios: descubra quem cuida da creche, do gás e do Código Penal.' },
  { slug: 'leis', titulo: 'Como nasce uma lei', emoji: '🛤️', nivel: 2, tone: 'butter', tempo: '8 min',
    resumo: 'Do projeto à sanção, e como o cidadão pode propor leis de verdade.' },
  { slug: 'justica', titulo: 'Justiça e fiscalização', emoji: '🔎', nivel: 2, tone: 'rose', tempo: '9 min',
    resumo: 'Tribunais, Ministério Público, Defensoria e o Tribunal de Contas.' },
  { slug: 'eleicoes', titulo: 'Como o voto vira cadeira', emoji: '🧮', nivel: 2, tone: 'mint', tempo: '8 min',
    resumo: 'Voto majoritário x proporcional, com calculadora do quociente eleitoral.' },
  { slug: 'partidos', titulo: 'Partidos, barreira e IA nas eleições', emoji: '🏷️', nivel: 3, tone: 'lilac', tempo: '8 min',
    resumo: 'Cláusula de desempenho, federações e as regras de 2026 para inteligência artificial.' },
  { slug: 'coalizao', titulo: 'Presidencialismo de coalizão', emoji: '🤝', nivel: 3, tone: 'sky', tempo: '7 min',
    resumo: 'Como o presidente governa sem maioria — e o que mudou com as emendas e o STF.' },
];

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (slug = '') => `${base}/${slug}${slug ? '/' : ''}`;
