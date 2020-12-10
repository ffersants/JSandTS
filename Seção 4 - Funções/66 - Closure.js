function GerenciarFuncionarios(){
  cadastrados = [];

  function cadastrar(nome) {
    if(nome === '') console.log('Favor informar o nome completo!')
    funcionario = nome;
    cadastrados.push(funcionario);
  }

  function remover(funcionario){
    cadastrados.splice(cadastrados.indexOf(funcionario), 1);
  }

  function getFuncionarios(){
    return cadastrados;
  }

  return{
    cadastrar: cadastrar,
    remover: remover,
    verFuncionarios: getFuncionarios
  }
}

gerenciaFuncionarios = GerenciarFuncionarios();

gerenciaFuncionarios.cadastrar('Fernando Ferreira');
console.log(gerenciaFuncionarios.verFuncionarios());

gerenciaFuncionarios.cadastrar('Felipe Santos')
console.log(gerenciaFuncionarios.verFuncionarios());

gerenciaFuncionarios.remover("Fernando Ferreira");
console.log(gerenciaFuncionarios.verFuncionarios());;
