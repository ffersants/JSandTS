//////////////////////////////////HOSTING EM VARIÁVEL VAR/////////////////////////////

//Dentro das variáveis var, let e const, somente variáveis declaradas com a keyword var sofre o fenômeno de hoisting.
//No entanto, a variável é apenas inicializada e nenhum valor lhe é atribuído. Portanto, ela é tida como undefined,
console.log(nome);//cannot access "nome" before initialization
let nome = 'fernando';

console.log(idade);//undefined
var idade = 20;
//Declarar uma variável com a keyword var, esperando o evento de hoisting é o mesmo que isso...

var idade;
console.log(idade);
idade = 20;
//Sendo assim, a melhorar maneira de provocar hoisting em uma variável, é declarando ela dentro de uma simples função que, nativamente, sofre o hoisting

hoistingName()
console.log(nome);//fernando

function hoistingName(){
  nome = "Fernando";
}