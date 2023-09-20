
class Pessoa {
  nome: string;
  idade: number;
  genero: string;

  constructor(nome: string, idade: number, genero: string) {
      this.nome = nome;
      this.idade = idade;
      this.genero = genero;
  }

  estudar() {
      console.log(`${this.nome} está estudando.`);
  }
}

// Classe para Estudante que herda de Pessoa
class Estudante extends Pessoa {
  matricula: number;
  curso: string;

  constructor(nome: string, idade: number, genero: string, matricula: number, curso: string) {
      super(nome, idade, genero);
      this.matricula = matricula;
      this.curso = curso;
  }

  apresentar() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Gênero: ${this.genero}, Matrícula: ${this.matricula}, Curso: ${this.curso}`);
  }
}

const estudante1 = new Estudante("Juliana", 35, "Feminino", 12345, "Desenvolvimento de Software Multiplataforma");
estudante1.estudar(); // Chamando o método estudar da classe base
estudante1.apresentar(); // Chamando o método apresentar da classe Estudante