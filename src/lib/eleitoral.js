/**
 * Matemática do sistema proporcional (PDF, seção "Matemática Eleitoral").
 * QE = votos válidos / cadeiras (fração <= 0,5 desprezada; > 0,5 arredonda para cima).
 * QP = piso(votos do partido / QE).
 * Sobras: maiores médias = votos / (QP + 1).
 */

/** @param {number} validVotes @param {number} seats */
export function quocienteEleitoral(validVotes, seats) {
  if (!(seats > 0)) return 0;
  const raw = validVotes / seats;
  const frac = raw - Math.floor(raw);
  return frac > 0.5 ? Math.floor(raw) + 1 : Math.floor(raw);
}

/**
 * @param {{ nome: string, votos: number }[]} partidos
 * @param {number} seats
 * @param {{ barreiraSobras?: boolean }} [opts] barreiraSobras: regra antiga (80% do QE) para disputar sobras
 */
export function distribuirCadeiras(partidos, seats, opts = {}) {
  const validos = partidos.reduce((s, p) => s + p.votos, 0);
  const qe = quocienteEleitoral(validos, seats);
  const linhas = partidos.map((p) => ({
    nome: p.nome,
    votos: p.votos,
    qp: qe > 0 ? Math.floor(p.votos / qe) : 0,
    sobras: 0,
  }));
  let restantes = seats - linhas.reduce((s, l) => s + l.qp, 0);
  const elegivel = (l) => !opts.barreiraSobras || l.votos >= 0.8 * qe;
  while (restantes > 0) {
    const candidatos = linhas.filter(elegivel);
    if (candidatos.length === 0) break;
    const media = (l) => l.votos / (l.qp + l.sobras + 1);
    const melhor = candidatos.reduce((a, b) => (media(b) > media(a) ? b : a));
    melhor.sobras += 1;
    restantes -= 1;
  }
  return {
    validos,
    qe,
    linhas: linhas.map((l) => ({ ...l, total: l.qp + l.sobras })),
    naoDistribuidas: Math.max(restantes, 0),
  };
}
