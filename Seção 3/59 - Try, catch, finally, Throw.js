log = ''

try{
    console.log('Todo try deve ter um catch e/ou finally');
    console.log(a)
} catch(e){
    //catch só é executado se houver algum erro em try
    log = e;
} finally{
    //dando erro ou não, o finally é sempre executado
    if(log = "[ReferenceError: a is not defined]"){
        throw new ReferenceError("Variável não encontrada");
    } 
    console.log("excecução para no throw");       
}
    
