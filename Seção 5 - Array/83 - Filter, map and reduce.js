numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

result = numbers
.filter(num => num % 2 === 0)
.map(num => num*2)
.reduce(function(coletor, num){
    return coletor += num    
});

console.log(result)
//só pares -> 50, 80, 2, 8, 22
//pares x2 -> 100, 160, 4, 16, 44
//todos somados -> 324