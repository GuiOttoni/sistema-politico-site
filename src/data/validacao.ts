import { art, L, type Link } from '@/data/links';

export type Status = 'confirmado' | 'corrigido' | 'pendente';

export interface Item { pagina: string; afirmacao: string; status: Status; nota?: string; fonte: Link[] }

export const dataConferencia = '25/10/2026';

// "confirmado": o texto oficial (Planalto etc.) foi lido e bate com o que o site afirma.
// "corrigido": a pesquisa em PDF trazia outra informação e o site segue a fonte oficial.
// "pendente": não foi possível confirmar em fonte oficial; vem da pesquisa ou de fonte de apoio.
export const itens: Item[] = [
  // Confirmados no texto compilado da Constituição (Planalto)
  { pagina: 'Cargos', afirmacao: 'Cada Estado e o DF elegem 3 senadores, com mandato de 8 anos.', status: 'confirmado', fonte: [art(46)] },
  { pagina: 'Poderes', afirmacao: 'O Congresso derruba o veto por maioria absoluta de deputados e senadores, em sessão conjunta.', status: 'confirmado', fonte: [art(66)] },
  { pagina: 'Constituição', afirmacao: 'São cláusulas pétreas: forma federativa, voto direto, secreto, universal e periódico, separação dos Poderes e direitos individuais.', status: 'confirmado', fonte: [art('60', '(§ 4º)')] },
  { pagina: 'Leis', afirmacao: 'Iniciativa popular federal: 1% do eleitorado, em 5 Estados, com 0,3% em cada um.', status: 'confirmado', fonte: [art('61', '(§ 2º)')] },
  { pagina: 'Leis', afirmacao: 'Iniciativa popular municipal: 5% do eleitorado.', status: 'confirmado', fonte: [art('29', '(inciso XIII)')] },
  { pagina: 'Leis', afirmacao: 'Medida Provisória não votada em 45 dias entra em regime de urgência e tranca a pauta da Casa.', status: 'confirmado', fonte: [art('62', '(§ 6º)')] },
  { pagina: 'Eleições', afirmacao: 'Prefeito: regras do art. 77 (maioria absoluta e 2º turno) para municípios com mais de 200 mil eleitores.', status: 'confirmado', fonte: [art('29', '(inciso II)'), art(77)] },
  { pagina: 'Justiça', afirmacao: 'O STF tem 11 ministros; o STJ, no mínimo 33; o TST, 27; o STM, 15; o TCU, 9.', status: 'confirmado', fonte: [art(101), art(104), art('111-A'), art(123), art(73)] },
  { pagina: 'Justiça', afirmacao: 'O TCU emite parecer prévio sobre as contas do Presidente em até 60 dias.', status: 'confirmado', fonte: [art('71', '(inciso I)'), L.stfArt71] },
  { pagina: 'Justiça', afirmacao: 'O parecer do Tribunal de Contas sobre as contas do prefeito só deixa de prevalecer por 2/3 da Câmara Municipal.', status: 'confirmado', fonte: [art('31', '(§ 2º)')] },
  { pagina: 'Federação', afirmacao: 'Exploração do gás canalizado é competência dos Estados; é vedada Medida Provisória para regulamentá-la.', status: 'confirmado', fonte: [art('25', '(§ 2º)')] },
  { pagina: 'Partidos', afirmacao: 'Metas da cláusula de desempenho: 1,5% e 9 deputados (2018); 2% e 11 (2022); 2,5% e 13 (2026); 3% e 15 (2030 em diante). Mínimo por UF: 1%, 1%, 1,5% e 2%.', status: 'confirmado', fonte: [L.ec97, art('17', '(§ 3º)')] },
  { pagina: 'Partidos', afirmacao: 'O eleito por partido que não atingir a cláusula mantém o mandato e pode migrar sem perdê-lo.', status: 'confirmado', fonte: [art('17', '(§ 5º)')] },
  { pagina: 'Eleições', afirmacao: 'Quociente eleitoral: fração igual ou menor que 0,5 é desprezada; maior que 0,5 arredonda para cima.', status: 'confirmado', nota: 'Regra do Código Eleitoral, art. 106; a calculadora do site tem testes automatizados para esse caso.', fonte: [L.codigoEleitoral] },
  { pagina: 'Partidos', afirmacao: 'A Resolução TSE nº 23.755/2026 (2/3/2026) alterou a Res. 23.610/2019: rotulagem de conteúdo de IA e proibição de novos conteúdos sintéticos de 72 h antes a 24 h depois da votação.', status: 'confirmado', nota: 'Confirmado por notícias da imprensa e pelo TSE. O texto integral da resolução não pôde ser aberto de forma automática (o site do TSE bloqueia acesso automatizado); confira no link.', fonte: [L.tseIA, L.tseRes23610] },

  // Corrigidos em relação ao PDF
  { pagina: 'Constituição', afirmacao: 'Número de emendas constitucionais.', status: 'corrigido', nota: 'A pesquisa em PDF cita “148 emendas” (138 ordinárias, 6 de revisão e 4 tratados). O quadro oficial do Planalto lista 141 emendas constitucionais (a mais recente, EC 141, de 16/10/2026) e 6 emendas de revisão. O site usa o número oficial.', fonte: [L.emendas] },
  { pagina: 'Eleições', afirmacao: 'Números das ações do STF sobre as sobras eleitorais.', status: 'corrigido', nota: 'O PDF cita as ADIs 7228, 7263 e 7311. O ementário do STF, reproduzido no repositório ctresb/leis (a partir do Banco Nacional de Precedentes do CNJ), cita “ADIs 7.228, 7.263 e 7.325 (distribuição das sobras eleitorais)” e a ADI 7311 não consta do acervo. O site usa 7.325. O número ainda pode ser conferido no portal do STF.', fonte: [L.adi7228, L.adi7263, L.sobrasConjur, L.stf] },
  { pagina: 'Eleições', afirmacao: 'Época da decisão do STF sobre as sobras.', status: 'corrigido', nota: 'O PDF apresenta a decisão como novidade de 2026. A decisão é de 2024 e, em junho de 2025, o STF confirmou que vale também para as eleições de 2022.', fonte: [L.sobrasConjur] },
  { pagina: 'Partidos', afirmacao: 'Federações partidárias vigentes.', status: 'corrigido', nota: 'O PDF lista três (PT-PCdoB-PV, PSDB-Cidadania, PSOL-Rede). O quadro do TSE para 2026 lista cinco: União Progressista, Brasil da Esperança, PSDB-Cidadania, PSOL-Rede e Renovação Solidária.', fonte: [L.tseRepresentatividade] },

  // Pendentes
  { pagina: 'Eleições', afirmacao: 'Resolução TSE nº 23.748/2026 (aplicação da decisão do STF sobre sobras).', status: 'pendente', nota: 'Citada no PDF. Não foi localizada em fonte oficial, por isso não aparece no texto do site.', fonte: [L.tse] },
  { pagina: 'Partidos', afirmacao: 'Resolução TSE nº 23.757/2026.', status: 'pendente', nota: 'Citada no PDF junto com a 23.755. Não foi localizada, por isso não aparece no texto do site.', fonte: [L.tse] },
  { pagina: 'Partidos', afirmacao: 'Sanções por descumprir as regras de IA, como cassação de registro ou diploma e inelegibilidade.', status: 'pendente', nota: 'Consta do PDF. Os resultados conferidos só confirmam a obrigação de rotulagem e a janela de 72 h/24 h. O site não detalha as sanções.', fonte: [L.tseRes23610] },
  { pagina: 'Partidos', afirmacao: 'Número de partidos que elegeram deputados em 2018 (30) e projeção de 11 partidos em 2030.', status: 'pendente', nota: 'Dados vêm de fontes de apoio (imprensa e Wikipédia) citadas no PDF. A cifra de 30 partidos ainda aparece no texto da etapa “Partidos e regras de 2026”.', fonte: [L.poder360Barreira] },
  { pagina: 'Leis', afirmacao: 'As quatro leis de iniciativa popular listadas.', status: 'pendente', nota: 'As leis existem e estão no Planalto (links na página). A afirmação de que nasceram de iniciativa popular vem da pesquisa; confirme no site da Câmara.', fonte: [L.lei8930, L.lei9840, L.lei11124, L.lc135] },
  { pagina: 'Justiça', afirmacao: 'Quantidade de tribunais regionais e de justiça (6 TRFs, 24 TRTs, 27 TJs, 27 TREs).', status: 'pendente', nota: 'Os números vêm do PDF, que cita o CNJ. Conferir com o painel do CNJ.', fonte: [L.cnjPanorama] },
  { pagina: 'Coalizão', afirmacao: 'Efeito das emendas obrigatórias e do papel do STF na governabilidade.', status: 'pendente', nota: 'São análises de ciência política (artigo “Presidencialismo de coalizão revisitado” e outros), não fatos oficiais. O site as apresenta como interpretação.', fonte: [L.coalizaoRevisitado] },
];
