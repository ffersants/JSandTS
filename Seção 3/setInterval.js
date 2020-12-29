function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

timer = setInterval(() => {
    console.log(mostraHora())
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 6000)