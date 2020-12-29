{
    a1 = [`valor1`, `valor2`, `valor3`];

    a2 = a1;

    console.log(a1)
    console.log(a2)

    a2.push(`a4`)


    console.log(a1)
    console.log(a2)
}

{
    a1 = [`valor1`, `valor2`, `valor3`];
    a2 = [...a1]

    console.log(a1)
    console.log(a2)

    a2.push(`a4`)


    console.log(a1)
    console.log(a2)
}
