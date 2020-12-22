//concatenar arrays é algo simples mas que deve ser feito da maneira correta
array1 = ['Fernando', 'Amanda', 'Ricardo'];
array2 = ['Ana', 'João', 'Giovana'];

array3 = array1 + array2;//não é a maneira ideal de para concatenar dois arrays

array3 = array1.concat(array2);//essa é a maneira correta
console.log(array3);

array3 = [...array1, ...array2];//esse é apenas um outro meio para concatenar dois arrays
console.log(array3);