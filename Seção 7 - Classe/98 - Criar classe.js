class Imovel{
    constructor(tipo, numComodos, cor){
        this.tipo = tipo;
        this.numComodos = numComodos;
        this.cor = cor;
        this.getstatus = function(){
            return 'Alugado'
        }
    }

    localidade = 'Df';

    cobrarAluguel(valor){
        return 'Voce deve pagar R$' + this.valor + ' de aluguel!';
    }

}

apartamento = new Imovel('apartamento', 6, 'preto')
console.log(apartamento.localidade);