"use strict";
class ArithmeticProgression {
    constructor(i, diff) {
        this.initial_term = i;
        this.diff = diff;
    }
    get_nth_term(n) {
        if (n === 1) {
            return this.initial_term;
        }
        let currentTerm = this.initial_term;
        for (let i = 2; i <= n; i++) {
            currentTerm += this.diff;
        }
        return currentTerm;
    }
}
let my_ap = new ArithmeticProgression(2, 3);
console.log("First term: ", my_ap.get_nth_term(1));
console.log("Fourth term: ", my_ap.get_nth_term(50));
/* Foi removida a chamada recursiva get_nth_term e em vez disso usado um loop for para calcular o termo desejado da progressão aritmética. O loop começa a partir do segundo termo (já que o primeiro termo é retornado imediatamente se n for igual a 1) e itera até o termo desejado, atualizando currentTerm em cada iteração com o valor do próximo termo na progressão. Isso garante que o cálculo seja realizado de forma iterativa, sem a necessidade de chamadas recursivas, tornando o código mais eficiente e evitando problemas de estouro de pilha para valores grandes de n.*/ 
