//INICIA-SE CRIANDO UM OBJETO

pessoa = {
    nome: 'Fernando',
    idade: 20,
    curso: 'ADS',
    contato: {
        telefone: 123456,
        email: 'fake@gmail.com'
    }
}

//primeira desestruturação
//será criada uma variável, que deve ter o mesmo nome da chave que consta no objeto.
let { nome, curso } = pessoa; //a esta variável será atribuído o valor correspondente na chave que está no objeto
console.log(nome)

let {curso: curso2 = 'Estrada da vida'} = pessoa;
console.log(curso2)

//cria a variável tel e atribui a ela o valor no atributo contato>telefone
let {contato: {telefone: tel}} = pessoa;
console.log(tel)
