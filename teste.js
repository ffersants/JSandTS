function doSomething() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('Primeiro isso');
      resolve();
    }, 5000)

  })
}

doSomething()
  .then(() => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Depois isso');
        resolve()
      }, 3000)
    })

  })
  .then(() => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Por último isso');
        try {
          lancarErro(5)
        } catch (err) {
          reject(err)
        } finally {
          resolve()
        }
      }, 8000)
    })

  })
  .catch((err) => {
    console.log('ops, teve erro ' + err);
  })
  .then(() => {
    console.log('Execução finalizada')
  })






function lancarErro(num) {
  if (typeof num === 'number') throw new Error('Isso é um numero')
}