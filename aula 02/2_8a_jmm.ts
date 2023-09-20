class ArithmeticProgression{
    initial_term: number;
    diff: number;
    constructor(i: number, diff: number){
        this.initial_term = i;
        this.diff = diff;
    }
    get_nth_term(n:number): number{
        if (n == 1){
            return this.initial_term;
        } else {
            return this.get_nth_term(n-1) + this.diff;
        }
    }
}

let my_ap = new ArithmeticProgression(2, 3);
console.log("First term: ", my_ap.get_nth_term(1));
console.log("Fourth term: ", my_ap.get_nth_term(50));

export {}


  //Ex: quando usa 10 obtêm-se o resultado de 100, porém se aumenta para 10000 dá o erro de Maximum call stack size exceeded (Tamanho máximo da pilha de chamadas excedido).