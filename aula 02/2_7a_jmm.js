"use strict";
// Veiculo.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoEletricoVoador = exports.VeiculoEletrico = exports.Veiculo = void 0;
class Veiculo {
    constructor(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    mover(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
exports.Veiculo = Veiculo;
class VeiculoEletrico extends Veiculo {
    constructor(bateria = 100) {
        super(0, 0); // Inicializa na coordenada (0, 0)
        this.bateria = bateria;
    }
    recarregarBateria() {
        // Lógica para recarregar a bateria elétrica
        this.bateria = 100; // Por exemplo, definindo a bateria como 100% aqui
    }
}
exports.VeiculoEletrico = VeiculoEletrico;
class VeiculoEletricoVoador extends VeiculoEletrico {
    constructor(altitude) {
        super(); // Não é necessário passar um valor de bateria aqui
        this.altitude = altitude;
    }
    moverVerticalmente(altitude) {
        this.altitude = altitude;
    }
}
exports.VeiculoEletricoVoador = VeiculoEletricoVoador;
