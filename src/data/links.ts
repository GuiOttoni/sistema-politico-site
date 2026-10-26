// Fontes usadas no site. As URLs do Planalto, Senado, Câmara, CNJ, STF e TCU foram abertas e conferidas.
// Os endereços do TSE bloqueiam acesso automatizado (HTTP 403), mas abrem normalmente no navegador.
export type TipoLink = 'oficial' | 'apoio';

/**
 * md: endereço do mesmo texto em Markdown, no repositório ctresb/leis (conversão feita a partir das fontes oficiais).
 */
export interface Link { rotulo: string; url: string; tipo: TipoLink; md?: string }

const CF = 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm';
const o = (rotulo: string, url: string, md?: string): Link => ({ rotulo, url, tipo: 'oficial', md });
const s = (rotulo: string, url: string): Link => ({ rotulo, url, tipo: 'apoio' });

// Repositório de apoio com a legislação em Markdown: https://github.com/ctresb/leis
export const REPO_LEIS = 'https://github.com/ctresb/leis';
const md = (caminho: string) => `${REPO_LEIS}/blob/main/${caminho}`;
const MD_CF = md('constituicao.md');

/** Link para um artigo da Constituição Federal (texto compilado do Planalto). */
export const art = (n: string | number, extra = ''): Link =>
  o(`Constituição Federal, art. ${n}${extra ? ' ' + extra : ''}`, `${CF}#art${n}`, MD_CF);

export const L = {
  cf: o('Constituição Federal (texto compilado, Planalto)', CF, MD_CF),
  emendas: o('Emendas Constitucionais (quadro, Planalto)', 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/quadro_emc.htm'),
  ec97: o('Emenda Constitucional nº 97/2017', 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc97.htm', md('federal/emendas-constitucionais/2017/emc-97-2017-10-04.md')),
  lei14208: o('Lei nº 14.208/2021 (federações partidárias)', 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/L14208.htm', md('federal/leis-ordinarias/2021/lei-14208-2021-09-28.md')),
  lei14211: o('Lei nº 14.211/2021 (eleições proporcionais)', 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/L14211.htm', md('federal/leis-ordinarias/2021/lei-14211-2021-10-01.md')),
  lei9096: o('Lei nº 9.096/1995 (Lei dos Partidos Políticos)', 'https://www.planalto.gov.br/ccivil_03/leis/l9096.htm', md('federal/leis-ordinarias/1995/lei-9096-1995-09-19.md')),
  lei9504: o('Lei nº 9.504/1997 (Lei das Eleições)', 'https://www.planalto.gov.br/ccivil_03/leis/l9504.htm', md('federal/leis-ordinarias/1997/lei-9504-1997-09-30.md')),
  codigoEleitoral: o('Código Eleitoral (Lei nº 4.737/1965)', 'https://www.planalto.gov.br/ccivil_03/leis/l4737compilado.htm', md('federal/leis-ordinarias/1965/lei-4737-1965-07-15.md')),
  lc140: o('Lei Complementar nº 140/2011', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp140.htm', md('federal/leis-complementares/2011/lcp-140-2011-12-08.md')),
  lc135: o('Lei Complementar nº 135/2010 (Ficha Limpa)', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp135.htm', md('federal/leis-complementares/2010/lcp-135-2010-06-04.md')),
  lc95: o('Lei Complementar nº 95/1998 (elaboração das leis)', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm', md('federal/leis-complementares/1998/lcp-95-1998-02-26.md')),
  lei9709: o('Lei nº 9.709/1998 (plebiscito, referendo e iniciativa popular)', 'https://www.planalto.gov.br/ccivil_03/leis/l9709.htm', md('federal/leis-ordinarias/1998/lei-9709-1998-11-18.md')),
  lei8930: o('Lei nº 8.930/1994 (crimes hediondos)', 'https://www.planalto.gov.br/ccivil_03/leis/l8930.htm', md('federal/leis-ordinarias/1994/lei-8930-1994-09-06.md')),
  lei9840: o('Lei nº 9.840/1999 (compra de votos)', 'https://www.planalto.gov.br/ccivil_03/leis/l9840.htm', md('federal/leis-ordinarias/1999/lei-9840-1999-09-28.md')),
  lei11124: o('Lei nº 11.124/2005 (habitação de interesse social)', 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11124.htm', md('federal/leis-ordinarias/2005/lei-11124-2005-06-16.md')),
  lei8443: o('Lei nº 8.443/1992 (Lei Orgânica do TCU)', 'https://www.planalto.gov.br/ccivil_03/leis/l8443.htm', md('federal/leis-ordinarias/1992/lei-8443-1992-07-16.md')),
  manualRedacao: o('Manual de Redação da Presidência da República', 'https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica/manual-de-redacao.pdf'),

  senadoGuia: o('Guia do Senado para cidadãos', 'https://www12.senado.leg.br/noticias/especiais/especial-cidadania/guia-do-senado-para-cidadaos'),
  senadoParlamentar: o('Guia Parlamentar (Senado Federal)', 'https://www12.senado.leg.br/publicacoes/guias/senadores/guia-parlamentar/@@download/file/guia-parlamentar.pdf'),
  camaraProcesso: o('Processo Legislativo (Câmara dos Deputados)', 'https://www2.camara.leg.br/transparencia/acesso-a-informacao/copy_of_perguntas-frequentes/processo-legislativo'),
  camaraProporcional: o('Deputados são eleitos pelo voto proporcional (Câmara)', 'https://www.camara.leg.br/noticias/1300504-deputados-sao-eleitos-pelo-voto-proporcional-entenda-a-logica-desse-sistema'),
  camaraLai: o('Lei de Acesso à Informação: cartilha (Câmara)', 'https://bd.camara.leg.br/bd/bitstreams/7843cf33-b1d8-4460-892e-9d85974434cd/download'),
  eDemocracia: o('e-Democracia (Câmara dos Deputados)', 'https://edemocracia.camara.leg.br/'),
  fiscalize: o('Fiscalize o Orçamento (Câmara dos Deputados)', 'https://www2.camara.leg.br/orcamento-da-uniao/fiscalize'),
  congresso: o('Congresso Nacional', 'https://www.congressonacional.leg.br/'),
  lai: o('Acesso à Informação (gov.br)', 'https://www.gov.br/acessoainformacao/pt-br'),

  stf: o('Supremo Tribunal Federal', 'https://www.stf.jus.br/'),
  adi7228: s('ADI 7.228 (STF), texto em Markdown, com o ementário do julgamento das sobras', md('jurisprudencia/stf/controle-concentrado/adi-7228.md')),
  adi7263: s('ADI 7.263 (STF), texto em Markdown', md('jurisprudencia/stf/controle-concentrado/adi-7263.md')),
  repoLeis: s('Repositório ctresb/leis: legislação brasileira em Markdown', REPO_LEIS),
  stfArt71: o('STF: Constituição anotada, art. 71', 'https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirBase=CF&abrirArtigo=71'),
  stfFederacoes: o('STF valida lei que permite federações partidárias', 'https://noticias.stf.jus.br/postsnoticias/stf-valida-lei-que-permite-federacoes-partidarias/'),
  cnjPanorama: o('Panorama e estrutura do Poder Judiciário (CNJ)', 'https://www.cnj.jus.br/poder-judiciario/panorama-e-estrutura-do-poder-judiciario-brasileiro/'),
  cnjPapel: o('Conhecendo o Poder Judiciário e o papel do CNJ', 'https://www.cnj.jus.br/formacao-e-capacitacao/conhecendo-o-poder-judiciario-e-o-papel-do-cnj/'),
  tcu: o('Tribunal de Contas da União', 'https://portal.tcu.gov.br/'),

  tse: o('Tribunal Superior Eleitoral', 'https://www.tse.jus.br/'),
  tseFederacao: o('TSE: o que é uma federação partidária', 'https://www.tse.jus.br/comunicacao/noticias/2025/Julho/saiba-o-que-e-uma-federacao-partidaria'),
  tseBarreira: o('TSE: glossário eleitoral, cláusula de barreira', 'https://www.tse.jus.br/comunicacao/noticias/2023/Setembro/glossario-eleitoral-explica-o-que-e-clausula-de-barreira'),
  tseBarreira2026: o('TSE: cláusula de desempenho e o cenário de 2026', 'https://www.tse.jus.br/comunicacao/noticias/2026/Junho/clausula-de-desempenho-deve-influenciar-cenario-partidario-nas-eleicoes-2026'),
  tseRepresentatividade: o('TSE: representatividade partidária nas Eleições 2026', 'https://www.tse.jus.br/comunicacao/noticias/2026/Agosto/tse-divulga-representatividade-partidaria-para-tempo-de-propaganda-gratuita-nas-eleicoes-2026'),
  tseIA: o('TSE: regras sobre uso de IA na campanha de 2026', 'https://www.tse.jus.br/comunicacao/noticias/2026/Abril/por-dentro-das-eleicoes-conheca-as-regras-sobre-uso-de-ia-na-campanha-eleitoral-de-2026'),
  tseRes23610: o('TSE: Resolução nº 23.610/2019 (propaganda eleitoral)', 'https://www.tse.jus.br/legislacao/compilada/res/2019/resolucao-no-23-610-de-18-de-dezembro-de-2019'),
  tseVoto: o('TSE: depois da eleição é possível saber em quem o eleitor votou?', 'https://www.tse.jus.br/videos/10-10-2019-depois-das-eleicoes-e-possivel-saber-em-quem-o-eleitor-votou'),

  sobrasConjur: s('Conjur: STF mantém regra das sobras nas eleições de 2022', 'https://www.conjur.com.br/2025-jun-26/stf-mantem-aplicacao-de-regra-de-divisao-das-sobras-eleitorais-nas-eleicoes-de-2022/'),
  abranchesScielo: s('SciELO: Presidencialismo de coalizão, conceito e aplicação', 'https://www.scielo.br/j/rbcpol/a/fmVjS6nMXFZHFYBJ9jpwH9g/?lang=pt'),
  abranchesDados: s('Abranches (1988), “Presidencialismo de coalizão: o dilema institucional brasileiro”', 'https://politica3unifesp.files.wordpress.com/2013/01/74783229-presidencialismo-de-coalizao-sergio-abranches.pdf'),
  coalizaoRevisitado: s('Presidencialismo de coalizão revisitado (Ranking dos Políticos)', 'https://ranking.org.br/artigos/presidencialismo-de-coalizao-revisitado'),
  poder360Barreira: s('Poder360: só 11 partidos cumpririam a cláusula com as regras de 2030', 'https://www.poder360.com.br/poder-eleicoes-2026/so-11-partidos-cumpririam-clausula-de-desempenho-com-regras-de-2030/'),
};
