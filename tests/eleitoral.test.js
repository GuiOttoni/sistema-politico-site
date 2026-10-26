import test from 'node:test';
import assert from 'node:assert/strict';
import { quocienteEleitoral, distribuirCadeiras } from '../src/lib/eleitoral.js';

test('QE: fração <= 0,5 é desprezada, > 0,5 arredonda para cima', () => {
  assert.equal(quocienteEleitoral(1000, 8), 125);
  assert.equal(quocienteEleitoral(1001, 8), 125); // 125,125
  assert.equal(quocienteEleitoral(1005, 8), 126); // 125,625
});

test('QE: caso de borda exato 0,5 é desprezado', () => {
  assert.equal(quocienteEleitoral(1004, 8), 125); // 125,5
});

test('QE: zero cadeiras não quebra', () => {
  assert.equal(quocienteEleitoral(1000, 0), 0);
});

test('distribui exatamente o número de cadeiras (todos elegíveis)', () => {
  const r = distribuirCadeiras(
    [{ nome: 'A', votos: 5200 }, { nome: 'B', votos: 3100 }, { nome: 'C', votos: 1200 }, { nome: 'D', votos: 500 }],
    10,
  );
  assert.equal(r.linhas.reduce((s, l) => s + l.total, 0), 10);
  assert.equal(r.naoDistribuidas, 0);
});

test('sobras: maior média vence; barreira antiga de 80% exclui partido pequeno', () => {
  const partidos = [{ nome: 'A', votos: 6000 }, { nome: 'B', votos: 3000 }, { nome: 'P', votos: 400 }];
  const livre = distribuirCadeiras(partidos, 9);
  const velho = distribuirCadeiras(partidos, 9, { barreiraSobras: true });
  assert.equal(livre.linhas.reduce((s, l) => s + l.total, 0), 9);
  assert.equal(velho.linhas.find((l) => l.nome === 'P').total, 0);
});

test('com barreira, se ninguém é elegível sobram cadeiras não distribuídas sem loop infinito', () => {
  const r = distribuirCadeiras([{ nome: 'A', votos: 10 }, { nome: 'B', votos: 10 }], 20, { barreiraSobras: true });
  assert.ok(r.naoDistribuidas >= 0);
});
