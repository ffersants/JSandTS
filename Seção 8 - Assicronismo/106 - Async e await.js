function esperaAi(txt, time) {
    return new Promise((resolve, reject) => {
        setTimeout((txt, time) => {
            console.log(`isso demorará um pouquinho`)
            resolve(txt)
        }, time * 1000)
    }).then(t => console.log(t))
}

async function main() {
    console.log('iniciando aqui')
    await esperaAi('Promise 1 executada', 3)
    console.log(`passando para a prox funcao`)
    await esperaAi(`Promisse 2 executada`, 5)
    console.log(`passando para a prox funcao`)
    await esperaAi(`Promisse 3 executada`, 8)
    console.log(`finalizado`)
}

main()