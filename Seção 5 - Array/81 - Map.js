arrayFull = ['Brian', 'Julie', 'Pam'];

mapped = arrayFull.map(value => `${value} ESTUDANTE`);

console.log(mapped)

studentsList = [
    {nome: 'Fernando Ferreira', idade: 20},
    {nome: 'Ana Cláudia', idade: 21},
    {nome: 'Igor Machado', idade: 14},
    {nome: 'Tarsília Pietá', idade: 17},
    {nome: 'Agmar Andrade', idade: 19}
]
//recuperar somente os valores na chave "nome"
studentMapped = studentsList.map(user => user.nome);
console.log(studentMapped);
//proteger o array principal contra as mudanças futuras passando ele para um outro array
studentsListCopy = studentsList.map((el) => el);
//adicionar um id em cada objeto
studentsListCopy.map(user => user.id = Math.floor(Math.random() * 9));
console.log(a)