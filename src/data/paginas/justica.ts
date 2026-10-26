import type { Tone } from '@/lib/tones';

export interface Ramo { id: string; nome: string; icon: string; tone: Tone; faz: string; cupula: string; segundo: string; primeiro: string }

export const ramos: Ramo[] = [
  { id: 'stf', nome: 'Supremo Tribunal Federal', icon: 'account_balance', tone: 'lilac', faz: 'É o guardião da Constituição. Decide se leis e atos respeitam a Constituição e julga as principais autoridades do país.',
    cupula: 'STF: 11 ministros', segundo: 'Não há', primeiro: 'Não há' },
  { id: 'fed', nome: 'Justiça Federal', icon: 'flag', tone: 'sky', faz: 'Julga causas em que a União, autarquias ou empresas públicas federais têm interesse.',
    cupula: 'STJ: no mínimo 33 ministros (uniformiza a interpretação da lei federal)', segundo: '6 Tribunais Regionais Federais (TRF 1 a 6)', primeiro: 'Juízes federais e Juizados Especiais Federais' },
  { id: 'est', nome: 'Justiça Estadual', icon: 'map', tone: 'mint', faz: 'Julga a maior parte das causas: tudo o que não for da Justiça Federal ou das Justiças especializadas (cível, família, criminal comum e outras).',
    cupula: 'STJ (recursos sobre a lei federal)', segundo: '27 Tribunais de Justiça (desembargadores)', primeiro: 'Juízes de Direito, Tribunal do Júri e Juizados Especiais' },
  { id: 'trab', nome: 'Justiça do Trabalho', icon: 'engineering', tone: 'peach', faz: 'Resolve conflitos entre trabalhadores e empregadores.',
    cupula: 'TST: 27 ministros', segundo: '24 Tribunais Regionais do Trabalho', primeiro: 'Varas do Trabalho' },
  { id: 'eleit', nome: 'Justiça Eleitoral', icon: 'how_to_vote', tone: 'butter', faz: 'Organiza e fiscaliza as eleições, registra partidos e candidatos, julga conflitos eleitorais e diploma os eleitos.',
    cupula: 'TSE: no mínimo 7 ministros', segundo: '27 Tribunais Regionais Eleitorais', primeiro: 'Juízes eleitorais e Juntas Eleitorais' },
  { id: 'mil', nome: 'Justiça Militar', icon: 'military_tech', tone: 'rose', faz: 'Julga crimes militares. Na União, os das Forças Armadas. Nos Estados, os de policiais e bombeiros militares.',
    cupula: 'STM: 15 ministros (Justiça Militar da União)', segundo: 'Tribunais de Justiça Militar (SP, MG e RS) ou os próprios Tribunais de Justiça', primeiro: 'Conselhos de Justiça e juízes auditores' },
];

export const funcoes = [
  { icon: 'shield', tone: 'sky' as const, nome: 'Ministério Público', arts: 'Arts. 127 a 130-A', txt: 'Defende a ordem jurídica, o regime democrático e os interesses da sociedade. Apresenta, de forma privativa, a ação penal pública e atua em ações para proteger o patrimônio público, o meio ambiente e os consumidores.' },
  { icon: 'account_balance', tone: 'lilac' as const, nome: 'Advocacia Pública', arts: 'Arts. 131 e 132', txt: 'Representa a União, os Estados e o DF na Justiça e dá consultoria jurídica ao Executivo. Na União, é a Advocacia-Geral da União (AGU).' },
  { icon: 'balance', tone: 'mint' as const, nome: 'Advocacia', arts: 'Art. 133', txt: 'O advogado é indispensável à administração da justiça e inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei.' },
  { icon: 'volunteer_activism', tone: 'peach' as const, nome: 'Defensoria Pública', arts: 'Arts. 134 e 135', txt: 'Oferece orientação e defesa gratuitas, dentro e fora dos tribunais, a quem não pode pagar um advogado.' },
];
