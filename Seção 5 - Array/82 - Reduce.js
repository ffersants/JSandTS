meuArray = [25, 13, 45, 18, 19];

meuArrayReduced = meuArray.reduce((acumulador, valor, index, array) => {
	return acumulador += valor;
}, 0);

console.log(meuArrayReduced)
//reduce as filter
meuArrayPares = meuArray.reduce(function(arreiComPares, valor){
    valor % 2 === 0 ? arreiComPares.push(valor) : false
    return arreiComPares
}, [])

console.log(meuArrayPares)

//reduce as map
pessoas = [
    {nome: 'Fernando', cidade: 'Samambaia'},
    {nome: 'Ana', cidade: 'Candanga'},
    {nome: 'Taís', cidade: 'Taguatinga'}
];

pessoas.reduce(function(acumulador, valor){
    valor.pais = acumulador;
    return acumulador;
}, 'Brasil');

console.log(pessoas)