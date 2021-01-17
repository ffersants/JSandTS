class AparelhoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return;
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return;
        this.ligado = false;
    }
}

class Smartphone extends AparelhoEletronico{
    constructor(nome, modelo, vendendo){
        super(nome)////atributo que será passado para executar no constructor da classe pai
        this.modelo = modelo;
        this.vendendo = vendendo;
    }

    botaPraVender(){
        this.vendendo = true
    }
}

iphone = new Smartphone('iPhone 6', 'Plus', false);

console.log(iphone.botaPraVender())
iphone.ligar()
console.log(iphone)