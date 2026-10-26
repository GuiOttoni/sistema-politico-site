import type { Tone } from '@/lib/tones';

export const origens = {
  parlamentar: { rotulo: 'Deputado ou senador', icon: 'person', passo: 'Um parlamentar apresenta o projeto, com uma justificação explicando por que a lei é necessária.' },
  executivo: { rotulo: 'Presidente da República', icon: 'domain', passo: 'O Executivo envia o projeto com uma exposição de motivos assinada por um ministro de Estado. Algumas matérias, como as leis do orçamento, só podem ser propostas pelo Executivo.' },
  popular: { rotulo: 'Cidadãos (iniciativa popular)', icon: 'groups', passo: 'Um grupo de cidadãos apresenta o projeto à Câmara dos Deputados, com assinaturas de pelo menos 1% do eleitorado nacional (veja os detalhes na parte avançada).' },
} as const;

export const passos = [
  { n: 2, icon: 'inbox', titulo: 'Protocolo e comissões', txt: 'O projeto é registrado e enviado às comissões. As comissões temáticas analisam o conteúdo. A Comissão de Constituição e Justiça (CCJ) verifica se o projeto respeita a Constituição.' },
  { n: 3, icon: 'edit_note', titulo: 'Emendas e pareceres', txt: 'Os parlamentares podem propor alterações (emendas). Cada comissão emite um parecer sobre o projeto.' },
  { n: 4, icon: 'how_to_vote', titulo: 'Votação no Plenário', txt: 'Com os pareceres prontos, o projeto vai à votação. O presidente da Casa organiza a pauta, depois de ouvir os líderes dos partidos.' },
  { n: 5, icon: 'sync', titulo: 'Outra Casa revisa', txt: 'No Congresso, a outra Casa (Câmara ou Senado) repete o processo. Cada Casa revisa o que a outra aprovou.' },
  { n: 6, icon: 'draw', titulo: 'Sanção ou veto', txt: 'O chefe do Executivo pode sancionar (aprovar) o projeto ou vetá-lo. O veto volta ao Congresso, que pode derrubá-lo pelo voto da maioria absoluta de deputados e senadores.' },
  { n: 7, icon: 'newspaper', titulo: 'Publicação e vigência', txt: 'Depois de promulgada e publicada, a lei passa a existir. Ela só produz efeitos quando entra em vigor, na data da publicação ou após um prazo (vacatio legis).' },
];

export const normas: { sigla: string; nome: string; tone: Tone; quorum: string; veto: string; nota: string }[] = [
  { sigla: 'PEC', nome: 'Emenda à Constituição', tone: 'lilac', quorum: '3/5 dos votos (308 deputados e 49 senadores), em 2 turnos em cada Casa', veto: 'Não há veto: as Mesas da Câmara e do Senado promulgam', nota: 'Pode ser proposta por 1/3 dos deputados ou dos senadores, pelo Presidente ou por mais da metade das Assembleias Legislativas.' },
  { sigla: 'PLP', nome: 'Lei Complementar', tone: 'sky', quorum: 'Maioria absoluta (257 deputados e 41 senadores)', veto: 'Sim', nota: 'Trata de temas que a Constituição manda regular por lei complementar. Não é “superior” à lei ordinária: cada uma tem seu campo.' },
  { sigla: 'PL', nome: 'Lei Ordinária', tone: 'mint', quorum: 'Maioria simples dos presentes, com maioria absoluta presente', veto: 'Sim', nota: 'É a regra geral. Alguns projetos podem ser aprovados apenas nas comissões, sem ir ao Plenário.' },
  { sigla: 'MPV', nome: 'Medida Provisória', tone: 'peach', quorum: 'Maioria simples em cada Casa, depois de parecer de comissão mista', veto: 'Só se for convertida em lei com alterações', nota: 'Tem força de lei imediata, em caso de relevância e urgência. Se não for votada no prazo, perde a eficácia. Depois de 45 dias, tranca a pauta.' },
  { sigla: 'PDL', nome: 'Decreto Legislativo', tone: 'butter', quorum: 'Maioria simples', veto: 'Não', nota: 'Trata de temas de competência exclusiva do Congresso, como tratados internacionais e contas. Também pode sustar atos do Executivo que excedam o poder de regulamentar.' },
  { sigla: 'PRC / PRS', nome: 'Resolução', tone: 'rose', quorum: 'Maioria simples (ou quórum especial, conforme o tema)', veto: 'Não', nota: 'Trata de assuntos internos de cada Casa, como o Regimento. As do Senado também fixam alíquotas de tributos.' },
];

export const emendas = [
  ['content_cut', 'Supressiva', 'Retira parte ou todo um dispositivo.'],
  ['swap_horiz', 'Substitutiva', 'Troca grande parte do projeto, ou ele todo.'],
  ['edit', 'Modificativa', 'Altera a redação sem mudar o sentido.'],
  ['add_circle', 'Aditiva', 'Acrescenta novos termos a um artigo ou parágrafo.'],
];
