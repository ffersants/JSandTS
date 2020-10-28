const form = document.querySelector("#formulario");

form.addEventListener("submit", e => {
  e.preventDefault()
  //e.target eh todo o formulario
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
              //convertendo de string para number sem parseInt or parseFloat
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  console.log(`${peso} e ${altura} sao ${typeof peso} e ${typeof altura}`)
})