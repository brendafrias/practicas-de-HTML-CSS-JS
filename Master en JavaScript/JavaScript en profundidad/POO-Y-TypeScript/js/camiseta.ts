//Interface
interface CamisetaBase{
	setColor(color);
	getColor();
}

/*/Decorador
function estampar(logo:string){
	return function(target: Function){
		target.prototype.estampacion = function(){
			console.log("Camiseta estampada con el logo de: " +logo);
		}
	}
}*/


//Clase (molde del objeto) //implemnts se usa para implementar la interface en una clase
//@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
//Propiedades(caracteristicas)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	//Metodos(funciones o acciones del objeto)

	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}

	public mostrarCamiseta(){
		return "color: " + this.color + " modelo: " + this.modelo + " marca: " + this.marca + " talla:" + this.talla + " precio: " + this.precio;
	}
}

//Herencia
//Clase hija
class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}

}

var camiseta = new Camiseta("azul", "manga corta", "Nike", "M", 102);

camiseta.setColor("rojo");
//camiseta.estampacion();
console.log(camiseta.mostrarCamiseta());


console.log(camiseta.getColor());







