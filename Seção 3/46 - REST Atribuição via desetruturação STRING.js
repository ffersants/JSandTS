
const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
//CASO 1 - Usando o operador rest (...)
{
    let [firstLetter, secondLetter, thirdLetter, ...rest] = letras;
    console.log(firstLetter)
}

//CASO 2 - Ignorando alguns valores no array e depois pegando o resto
{   
    //esse espaço abaixo indica que desejo pular o valor naquele índice do array
    let [firstLetter, , thirdLetter, fourthLetter, ...rest] = letras;
    console.log(thirdLetter)
}

//CASO 3 - Exercitando

veiculos = [
//           0         1          2 
    /*0*/['carro', 'moto', 'caminhão'],
//           0         1          2
    /*1*/['avião', 'helicóptero', 'teco-teco'],
//           0         1          2  
    /*2*/['canoa', 'jet ski', 'lancha']
]
//ABORDAGEM 1
let [ , [ , , aereo]] = veiculos;

console.log(aereo);

//ABORDAGEM 2
let [lista1, lista2, lista3] = veiculos;
let [ , , teco] = lista2;
console.log(teco)