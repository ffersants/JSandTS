function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function retornaPromise(txt, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(txt)
        }, time);
    })
}

promises = [
    retornaPromise('Vitória do cavalo 1', rand(1, 5)),
    retornaPromise('Vitória do cavalo 2', rand(1, 5)),
    retornaPromise('Vitória do cavalo 3', rand(1, 5)),
    retornaPromise('Vitória do cavalo 4', rand(1, 5))
]

Promise.race(promises).then(txt => console.log(txt))