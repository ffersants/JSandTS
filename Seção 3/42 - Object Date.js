/*
    As datas começaram a ser computadas em JS a partir da meia noite do dia 1 de Janeiro de 1970, que é tido como o Marco
    Zero ou Era Unix.
    MÉTODOS 
    .getMonth() - retorna o mês em número inteiro, sendo Janeiro = 0 e Dezembro = 11
    .getDay() - Retorna o dia da semaan em número inteiro, começando Domingo = 0
    .getDate() - retorna direitinho o dia do mês
*/

data = new Date()
console.log(data)
console.log(data.getMonth())
console.log(data.getDay())
console.log(data.getDate())//retorna o dia do mês
console.log(data.getFullYear())

