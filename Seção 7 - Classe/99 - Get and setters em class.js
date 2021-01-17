//dado o código abaixo em que temos um objeto com symbols

{
    valor = Symbol('valor em Numero')
    class Numero{
        constructor(num){
            this[valor] = num;
        }
    }

    dez = new Numero(10)
    console.log(dez)

    //e dada a tentativa falha de reatribuir o valor em Numero, o que acaba criando uma nova propriedade
    dez.valor = 20
    console.log(dez)

    //como fazemos para resgatar o valor correto (propriedade do tipo Symbols) de dentro do nosso objeto?
    console.log(dez.valor)
}

//USANDO A FUNÇÃO GET VALOR () RETURN THIS[VALOR]; <- notação para pegar o symbol

valor = Symbol('valor em Numero')
    class Numero{
        constructor(num){
            this[valor] = num;
        }
    // USANDO FUNÇÃO GET QUE RETORNARÁ O VALOR DO TIPO SYMBOL
        get valor(){
            return this[valor];
        }
    }

    dez = new Numero(10)
    console.log(dez)

    //e dada a tentativa falha de reatribuir o valor em Numero, o que acaba criando uma nova propriedade
    dez.valor = 20
    console.log(dez)

    //caso o setter abaixo fosse inserido dentro do corpo do objeto:
    /*
       set valor(valorNovo){
            this[valor] = valorNovo
        }
     */
    //a atribuição via notação de ponto "dez.valor = 20" daria certo, atribuindo o novo valor ao Symbol do objeto