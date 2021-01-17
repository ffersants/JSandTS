//symbol é um tipo primário do JS que cria um id único toda vez que é executado
//ele também fica disponível globalmente

//ele pode ser usado como atributo de objetos da seguinte maneira
numero = Symbol('numero')

class Operacoes{
    constructor(valor){
        this[numero] = valor;
    }

}

vinteUm = new Operacoes(21);
//neste caso não está sendo realizada uma reatribuição de valor à chave "numero"
//está na verdade, sendo criada um novo atributo dentro de vinteUm
vinteUm.numero = 50;
//vejamos que há agora duas chaves numero, no entanto, uma é do tipo Symbol e que não foi alterada
console.log(vinteUm)