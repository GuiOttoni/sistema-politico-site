// Síntese interpretativa da pesquisa (nível 1 a 3). Não são dados medidos.
export const era = {
  classico: {
    titulo: 'Modelo clássico (1988 até meados da década de 2010)',
    texto: 'O presidente formava uma ampla coalizão de partidos depois da eleição. Distribuía ministérios e cargos, usava Medidas Provisórias e decidia quando liberar as verbas pedidas por deputados e senadores. Esse modelo foi consolidado nos governos de Fernando Henrique Cardoso e levado ao auge nos primeiros mandatos de Lula. Já no governo de Dilma Rousseff, a dificuldade de manter a coalizão, em meio à crise econômica, terminou no impeachment.',
    niveis: [['Poderes de agenda do presidente (MPs, urgência, orçamento)', 3], ['Ministérios e cargos para aliados', 3], ['Controle da liberação de verbas', 3], ['Emendas obrigatórias dos parlamentares', 1], ['Papel do STF na governabilidade', 1]],
  },
  atual: {
    titulo: 'Modelo atual (anos 2020)',
    texto: 'As emendas parlamentares (individuais, de bancada e de relator) passaram a ter execução obrigatória. Com isso, deputados e senadores enviam recursos diretamente às suas bases, sem depender do Palácio do Planalto, e as lideranças partidárias, como o chamado “Centrão”, ganharam força. Além disso, o STF passou a ter papel central nas disputas políticas, e o Executivo precisa considerar também a posição do Judiciário.',
    niveis: [['Poderes de agenda do presidente (MPs, urgência, orçamento)', 2], ['Ministérios e cargos para aliados', 2], ['Controle da liberação de verbas', 1], ['Emendas obrigatórias dos parlamentares', 3], ['Papel do STF na governabilidade', 3]],
  },
} as const;

export const rotuloNivel = ['', 'Menor peso', 'Peso médio', 'Maior peso'];

export const linha = [
  ['1988', 'Sérgio Abranches publica o ensaio', 'O artigo, na revista Dados, usa a expressão “presidencialismo de coalizão”. O autor já via esse padrão na experiência democrática de 1946 a 1964.'],
  ['Décadas de 1990 e 2000', 'Coordenação feita pelo presidente', 'Ministérios, Medidas Provisórias e controle da liberação de verbas organizam a base do governo.'],
  ['2016', 'Impeachment de Dilma Rousseff', 'A dificuldade de manter a coalizão, em meio à crise econômica, é apontada como parte da crise política.'],
  ['Anos 2010 e 2020', 'Emendas obrigatórias', 'A execução obrigatória das emendas reduz o controle do Executivo sobre as verbas.'],
  ['Anos 2020', 'O STF ganha peso político', 'A judicialização de disputas políticas amplia o papel do tribunal, como na pandemia e em decisões tributárias.'],
];
