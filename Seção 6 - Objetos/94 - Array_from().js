//Esse método converte qualquer objeto iterável em um array:
cpf = `07008323193`
cpfArray = Array.from(cpf)
console.log(cpfArray)

/*
Um objeto literal não é iterável, portanto, 
para converte-lo em array, utilize o método Object.entries()
*/

pessoa1 = {
    nome: `Fernando`,
    idade: 20,
    profissao: `Software Developer`
}
pessoa1Entries_nestedArray = Object.entries(pessoa1)
console.log(pessoa1Entries_nestedArray)

/*
Essa abordagem é que ela retorna um nested array, ou seja, um array que possui outros arrays como elemento...
Portanto, para desconstruir esse array principal, podemos seguir com 
a seguinte estratégia
*/

let [nome, idade, profissao] = pessoa1Entries_nestedArray
console.log(nome)
console.log(idade)
console.log(profissao)