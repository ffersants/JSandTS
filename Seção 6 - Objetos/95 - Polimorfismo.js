function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){

    if(valor && typeof valor === `number`){
        if(valor > this.saldo) {
            console.log(`Saldo insuficiente. ` + this.verSaldo())
        } else{
            this.saldo -= valor
            console.log(this.verSaldo)
        }
    } else{
        error(`Bad "sacar" value`);
    }

}
Conta.prototype.depositar = function(valor){
    valor && typeof valor === `number` ? this.saldo += valor : error(`"valor" bad value.`)
}
Conta.prototype.verSaldo = function(){
    return `R$${this.saldo}`;
}



itau = new Conta(28982, 554553, 10);

itau.sacar(20);
itau.depositar(50)
console.log(itau.saldo);







function error(message){
    console.log(message) 
}