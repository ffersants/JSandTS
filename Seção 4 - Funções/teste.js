var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let a = 2;
}

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1

{
    let a = 4
}

console.log(a);