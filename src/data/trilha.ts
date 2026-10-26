import type { Tone } from '../lib/tones';

export interface Etapa {
  slug: string;
  titulo: string;
  icon: string; // nome do ícone no Material Symbols (fonts.google.com/icons)
  tone: Tone;
  grupo: string;
  resumo: string;
  tempo: string;
}

export const grupos = [
  { nome: 'Fundamentos do Estado', descricao: 'A base: Constituição, poderes, cargos e divisão de tarefas.' },
  { nome: 'Leis e Justiça', descricao: 'Como as leis são feitas e como são aplicadas e fiscalizadas.' },
  { nome: 'Eleições e política', descricao: 'Como o voto vira mandato e como o governo se organiza no dia a dia.' },
];

export const trilha: Etapa[] = [
  { slug: 'constituicao', titulo: 'A Constituição e os 4 pilares', icon: 'menu_book', tone: 'lilac', grupo: grupos[0].nome, tempo: '7 min',
    resumo: 'República, Federação, Presidencialismo e Democracia: o que cada termo significa.' },
  { slug: 'poderes', titulo: 'Os Três Poderes', icon: 'balance', tone: 'sky', grupo: grupos[0].nome, tempo: '8 min',
    resumo: 'Legislativo, Executivo e Judiciário, e como um fiscaliza o outro.' },
  { slug: 'cargos', titulo: 'Quem eu elejo?', icon: 'how_to_vote', tone: 'mint', grupo: grupos[0].nome, tempo: '6 min',
    resumo: 'Presidente, governador, prefeito, senador, deputado e vereador: mandato, voto e funções.' },
  { slug: 'federacao', titulo: 'Quem faz o quê?', icon: 'account_balance', tone: 'peach', grupo: grupos[0].nome, tempo: '8 min',
    resumo: 'O que cabe à União, aos Estados e aos Municípios, com um simulador de situações do dia a dia.' },
  { slug: 'leis', titulo: 'Como uma lei é criada', icon: 'description', tone: 'butter', grupo: grupos[1].nome, tempo: '9 min',
    resumo: 'Do projeto à sanção, e como o cidadão pode participar.' },
  { slug: 'justica', titulo: 'Justiça e fiscalização', icon: 'gavel', tone: 'rose', grupo: grupos[1].nome, tempo: '10 min',
    resumo: 'Tribunais, Ministério Público, Defensoria e Tribunal de Contas.' },
  { slug: 'eleicoes', titulo: 'Como o voto vira cadeira', icon: 'calculate', tone: 'mint', grupo: grupos[2].nome, tempo: '9 min',
    resumo: 'Voto majoritário e proporcional, com calculadora do quociente eleitoral.' },
  { slug: 'partidos', titulo: 'Partidos e regras de 2026', icon: 'flag', tone: 'lilac', grupo: grupos[2].nome, tempo: '9 min',
    resumo: 'O que é um partido, a cláusula de desempenho, as federações e as regras sobre inteligência artificial.' },
  { slug: 'coalizao', titulo: 'Como o presidente governa', icon: 'handshake', tone: 'sky', grupo: grupos[2].nome, tempo: '8 min',
    resumo: 'Por que o presidente precisa formar alianças no Congresso (presidencialismo de coalizão).' },
];

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (slug = '') => `${base}/${slug}${slug ? '/' : ''}`;
