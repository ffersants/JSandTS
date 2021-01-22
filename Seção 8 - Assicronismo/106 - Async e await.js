function esperaAi(txt, time) {
    return new Promise((resolve, reject) => {
        console.log(`isso demorará um pouquinho`)
        //erro será tratado dentro do bloco catch na função async
        if (typeof txt !== 'string') reject('Bad value')
        setTimeout(() => {
            resolve(txt)
        }, time * 1000)
    })
}
//uma declaração async function pode ter chamadas await de funções que retornam promises
async function main() {
    //try = .then() ----- catch = .catch()
    try {
        promise1 = await esperaAi('Promise 1 executada', 2)
        console.log(promise1)

        promise2 = await esperaAi(`Promisse 2 executada`, 2)
        console.log(promise2)

        promise3 = await esperaAi(5, 2)
        console.log(promise3)
    } catch (e) {
        console.error('Oops! ' + e)
    }
}

main()

//////////////ASYNC FUNCTION EXPRESSION//////////////
{
    function resolveAfter2Seconds(y) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(y)
            }, 2000)
        })
    }

    soma = async function (x) {
        valor1 = await resolveAfter2Seconds(30)
        valor2 = await resolveAfter2Seconds(20)
        return valor1 + valor2 + x
    }
    soma(10).then(resultado => console.log(resultado))
}