//CRIA OBJETO
pessoa = new Object();
pessoa.nome = 'Fernando Santos Ferreira';
pessoa.idade = 20;
pessoa.cumprimentar = function(){
    console.log(`Olá, eu sou o ${this.nome}, tenhos ${this.idade}! É uma prazer conhecer você!`)
};
pessoa.cumprimentar()
//CONGELA OBJETO
Object.freeze(pessoa);
//TENTATIVA DE EDIÇÃO DAS PROPRIEDADES DO OBJETO
    pessoa.nome = 'MEU NOME NÃO É FERNANDO'
    delete pessoa.idade
    pessoa.andar = function() {
        console.log(this.nome + ' está andando...');
    }
//NADA MUDOU
console.log(pessoa)




//Congelar um objeto logo na sua instanciação 
{
        function Admin(user, password, level){
            this.user = user;
            this.password = password;
            this.level = level;

            Object.freeze(this);
        }

        ditecadmin = new Admin('admin', 'adminadmin', 10);
        ditecadmin.user = 'ditecsuporte';//já não é possível alterar nada nessa instância
        console.log(ditecadmin);
}
/*
     para garantir a segurança da instância do objeto, é fundamental certificar se 
     todos os parâmetros esperados estão sendo devidamente passados, pois caso contrário, 
     a instância do objeto será congelada mesmo com erros.
*/
{
    function Admin(user, password, level){
    
        (function() {
            if(Admin.arguments.length !== 3) {
                throw new Error('Os parâmetros: user, password e level são os únicos esperados. Verifique se está informado-os corretamente.')
            }
        })()
    
        this.user = user;
        this.password = password;
        this.level = level;
    
        Object.freeze(this);
    }
    //FALTANDO UM PARÂMETRO
    ditecadmin = new Admin('admin', 'adminadmin');
}