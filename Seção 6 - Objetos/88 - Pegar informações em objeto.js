//dado o objeto abaixo
obj1 = {produto: 'Cama', tipo: 'Box', preco: 2500};
//é possível resgatar somente seus valores
console.log(Object.values(obj1))

//é possível resgatar arrays com o par chave / valor
console.log(Object.entries(obj1))
/*[ 
    [ 'produto', 'Cama' ], 
    [ 'tipo', 'Box' ], 
    [ 'preco', 2500 ] 
]*/

//é possível pegar somente as chaves
console.log(Object.keys(obj1))