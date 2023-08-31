// Veiculo.ts

class Veiculo {
    constructor(public longitude: number, public latitude: number) {}
  
    mover(longitude: number, latitude: number) {
      this.longitude = longitude;
      this.latitude = latitude;
    }
  }
  
  class VeiculoEletrico extends Veiculo {
    constructor(public bateria: number = 100) { 
      super(0, 0); // Inicializa na coordenada (0, 0)
    }
  
    recarregarBateria() {
      // Lógica para recarregar a bateria elétrica
      this.bateria = 100; // Por exemplo, definindo a bateria como 100% aqui
    }
  }
  
  class VeiculoEletricoVoador extends VeiculoEletrico {
    constructor(public altitude: number) {
      super(); // Não é necessário passar um valor de bateria aqui
    }
  
    moverVerticalmente(altitude: number) {
      this.altitude = altitude;
    }
  }
  
  export { Veiculo, VeiculoEletrico, VeiculoEletricoVoador };