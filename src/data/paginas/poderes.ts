import type { Tone } from '@/lib/tones';

export const poderes: Record<string, { nome: string; icon: string; tone: Tone; resumo: string; quem: string; tipicas: string[]; atipicas: string[] }> = {
  leg: { nome: 'Legislativo', icon: 'edit_document', tone: 'sky', resumo: 'Faz as leis e fiscaliza o governo.',
    quem: 'Na União: Congresso Nacional (Câmara dos Deputados e Senado). Nos Estados: Assembleias Legislativas. No Distrito Federal: Câmara Legislativa. Nos Municípios: Câmaras de Vereadores.',
    tipicas: ['Elaborar as leis', 'Fiscalizar as contas, as finanças e o orçamento do Executivo'],
    atipicas: ['Administrar: organiza os próprios serviços, nomeia servidores e faz licitações', 'Julgar: o Senado julga o Presidente e ministros do STF em crimes de responsabilidade'] },
  exe: { nome: 'Executivo', icon: 'domain', tone: 'mint', resumo: 'Administra o país e executa as leis.',
    quem: 'Na União: Presidente, Vice-Presidente e ministros. Nos Estados e no DF: governadores e secretários. Nos Municípios: prefeitos e secretários.',
    tipicas: ['Administrar a máquina pública', 'Executar as leis e as políticas públicas', 'Gerir o orçamento'],
    atipicas: ['Legislar: edita Medidas Provisórias e decretos regulamentares', 'Julgar: decide em processos administrativos disciplinares e fiscais'] },
  jud: { nome: 'Judiciário', icon: 'gavel', tone: 'peach', resumo: 'Resolve conflitos e protege os direitos.',
    quem: 'STF, STJ, TST, TSE, STM, tribunais regionais e juízes. Os magistrados entram por concurso público (exceto o quinto constitucional e as nomeações para os tribunais superiores).',
    tipicas: ['Julgar conflitos, com decisão definitiva (coisa julgada)', 'Proteger a Constituição e os direitos'],
    atipicas: ['Legislar: escreve o regimento interno dos tribunais', 'Administrar: gere servidores, compras e o orçamento do próprio Judiciário'] },
};

// Quem controla quem (art. 2º e demais dispositivos citados nas fontes).
export const freios: Record<string, Record<string, string>> = {
  leg: {
    exe: 'Analisa os vetos do Presidente; aprova ou rejeita Medidas Provisórias; julga as contas do Presidente a cada ano; pode criar CPIs; autoriza declaração de guerra e paz; processa o impeachment.',
    jud: 'O Senado sabatina e aprova os indicados ao STF e aos tribunais superiores, e julga ministros do STF e membros do CNJ por crimes de responsabilidade. O Congresso também vota o orçamento do Judiciário.',
  },
  exe: {
    leg: 'Sanciona ou veta (total ou parcialmente) os projetos aprovados pelo Congresso. Tem a iniciativa exclusiva das leis orçamentárias e de organização administrativa.',
    jud: 'Nomeia os ministros do STF e dos tribunais superiores (depois da aprovação do Senado) e os magistrados do quinto constitucional nos tribunais regionais.',
  },
  jud: {
    leg: 'Controla a constitucionalidade: pode invalidar leis ou atos do Congresso que violem a Constituição.',
    exe: 'Controla a legalidade e a constitucionalidade de decretos, portarias e atos administrativos, e julga o Presidente nos crimes comuns.',
  },
};

export const ordem = ['leg', 'exe', 'jud'];
