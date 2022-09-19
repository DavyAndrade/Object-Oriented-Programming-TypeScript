// Crie uma classe cliente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto cliente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class Cliente {
	nome: string;
	idade: number;
	estaVivo: boolean;
	
	constructor(nome: string, idade: number, estaVivo: boolean){
		this.nome = nome;
		this.idade = idade;
		this.estaVivo = estaVivo;
	}

	mostrarInfo(): void{
		console.log(`\nNome do Cliente: ${this.nome}\nIdade do Cliente: ${this.idade}`)
	}
}

var fun: Cliente = new Cliente("Paulo", 33, true);
fun.mostrarInfo()

