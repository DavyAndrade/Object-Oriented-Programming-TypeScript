// Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Produto {
    tipo: string
    sistema: string
    versao: Number
   
    constructor(tipo: string, sistema: string, versao: Number){
       this.tipo = tipo
       this.sistema = sistema
       this.versao = versao
    }
   
     mostrarInfo(){
       console.log(`\nEsse produto é um ${this.tipo} com o Sistema Operacional ${this.sistema} da Versão ${this.versao}\n`)
     }
    }
   
    var fun: Produto = new Produto("Celular", "Android", 9)
    fun.mostrarInfo()