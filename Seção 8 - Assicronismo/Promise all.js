function criaPromises(valor){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(valor + `. Terminou de rodar.`)
            resolve()
        }, 5000)
    })
}

criaPromises(`Primeira promise`).then(() => {
    console.log(`eh isso ai`)
})
