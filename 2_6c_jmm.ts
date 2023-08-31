/* Uma função recursiva para o cálculo do fatorial de um número */

function jmm_factorial(n: number): number {
  if (n == 1) {
      return 1;
  } else {
      return n * jmm_factorial(n - 1);
  }
}

console.log(jmm_factorial(3)); 
console.log(jmm_factorial(5)); 

  // O fatorial de 0 é 1 por definição.
  //Ex. cálculo fatorial de 5 => 5! = 5 × 4 × 3 × 2 × 1 = 120