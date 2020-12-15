function CriarEmpresa(razaoSocial){
    return{
        empresaNome: razaoSocial,
        cnpj: 'undefined',
        get getEmpresaNome(){
            return this.empresaNome;
        },
        get getCnpj(){
            return this.cnpj;
        },
        set setCnpj(value){
            this.cnpj = value;
        }        
    }
}
longTech = CriarEmpresa('LongTech');
console.log(longTech.getEmpresaNome); //LongTech
longTech.setCnpj = 51981;
console.log(longTech.getCnpj);