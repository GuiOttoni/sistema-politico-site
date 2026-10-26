import type { Tone } from '@/lib/tones';

export type Esfera = 'Federal' | 'Estadual e Distrital' | 'Municipal';

export interface Cargo { esfera: Esfera; nome: string; icon: string; poder: 'Executivo' | 'Legislativo'; tone: Tone; mandato: string; faz: string[]; voto: string; reeleicao: string; qtd?: string; detalhes: string[] }

export const cargos: Cargo[] = [
  { esfera: 'Federal', nome: 'Presidente e Vice-Presidente', icon: 'account_balance', poder: 'Executivo', tone: 'mint', mandato: '4 anos',
    faz: ['Chefia o Estado e o governo', 'Sanciona ou veta leis e edita Medidas Provisórias'],
    voto: 'Majoritário, com 2º turno se ninguém tiver mais da metade dos votos válidos', reeleicao: 'Uma reeleição seguida',
    detalhes: ['Nomeia os ministros de Estado', 'Indica ministros do STF e dos tribunais superiores (com aprovação do Senado)', 'Comanda as Forças Armadas e conduz as relações internacionais', 'Envia ao Congresso o plano plurianual, as diretrizes e o orçamento'] },
  { esfera: 'Federal', nome: 'Senador(a)', icon: 'groups', poder: 'Legislativo', tone: 'sky', mandato: '8 anos',
    faz: ['Representa os Estados e o Distrito Federal', 'Aprova autoridades e julga o impeachment'],
    voto: 'Majoritário simples, em turno único', reeleicao: 'Sem limite', qtd: '81 (3 por Estado e 3 pelo DF)',
    detalhes: ['Renovação alternada a cada 4 anos: 1/3 e 2/3 das cadeiras (27 e 54)', 'Sabatina e aprova indicados ao STF, Banco Central, PGR, TCU, embaixadores e agências reguladoras', 'Julga Presidente, Vice e ministros em crimes de responsabilidade', 'Autoriza empréstimos externos'] },
  { esfera: 'Federal', nome: 'Deputado(a) Federal', icon: 'person_raised_hand', poder: 'Legislativo', tone: 'sky', mandato: '4 anos',
    faz: ['Representa o povo, de forma proporcional à população', 'Propõe e vota leis e fiscaliza o governo'],
    voto: 'Proporcional, com lista aberta', reeleicao: 'Sem limite', qtd: '513 (de 8 a 70 por Estado)',
    detalhes: ['Autoriza a abertura de processo contra o Presidente da República', 'Os projetos do Executivo, do STF e de iniciativa popular começam na Câmara', 'Destina emendas ao orçamento da União'] },
  { esfera: 'Estadual e Distrital', nome: 'Governador(a) e Vice', icon: 'location_city', poder: 'Executivo', tone: 'mint', mandato: '4 anos',
    faz: ['Chefia a administração do Estado ou do DF', 'Comanda as polícias Civil e Militar e os Bombeiros'],
    voto: 'Majoritário, com 2º turno se necessário', reeleicao: 'Uma reeleição seguida',
    detalhes: ['Executa políticas regionais de saúde, ensino médio e infraestrutura', 'Explora o gás canalizado, diretamente ou por concessão (art. 25, § 2º)', 'Sanciona ou veta as leis estaduais'] },
  { esfera: 'Estadual e Distrital', nome: 'Deputado(a) Estadual e Distrital', icon: 'record_voice_over', poder: 'Legislativo', tone: 'sky', mandato: '4 anos',
    faz: ['Faz as leis do Estado', 'Fiscaliza o governador e as secretarias'],
    voto: 'Proporcional, com lista aberta', reeleicao: 'Sem limite',
    detalhes: ['Elabora a Constituição Estadual', 'Julga todo ano as contas do governador, com auxílio do Tribunal de Contas do Estado', 'Processa o governador por crime de responsabilidade'] },
  { esfera: 'Municipal', nome: 'Prefeito(a) e Vice', icon: 'home_work', poder: 'Executivo', tone: 'mint', mandato: '4 anos',
    faz: ['Administra o Município', 'Cuida de saúde básica, creches, ensino fundamental, transporte e limpeza urbana'],
    voto: 'Município com até 200 mil eleitores: maioria simples. Acima disso: maioria absoluta, com 2º turno', reeleicao: 'Uma reeleição seguida',
    detalhes: ['Arrecada tributos municipais, como o IPTU e o ISS', 'Sanciona ou veta as leis municipais'] },
  { esfera: 'Municipal', nome: 'Vereador(a)', icon: 'forum', poder: 'Legislativo', tone: 'sky', mandato: '4 anos',
    faz: ['Faz as leis do Município', 'Fiscaliza a Prefeitura'],
    voto: 'Proporcional, com lista aberta', reeleicao: 'Sem limite',
    detalhes: ['Elabora e reforma a Lei Orgânica do Município', 'Vota o orçamento municipal', 'Julga as contas do prefeito. O parecer do Tribunal de Contas só deixa de valer com voto de 2/3 da Câmara (art. 31, § 2º)'] },
];

export const esferas: Esfera[] = ['Federal', 'Estadual e Distrital', 'Municipal'];
