pessoa1 = {
    nome: `Fernando`,
    idade: 32,
    profissao: `Software Developer`
}

pessoa1Obj = Object.entries(pessoa1)
pessoa2Arr = Array.from(pessoa1)

console.log(pessoa1Obj)
var [nome, idade, profissao] = pessoa1Obj

console.log(nome)
console.log(idade)
console.log(profissao)
