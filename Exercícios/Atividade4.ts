// Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe, em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações deste objeto no console.

   class Funcionario {
    nome: string;
    idade: Number;
    cargo: string;

    constructor(nome:string, idade: Number, cargo: string){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }
    mostrarInfo(){
        console.log(`\nDados do Funcionário!!\n\nNome: ${this.nome}\nIdade: ${this.idade}\nCargo na Empresa: ${this.cargo}`)
    }
   }
 var fun: Funcionario = new Funcionario("Carlos", 44, "Desenvolvedor Senior")
 fun.mostrarInfo()
