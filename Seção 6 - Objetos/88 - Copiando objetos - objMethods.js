// {
//     obj1 = {produto: 'Cama', tipo: 'Box', preco: 2500};
//     obj2 = obj1;
//     //objetos linkados para o mesmo endereço de memória. 
//     //alterações refletem em ambas as partes
//     obj2.cor = 'Preto';
//     console.log(obj1)
// }

{
    obj1 = {produto: 'Cama', tipo: 'Box', preco: 2500};
    //copiar objeto via spread
    obj2 = {...obj1};
    obj1.cor = 'Preto';
    console.log(obj2)
}

{
    obj1 = {produto: 'Cama', tipo: 'Box', preco: 2500};
    //copiar objeto via spread e adicionar novas propriedades
    obj2 = {...obj1, vendedor: 'João'};
}

///////////////COPIANDO COM Objects.assign()
mainObject = {num: 25, str: 'ABC'};
copyObject = Object.assign({}, mainObject);
console.log(copyObject)