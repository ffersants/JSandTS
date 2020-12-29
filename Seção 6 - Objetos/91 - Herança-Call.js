//o método .call() permite usarmos uma função em diferentes objetos 
//como se esta fosse método deles
{
    //uma função global
    getFullName = function (){
            return `${this.nome}  ${this.sobrenome}`;

    }
    person1 = {
        nome: 'Fernando',
        sobrenome: 'Santos Ferreira'
    };
    person2 = {
        nome: 'Felipe',
        sobrenome: 'Ferreira'
    };
    //abaixo podemos ver a mesma função em dois ambientes diferentes
    console.log(getFullName.call(person1))
    console.log(getFullName.call(person2))
}

{

    function ConstroiAlfabeto(a, b, c, d) {
        this.a = a;
	    this.b = b;
	    this.c = c;
	    this.d = d;
    }

    function Alfabeto1(a, b, c, d) {
        ConstroiAlfabeto.call(this, a, b, c, d)
    }

    function Alfabeto2(a, b, c, d) {
        ConstroiAlfabeto.call(this, a, b, c, d)
    }

    function Alfabeto3(a, b, c, d) {
        ConstroiAlfabeto.call(this, a, b, c, d)
    }

    a1 = new Alfabeto1(1,2,3,4);
    a2 = new Alfabeto2(1,2,3,4);
    a3 = new Alfabeto3(1,2,3,4);

}