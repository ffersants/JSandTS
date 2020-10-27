//Qualquer valor em JavaScript que não seja número, string, booleano, null ou undefined é um objeto.

a = "letra A"

b = a

console.log(b)

a = 'vogal A'

console.log(b)

//B não teve seu valor atualizado, pois B somente armazena uma cópia de A no estado em que A
//está até a linha que realiza tal cópia (no caso, a linha 5)

function ob(nome, idade, cor){
    return {nome, idade, cor};
}

obj1 = ob('Fernando', 20, 'Pardo');

console.log(obj1)
//obj recebe a REFERÊNCIA DE MEMÓRIA (ENDEREÇO) neste momento
obj2 = obj1

obj1.nome = "FULANO";
//aqui ela acessa o conteúdo no endereço apontado por obj1 e assim atualiza os valores
//mesmo não tendo que reatribuir obj2 a obj1 para atualizar
console.log(obj2 )

//caso não queira que um objeto seja a referência do outro, mas sim uma mera cópia, tal como
//é feito com os dados primitivos... Faça uso do spread

function animal(tipo, cor, tamanho){
    return{
        tipo,
        cor,
        tamanho
    }
}

dog = animal('poodle', 'branco', 'm');

console.log(dog)
//isso faz com que dog2 seja uma mera cópia de dog
//e que as alterações em um não afete o outro e vice versa
dog2 = {...dog};
//já isso faz o contrário, pois informa o endereço único de memória que armazena
//os valores a ser entregue às duas variáveis
    //dog2 = dog;


dog.cor = 'rosa';

console.log(dog2)
console.log(dog)

dog2.cor = "verde"

console.log(dog2)
console.log(dog)
