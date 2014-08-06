function Pokemon(name, hp, ad){
	this.nombre = name;
	this.vida = hp;
	this.ataque = ad;
}

function Combate(pokemon1, pokemon2){
	var turno = Math.floor(Math.random()*2);
	console.log("########## Comineza la batalla ##########\n");
	console.log("Vida de " + pokemon1.nombre + " : " + pokemon1.vida.toString());
	console.log("Vida de " + pokemon2.nombre + " : " + pokemon2.vida.toString());
	console.log("\n");

	while(pokemon1.vida > 0 && pokemon2.vida > 0){
		if(turno == 1){
			console.log(pokemon1.nombre + " ataca a " + pokemon2.nombre);
			pokemon2.vida = pokemon2.vida - pokemon1.ataque;
			console.log("A " + pokemon2.nombre + " le quedan " + pokemon2.vida.toString() + " puntos de vida\n");
			turno = 2;
		}else{
			console.log(pokemon2.nombre + " ataca a " + pokemon1.nombre);
			pokemon1.vida = pokemon1.vida - pokemon2.ataque;
			console.log("A " + pokemon1.nombre + " le quedan " + pokemon1.vida.toString() + " puntos de vida\n");
			turno = 1;
		}
	}

	if (pokemon1.vida <= 0){
		console.log(pokemon1.nombre + " pierde la batalla XP");
		console.log("############## " + pokemon2.nombre + " WIN ##############");
	}else{
		console.log(pokemon2.nombre + " pierde la batalla XP");
		console.log("############## " + pokemon1.nombre + " WIN ##############");
	}
}

pikachu = new Pokemon("Pikachu",100,55);
jigglypuff = new Pokemon("Jigglypuff",100,45);
iniciar = Combate(pikachu, jigglypuff);
