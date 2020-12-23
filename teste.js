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