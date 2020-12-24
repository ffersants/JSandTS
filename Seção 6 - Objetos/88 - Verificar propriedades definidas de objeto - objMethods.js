//Método utilizado para visualizar os descritores definidos para uma propriedade de um objeto.

//PRIMEIRO TEMOS UM OBJETO E A DEFINIÇÃO DOS DESCRITORES DE UM ATRIBUTO
        //OBJETO
function MeuObjeto(num4){
    //ATRIBUTO
    Object.defineProperty(this, 'num4', {  
        //DESCRITORES
        enumerable: true,
        configurable: true,
        writable: false,
        value: num4
    })
}
instanceOne = new MeuObjeto(3)
//AGORA VEJAMOS OS DESCRITORES

console.log(Object.getOwnPropertyDescriptor(instanceOne, 'num4'))