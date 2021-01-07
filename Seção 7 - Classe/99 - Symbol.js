//symbol é um tipo primário do JS que cria um id único toda vez que é executado
//ele também fica disponível globalmente

//ele pode ser usado como atriburo de objetos da seguinte maneira
numero = Symbol('numero')

class Operacoes{
    constructor(valor){
        this[numero] = valor;
    }

}

vinteUm = new Operacoes(21);
console.log(vinteUm)
//sendo acessível somente da maneira abaixo.
vinteUm[numero] = 50
console.log(vinteUm)

//notação de ponto não funciona
//vinteUm.[numero] = 800

//e da maneira abaixo ele não altera o valor do Symbol, mas sim, cria um novo atributo 
vinteUm.[numero] = 800
console.log(vinteUm)