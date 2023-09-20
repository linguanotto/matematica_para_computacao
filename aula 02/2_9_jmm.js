"use strict";
class ProgressaoGeometrica {
    constructor(primeiroTermo, razao) {
        this.primeiroTermo = primeiroTermo;
        this.razao = razao;
    }
    gerarTermos(qtdTermos) {
        const termos = [this.primeiroTermo];
        for (let i = 1; i < qtdTermos; i++) {
            const termoAnterior = termos[i - 1];
            const proximoTermo = termoAnterior * this.razao;
            termos.push(proximoTermo);
        }
        return termos;
    }
}
// Exemplo de uso para gerar os primeiros 50 termos de uma PG
const pg = new ProgressaoGeometrica(1, 2); // Primeiro termo: 1, Razão: 2
const primeiros50Termos = pg.gerarTermos(50);
console.log(primeiros50Termos);
