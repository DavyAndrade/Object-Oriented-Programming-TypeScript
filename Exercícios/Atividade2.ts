// Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto avião, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Aviao {
    modelo: string;
    marca: string;
    ano: Number;

    constructor(modelo: string, marca: string, ano: Number){
      this.modelo = modelo
      this.marca = marca
      this.ano = ano
    }

    mostrarInfo(): void{
        console.log(`\nEsse é um Avião do Modelo ${this.modelo}, da Empresa ${this.marca}, do Ano: ${this.ano}\n`)
    }
 }
 var fun: Aviao = new Aviao("182 Skyline", "Cessna", 1956);
 fun.mostrarInfo()