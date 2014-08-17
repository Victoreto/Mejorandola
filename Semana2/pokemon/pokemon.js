function Pokemon(n,t,v,a){
	this.nombre = n;
	this.tipo = t;
	this.vida = v;
	this.ataque = a;
	this.imagen = function (){
		return this.nombre + '.png'
	}
}

var pikachu = new Pokemon("Pikachu", "Electrico", 20, 30);
var nombre = document.getElementById('nombre');
var tipo = document.getElementById('tipo');
var vida = document.getElementById('vida');
var ataque = document.getElementById('ataque');
var imagen = document.getElementById('imagen');

nombre.innerHTML = pikachu.nombre;
tipo.innerHTML = 'Tipo: ' + pikachu.tipo;
vida.innerHTML = 'Vida: ' + pikachu.vida;
ataque.innerHTML = 'Ataque ' + pikachu.ataque;
imagen.innerHTML = '<img src="'+ pikachu.imagen() +'" alt="Pokemon" id="imagen">'