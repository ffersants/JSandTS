//DELETA VALOR MAS PRESERVA O ÍNDICE
const meuArrei = ['index0','index1', 'index2'];
console.log(meuArrei + "| |" + meuArrei.length);
delete meuArrei[2];
//mesmo tamanho do array após delete 
console.log(meuArrei + "| |" + meuArrei.length);

//OPERAÇÕES COM .POP() E .SHIFT()
{
    const meuArrei = ['index0','index1', 'index2'];
    console.log(meuArrei.pop());
    console.log(meuArrei);

    console.log(meuArrei.shift());
    console.log(meuArrei);
}

//ATRIBUIÇÃO POR ENDEREÇAMENTO vs. CÓPIA DE VALORES

    {//ATRIBUIÇÃO POR ENDEREÇAMENTO
        const meuArrei = ['index0','index1', 'index2'];
        const meuArrei2 = meuArrei;

        console.log(`meuArrei: ${meuArrei} \n meuArrei2: ${meuArrei2}`);
        meuArrei.pop();
        console.log(`meuArrei: ${meuArrei} \n meuArrei2 ${meuArrei2}`);
        meuArrei2.shift();
        console.log(`meuArrei: ${meuArrei} \n meuArrei2: ${meuArrei2}`);
    }
    {//ATRIBUIÇÃO POR SPREAD
        const meuArrei = ['index0','index1', 'index2'];
        const meuArrei2 = [...meuArrei];
        console.log(`meuArrei: ${meuArrei} \n meuArrei2: ${meuArrei2}`);
        meuArrei.pop();
        console.log(`meuArrei: ${meuArrei} \n meuArrei2: ${meuArrei2}`);
    }
    
    //CONVERTER STRING PARA ARRAY
    {
        texto = 'Isso - é - um - texto';
        textIsArray = texto.split(' - ');
        console.log(textIsArray);
    }


    
