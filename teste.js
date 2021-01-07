class Carro{
    
    constructor(modelo){
        this.modelo = modelo;
        this.kmRodados = 0;
    }
    
    set quilometragem(valor){
        this.kmRodados = valor
    }

}

vectra = new Carro('vectra')
vectra = 50;
console.log(vectra)
