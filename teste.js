function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}
var total = 0;

function criaPromises(valor, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Number(time) + Number(total))

    }, time)
  })
}

let promises = [
  criaPromises('Promise 1', rand(1, 10)),
  criaPromises('Promise 2', rand(3, 5)),
  criaPromises('Promise 3', rand(3, 7))
]

tudo = Promise.all(promises).then((i) => {
  valor = 0
  console.log(`chegou aqui`)
  td = i.reduce((el, acumulador) => {
    return valor += el
  }, 0)

  console.log(td)
})


