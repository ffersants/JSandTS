//getters e setters são manipuladores de atributos de um objeto, sendo eles declarados no corpo do objeto,

{
    class Estoque{
        constructor(produto, quantidade){
            this.produto = produto;
            this.quantidade = quantidade;
        }
    
        get getQuantidade(){
            return this.quantidade;
        }
    
        set setQuantidade(total){
            if(total < 0) return;
            this.quantidade = total;
        }
    }
    
    miojo = new Estoque('Miojo', 20);
    //ao usar um set, não chama-se uma função, mas sim, usa-se a sintaxe de notação de atribuição
    miojo.setQuantidade = 15;
    console.log(miojo);
    //setters e getters não necessariamente precisam ser declarados somente no corpo do objeto 
    //eles também podem ser definidos com uso dos métodos
    //   Object.prototype.__defineSetter__("setAttr", function(value){...})
    //   Object.prototype.__defineGetter__("getAttr", function(){return...})

    Estoque.prototype.__defineGetter__("getProduto", function(){
        return this.produto;
    })

    Estoque.prototype.__defineSetter__("setProduto", function(nome){
        if(nome === '') return;
        this.produto = nome;
    })

    miojo.setProduto = 'Macarrão instantâneo';
    console.log(miojo)
}

class Estoque{
    constructor(produto, quantidade){
        this.produto = produto;
        this.quantidade = quantidade;
    }

    get getQuantidade(){
        return this.quantidade;
    }

    set setQuantidade(total){
        if(total < 0) return;
        this.quantidade = total;
    }
}

Object.defineProperty(Estoque, 'produto', {
    get: function() {
        return this.produto;
    },
    set: function(nome){
        if(valor === '') return
        this.produto = nome;
    }
})

arroz = new Estoque('arroz', 50)
console.log(arroz)
arroz.produto = 'Feijão'
console.log(arroz)