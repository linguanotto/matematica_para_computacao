import {
    Veiculo,
    VeiculoEletrico,
    VeiculoEletricoVoador,
  } from "./2_7a_jmm";
  
 // Criando uma instância de VeiculoEletricoVoador
const meuVeiculo = new VeiculoEletricoVoador(0);

// Movendo o veículo na horizontal e vertical
meuVeiculo.mover(10, 20);
meuVeiculo.moverVerticalmente(100);

// Recarregando a bateria
meuVeiculo.recarregarBateria();

// Exibindo os atributos do veículo
console.log("Coordenadas - Longitude:", meuVeiculo.longitude, "Latitude:", meuVeiculo.latitude);
console.log("Altitude: ", meuVeiculo.altitude);
console.log("Carga da Bateria Inicial: ", meuVeiculo.bateria);