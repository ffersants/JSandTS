
    //seguindo com a parte de herança
    function Produto(nome = undefined, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    //adicionando métodos à função construtora
    Produto.prototype.aumento = function(quantia){
        this.preco += quantia;
    }
    Produto.prototype.desconto = function(quantia){
        this.preco -= quantia;
    }


    function Caneca(material, preco, cor){
        Produto.call(this, undefined,preco);
        this.material = material;
        this.cor = cor;
    }

    function Camiseta(nome, preco, cor) {
        Produto.call(this, nome, preco);
        this.cor = cor;
    }
    //aqui é onde de fato acontece a herança, camiseta recebe os métodos do objeto pai produto
    //essa heranca deve ser feita da maneira apresentada abaixo, para assim termos uma atribuicao
    //de valores e nao de endereco de memoria, evitando portanto, que alteracoes no prototype de 
    //um objeto reflitam em outro
    Camiseta.prototype = Object.create(Produto.prototype);
    //o caso descrito acima eh o mesmo que 
    //array2 = array1 <-- ERRADO - atribuicao de endereco na memoria
    //array2 = [...array1]

    //sem essa linha, a função construtora do objeto camiseta fica como "Produto"
    Camiseta.prototype.constructor = Camiseta;
    
    Caneca.prototype = Object.create(Camiseta.prototype);
    
    //sem essa linha, a função construtora do objeto caneca fica como "Camiseta"
    Caneca.prototype.constructor = Caneca;
    
    caneca = new Caneca('Cerâmica', 50, "verde");
    camiseta = new Camiseta('Osklen', 100, 'preto');
