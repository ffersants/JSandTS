function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}
var total = 0;

function criaPromises(valor, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            total = (Number(time) + Number(total))
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
    console.log(`Todas as promises terminaram de executar e isso demorou um total de ${total} segundos!`)
})
