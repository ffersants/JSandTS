//uma execução não síncrona que resulta em uma catástrofe de chamada de funções
// {
//     function rand(min, max){
//         min *= 1000;
//         max *= 1000;
//         return Math.floor(Math.random() * (max - min) + min)
//       }
      
//       function esperaAi(msg, tempo){
//         setTimeout(() => {
//           console.log(msg)
//         }, tempo)
//       }
      
//       esperaAi('Frase 1', rand(1, 3))
//       esperaAi('Frase 2', rand(1, 3))
//       esperaAi('Frase 3', rand(1, 3))
// }

//resolvendo tal questão com funções callbacks

{
    function rand(min, max){
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min)
      }
      
      function esperaAi(msg, tempo, func){
        setTimeout(() => {
          console.log(msg)
          if(func) func()
        }, tempo)
      }
      
      esperaAi('Frase 1', rand(1, 3), ()=>{
        esperaAi('Frase 2', rand(1, 3), ()=>{
            esperaAi('Frase 3', rand(1, 3))
        })
      })
}

//mas quanto mais cresce o numero de funcoes a serem executadas apos outra,
//o encadeamento de funcoes callbacks como parametros acaba criando uma arvore de natal e 
//deixando o codigo nada legivel...
//para resolver tal questao, foi implementado a promise