btns = document.getElementsByTagName("button");
const relogio = document.getElementById("relogio");


for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    let acao = e.target.innerHTML;

    switch (acao) {
      case 'iniciar' :
        e.target.disabled = true  
        iniciar();
      break;
      case 'pausar' :
        pausar();
      break;
      case 'zerar' :
        console.log('eh zerar')
      break;
    }
  })
}

contador = {
  segundos: 0,
  minutos: 0,
  horas: 0,

  setSegundos(){
    this.segundos === 60 ? this.setMinutos() : this.segundos = this.segundos + 1;
  },

  setMinutos(){
    this.segundos = 0;
    this.minutos === 60 ? this.setHoras() : this.minutos = this.minutos + 1; 
  },

  setHoras(){
    this.minutos = 0;
    this.horas = this.horas + 1;
  },

  getTime(){
    this.segundos < 10 ? segundosLong = '0' + this.segundos : segundosLong = this.segundos;
    this.minutos < 10 ? minutosLong = '0' + this.minutos : minutosLong = this.minutos;
    this.horas < 10 ? horasLong = '0' + this.horas : horasLong = this.horas;

    return `${horasLong}:${minutosLong}:${segundosLong}`;
  }
}

function iniciar(){
  setInterval(()=>{
      contador.setSegundos()
      relogio.textContent = contador.getTime()
  }, 1000);
}

function pausar(){
  clearInterval(start)
}