/*
A validação do CPF é realizada da seguinte forma:
    1 - Pegamos os primeiros nove dígitos do CPF
    2 - Multiplicamo-os por 10 a 2
    
        Ex.:    
            CPF = 070.080.101-41
            0    7    0    0    8    0    1    0    1  
        x10   x9   x8   x7   x6   x5   x4   x3   x2
            0   63    0    0   48    0    4    0    2
        
    3 - Somamos o resultado das multiplicações
    
        Ex.: 
            0 + 63 + 0 + 0 + 48 + 0 + 4 + 0 + 2 = 117

    4 - Realizamos a seguinte operação para descobrir o décimo dígito do CPF:
        11 - (resultado % 11) = décimo dígito do CPF
        Se o resultado dessa operação for maior que 9, então o dígito é igual a 0

        Ex.: 
            11 - (117 % 11) = 4
        
    5 - Para descobrirmos o último dígito, devemos repetir o passo 2, mas incluindo
    o 10º dígito e iniciando a multiplicação em 11 ate 2.
*/

function recebeCpf(cpf){
    //D - qualquer valor que não seja número
    //g - faz a busca em toda a string
    //deixa somente os numeros - cria um array - converte cada item do array em numero
    //cpf = cpf.replace(/\D/g, "").split('').map(num => Number.parseInt(num));
    //deixasomente os numeros
    cpf = cpf.replace(/\D/g, "");
    //transforma a cadeia de numero em array
    cpf = Array.from(cpf)

    decimoDigito = pegaDigito(cpf, 10);
    decimoPrimeiroDigito = pegaDigito(cpf, 11);

    console.log(verificaValidadeDoCpf(decimoDigito, 9))
    console.log(verificaValidadeDoCpf(decimoPrimeiroDigito, 10))

    function verificaValidadeDoCpf(digito, posicao){
        if(digito > 9){
            digito = 0
        } 
       
        if(cpf[posicao] === digito){
            return "CPF valido!"
        } else{
            return "CPF invalido!"
        }
    }

    function pegaDigito(cpf, digitoDaVez){
    
        totalSoma = 0
        
        if(digitoDaVez === 10){
            loopControler = 10;
            digit = cpf.slice(0, 9).reduce((acumulador, valor, index, array) => {            
                acumulador += loopControler * valor;
                loopControler--;
                totalSoma = acumulador
                return totalSoma
            }, 0)
            
            return 11 - (totalSoma % 11);

        } if(digitoDaVez === 11){
            
            loopControler = 11;
            digit = cpf.slice(0, 10).reduce((acumulador, valor, index, array) => {            
                acumulador += loopControler * valor;
                loopControler--;
                totalSoma = acumulador
                return totalSoma
            }, 0)
            return 11 - (totalSoma % 11);

        } else{
            throw new Error("Apenas os digitos 10 ou 11 sao esperados.")
        }
         
    }

    //decimoPrimeiroDigito = 
}

recebeCpf("070.080.101-41")