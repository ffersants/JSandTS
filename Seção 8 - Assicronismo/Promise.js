{
    function rand(min, max){
        min *= 1000;
          max *= 1000;
          return Math.floor(Math.random() * (max - min) + min)
      }
      
      function esperaAi(msg, tempo){
        //Envolve-se na promise aquela função que sabemos que pode demorar a ser completada
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  //console.log(msg)
              }, tempo)
          });
      }
      
      esperaAi(`Vai demorar um pouco`, rand(1, 10))
}

{
    function rand(min, max){
        min *= 1000;
          max *= 1000;
          return Math.floor(Math.random() * (max - min) + min)
      }
      
      function esperaAi(msg, tempo){
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  //chamará o then e passa como argumento a mensagem recebida pelo parametro em esperaAi
                  resolve(msg)
                //aqui a chamada do resolve demorará um tempo aleatório 
              }, tempo)
          });
      }
      
      esperaAi(`Vai demorar um pouco`, rand(1, 10))
          .then( mensagem => {
              //e após esse tempo aleatório, será printado na tela a mensagem recebida
              console.log(mensagem)
              //é necessário retornar a função, que por sua vez retorna a promise que chamará o próximo then
              return esperaAi(`Mensagem 1`, rand(1, 5))
          })
          .then( mensagem => {
            console.log(mensagem)
          })
}