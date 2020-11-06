# JSandTS
Estudos de Javascript e Typescript
<h1>Hoisting em variáveis</h1>
Dentro das variáveis <i>var, let e const</i>, somente variáveis declaradas com a keyword <strong>var</strong> sofre o fenômeno de hoisting.
<br>
No entanto, a variável é apenas inicializada e nenhum valor lhe é atribuído. Portanto, ela é tida como undefined,

```java
console.log(nome);/cannot access "nome" before initialization
let nome = 'fernando';

console.log(idade);/undefined
var idade = 20;
```

Declarar uma variável com a keyword <strong>var</strong>, esperando o evento de hoisting é o mesmo que isso...
```java
var idade;
console.log(idade);
idade = 20;
```

Sendo assim, a melhorar maneira de provocar hoisting em uma variável, é declarando ela dentro de uma simples função que, nativamente, sofre o hoisting
```java
hoistingName()
console.log(nome);//fernando

function hoistingName(){
  nome = "Fernando";
}
```
