arrayFull = [11, 8, 10, 22, 15, 5];
arrayFiltered = arrayFull.filter(value => value < 15);
console.log(arrayFiltered)


//the filter stucture... let's see the arguments in the callback function
arrayFull = ['Brian', 'Julie', 'Pam']
arrayFull.filter((valor, index, array) => console.log(valor, index, array))


//the filter in objects
studentsList = [
    {nome: 'Fernando Ferreira', idade: 20, sala: '3B'},
    {nome: 'Ana Cláudia', idade: 21, sala: '1A'},
    {nome: 'Igor Machado', idade: 14, sala: '7C'},
    {nome: 'Tarsília Pietá', idade: 17, sala: '1A'},
    {nome: 'Agmar Andrade', idade: 19, sala: '1A'}
]

studentsFiltered = studentsList.filter(aluno => aluno.sala === '7C')

console.log(studentsFiltered)