
typeof num !== 'number' || num < 0 || num > 100 ? console.log(`${num} não é um número válido`) : fizzBuzz(num);

function fizzBuzz(num){
    if(num % 5 === 0 && num % 3 === 0) return 'FizzBuzz';
    if(num % 5 === 0) return 'Buzz';
    if(num % 3 === 0) return 'Fizz';
    else return num;
}

console.log(fizzBuzz())