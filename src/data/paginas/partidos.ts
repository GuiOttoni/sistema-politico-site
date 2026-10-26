// Fonte dos percentuais: EC 97/2017, art. 3º (conferido no texto do Planalto).
export const ciclos = [
  { id: '2018', rotulo: 'Eleições de 2018', leg: 'Legislatura 2019–2022', pct: 1.5, porUf: 1.0, deps: 9 },
  { id: '2022', rotulo: 'Eleições de 2022', leg: 'Legislatura 2023–2026', pct: 2.0, porUf: 1.0, deps: 11 },
  { id: '2026', rotulo: 'Eleições de 2026', leg: 'Legislatura 2027–2030', pct: 2.5, porUf: 1.5, deps: 13 },
  { id: '2030', rotulo: 'Eleições de 2030', leg: 'Legislatura 2031 em diante', pct: 3.0, porUf: 2.0, deps: 15 },
];

export const regrasIA = [
  { q: 'Um candidato publica um vídeo feito com inteligência artificial e não informa que ele é sintético. Isso é permitido?', opcoes: ['Sim, é liberdade de expressão', 'Não: é obrigatório informar de forma explícita'], certa: 1,
    porque: 'A Resolução TSE nº 23.755/2026 exige que a propaganda criada ou alterada por IA informe isso de forma explícita e destacada.' },
  { q: 'Na véspera da eleição, uma campanha quer publicar um novo vídeo sintético imitando a voz de um adversário. Pode?', opcoes: ['Pode, se for humorístico', 'Não: há proibição de 72 horas antes até 24 horas depois da votação'], certa: 1,
    porque: 'A proibição de novos conteúdos sintéticos nesse período consta do art. 9º-B da Resolução TSE nº 23.610/2019, incluído pela Resolução nº 23.755/2026.' },
  { q: 'A resolução proíbe qualquer uso de inteligência artificial na campanha?', opcoes: ['Sim, qualquer uso', 'Não: permite o uso, com limites e identificação'], certa: 1,
    porque: 'A norma não proíbe o uso da IA. Ela impõe limites e exige identificação do conteúdo.' },
];
