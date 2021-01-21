function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}
var total = 0;

function criaPromises(valor, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //o valor de time é passado como um objeto do tipo array com os três valores de time
            resolve(total)
        }, time)
    })
}

let promises = [
    criaPromises('Promise 1', rand(1, 10)),
    criaPromises('Promise 2', rand(3, 5)),
    criaPromises('Promise 3', rand(3, 7))
]

Promise.all(promises).then((total) => {
    total = total.reduce((acumulador, valor) => {
        return acumulador += valor
    }, 0)
    console.log(`Todas as promises terminaram de executar e isso demorou um total de ${(total / 1000).toFixed(2)} segundos!`)
})
