const form = document.querySelector("#formulario");

inputs = {
  altura(value){
    return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d)/, '$1.$2')    
    .replace(/(\.\d{2})\d+?$/, "$1")
  }, 

  peso(value){
    return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{2})/, "$1.$2")
    .replace(/(\d{2})(\.)(\d)(\d{2})/, "$1$3$2$4")
    .replace(/(\.\d{2})\d+?$/, "$1")
  }
}

document.querySelectorAll('input').forEach(($input) => {
  const field = $input;
  field.addEventListener("input", (e) => {
    inputName = e.target.name;
    e.target.value = inputs[inputName](e.target.value);
    
  })
})

form.addEventListener("submit", e => {
  e.preventDefault()
  //e.target eh todo o formulario
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  //convertendo de string para number sem parseInt or parseFloat
  const peso = Number(inputPeso.value);
  
  const altura = Number(inputAltura.value);
  result = Math.round(peso / (altura * altura))
  r = document.getElementById("resultado");
  r.innerHTML = result

})