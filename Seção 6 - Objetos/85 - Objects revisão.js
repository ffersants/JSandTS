/////////////////////////CONSTRUTOR NEW OBJECT
pessoa = new Object();
//criando atributos a partir da notação de ponto
pessoa.nome = 'Fernando Santos Ferreira';
pessoa.idade = 20;
//criando método a partir da notação de ponto
pessoa.cumprimentar = function(){
    console.log(`Olá, eu sou o ${this.nome}, tenhos ${this.idade}! É uma prazer conhecer você!`)
};
pessoa.cumprimentar()

//FACTORY FUNCTION

function criarObject(id, nome, cor){
    return{
      id, nome, cor,
      get todasInfo(){
        return `${id}, ${nome}, ${cor}`
      }
    }
  }

dado = criarObject(123, 'Dado', 'Verde');
console.log(dado.todasInfo)



//LITERAL OBJECT

dado = {id: 123, nome: 'Dado', cor: 'Verde', todasInfo: function() {
    return `${this.id}, ${this.nome}, ${this.cor}`
}};
console.log(dado);
//adicionar método pela notação de ponto
//dado.todasInfo = function(){return this.id, this.nome, this.cor};

console.log(dado.todasInfo())


//CONSTRUCTOR FUNCTION
function  Objeto(id, nome, cor) {
    this.id = id;
    this.nome = nome;
    this.cor = cor;
    this.todasInfo = function(){
        return `${this.id}, ${this.nome}, ${this.cor}`
    }
}

dado = new Objeto(123, 'Dado', 'Verde');
console.log(dado.todasInfo())