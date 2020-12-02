btns = document.getElementsByTagName("button");
const relogio = document.getElementById("relogio");
intervals = [];

for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    let acao = e.target.innerHTML;

    switch (acao) {
      case 'iniciar' :
        e.target.disabled = true;
        document.getElementById("pausar").disabled = false;
        start = setInterval(iniciar, 1000);
        intervals.push(start);
        relogio.classList = "";
      break;
      case 'pausar' :
        
        if(document.getElementById("iniciar").disabled){
          e.target.disabled = true;
          document.getElementById("iniciar").disabled = false;
          relogio.classList = 'pausado';
        };
        pausar();
      break;
      case 'zerar' :
        document.getElementById("pausar").disabled = false;
        document.getElementById("iniciar").disabled = false;
        relogio.innerHTML = contador.reset();
        relogio.classList = "";
        pausar();
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
  },

  reset(){
    this.segundos = 0;
    this.minutos = 0;
    this.horas = 0;
    return "00:00:00";
  }
}

function iniciar(){ 
  contador.setSegundos()
  relogio.textContent = contador.getTime()
}

function pausar(){
  intervals.forEach(i => {
    clearInterval(i)
  });
}