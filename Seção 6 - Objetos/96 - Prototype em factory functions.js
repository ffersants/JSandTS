
{
    function Carro(cor,ano){
        return{
            cor, 
            ano,
            acelerar(){
                console.log("vruuum")
            }
        }
    }

    monza = Carro(`Branco`, 2003)
//se instanciarmos Carro cinco vezes, o metodo acelerar sera criado cinco vezes, gastando recursos indevidamente, pois trata-se
//de um metodo padrao que podera ser acessado por todas as instancias
    console.log(monza)
}

{
    function Carro(cor, ano){
        this.cor = cor;
        this.ano = ano;
    }
    //para adicionar um metodo ao prototype em constructor functions, basta declararmos o objeto e o corpo dele, colocando
    //externamente o apontamento para o prototype do objeto mais o nome do metodo e atribuindo essa expressao a uma function anonima
    Carro.prototype.acelerar = function() {
        console.log("vrrruuumm");
    }
}


{
    function Moto(cor,ano){
        return{
            cor, 
            ano,
        }
    }
    //seguindo o mesmo estilo que é usado em constructor functions,o método não é adicionado no prototype do objeto
    Moto.prototype.acelerar = function(){
        console.log("vruuumm")
    }
    biz = Moto(`Branco`, 2003)
    
}


{
    //para adicionarmos metodos no prototype do objeto feito por constructor function, 
    //inicialmente devemos declarar um objeto com os metodos a serem adicionados
    motoMethods = {
        acelerar(){
            console.log("vruuuuumm")
        }
    }

    function Moto(cor, ano){
        //agora ja no corpo do objeto, retornamos um objeto utilizando Object.create(), que recebe como primeiro parametro
        //o objeto a ser utilizado como prototype do objeto que esta sendo criado.
        //como segundo parametro passamos as propriedades proprias do objeto que esta sendo criado. 
        //Essas propriedades correspondem ao segundo argumento de Object.defineProperties(), portanto, basta seguir a mesma sintaxe.
        return Object.create(motoMethods, {
            cor: {
                value: cor,
                enumerable: true
            },
            ano: {
                get: function(){
                    return ano;
                },
                set: function(valor){
                    ano = valor
                }
            }
        })
    }

    monza = Moto('Preto', 2009)
    console.log(monza.ano)
}

