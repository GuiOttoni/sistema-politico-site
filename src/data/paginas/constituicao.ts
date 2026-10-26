import type { Tone } from '@/lib/tones';

export const pilares: { tone: Tone; icon: string; nome: string; pergunta: string; explica: string; contraste: string; base: string }[] = [
  { tone: 'rose', icon: 'how_to_vote', nome: 'República', pergunta: 'Forma de governo: como o governante chega ao cargo?',
    explica: 'Os governantes são escolhidos por eleição, ficam no cargo por um tempo determinado e precisam prestar contas dos seus atos.',
    contraste: 'Na monarquia, o cargo é vitalício e passa por herança.', base: 'Art. 1º' },
  { tone: 'sky', icon: 'hub', nome: 'Federação', pergunta: 'Forma de Estado: como o poder é dividido no território?',
    explica: 'O poder é dividido entre a União, os 26 Estados, o Distrito Federal e os Municípios. Cada um tem governo próprio e autonomia, e nenhum pode deixar a Federação.',
    contraste: 'No Estado unitário, as decisões ficam concentradas em um único centro.', base: 'Arts. 1º e 18' },
  { tone: 'mint', icon: 'person', nome: 'Presidencialismo', pergunta: 'Sistema de governo: quem chefia o governo?',
    explica: 'O Presidente da República é, ao mesmo tempo, chefe de Estado e chefe de governo. É eleito diretamente pelo povo e tem mandato fixo.',
    contraste: 'No parlamentarismo, o governo é chefiado por um primeiro-ministro escolhido pelo Parlamento.', base: 'Arts. 2º e 76 a 84' },
  { tone: 'lilac', icon: 'groups', nome: 'Democracia semidireta', pergunta: 'Regime político: como o povo participa?',
    explica: 'Todo poder vem do povo. Ele o exerce por meio de representantes eleitos e também diretamente, por plebiscito, referendo e iniciativa popular de leis.',
    contraste: 'Combina a democracia representativa com instrumentos de participação direta.', base: 'Art. 1º, parágrafo único' },
];

export const fundamentos = [
  ['flag', 'Soberania'], ['badge', 'Cidadania'], ['favorite', 'Dignidade da pessoa humana'],
  ['work', 'Valores sociais do trabalho e da livre iniciativa'], ['diversity_3', 'Pluralismo político'],
];

export const pecs = [
  { q: 'Uma proposta de emenda (PEC) quer acabar com o voto secreto. Ela pode ser discutida no Congresso?', opcoes: ['Pode ser discutida', 'Não pode: é cláusula pétrea'], certa: 1,
    porque: 'O voto direto, secreto, universal e periódico é cláusula pétrea (art. 60, § 4º, II).' },
  { q: 'Uma PEC propõe mudar as regras de aposentadoria. Pode ser discutida?', opcoes: ['Pode ser discutida', 'Não pode: é cláusula pétrea'], certa: 0,
    porque: 'Aposentadoria não está entre as cláusulas pétreas. A Constituição já foi alterada várias vezes sobre esse tema.' },
  { q: 'Uma PEC propõe que um Estado deixe de ter governo próprio e seja administrado diretamente pela União. E agora?', opcoes: ['Pode ser discutida', 'Não pode: é cláusula pétrea'], certa: 1,
    porque: 'A proposta tende a abolir a forma federativa de Estado (art. 60, § 4º, I).' },
  { q: 'Uma PEC propõe que o Judiciário passe a obedecer ordens do Executivo. Pode?', opcoes: ['Pode ser discutida', 'Não pode: é cláusula pétrea'], certa: 1,
    porque: 'A separação dos Poderes é cláusula pétrea (art. 60, § 4º, III).' },
  { q: 'Uma PEC propõe incluir um novo direito social no texto, como foi feito com o transporte (EC 90/2015). Pode?', opcoes: ['Pode ser discutida', 'Não pode: é cláusula pétrea'], certa: 0,
    porque: 'Ampliar direitos é permitido. A cláusula pétrea barra apenas propostas que tendam a abolir direitos e garantias individuais.' },
];
