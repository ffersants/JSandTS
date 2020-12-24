function MeuObjeto(num1, num2, num4){
    this.num1 = num1;
    this.num2 = num2;
    Object.defineProperty(this, 'num4', {  
        enumerable: true,
        configurable: true,
        get: function() {
            return num4
        },
        set: function(valor){
            typeof valor !== Number ? console.log('Erro: número inválido') : num4 = valor;
        }
    })

        Object.defineProperties(this,{
            num5: {
                enumerable: true,
                configurable: true,
                get: function() {
                    return num5;
                },
                set: function(valor){
                    typeof valor !== Number ? console.log('Erro: número inválido') : num5 = valor;
                }
            },
            num6: {
                enumerable: true,
                configurable: true,
                get: function() {
                    return num6
                },
                set: function(valor){
                    typeof valor !== Number ? console.log('Erro: número inválido') : num6 = valor;
                }
            }
        })
}
numeros = new MeuObjeto(5, 10, 15)
console.log(numeros.num4)
numeros.num4 = 'dfd';
console.log(numeros.num4)



// Object.keys(a).forEach(function(ae) {
//     console.log(a[ae] * 2)
// })
