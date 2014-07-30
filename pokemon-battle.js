var Pikachu = {
	"hp":100,
	"ad":55,
	"win":function(){
		console.log("Pikachu Win!");
	}
};

var Jigglypuff = {
	"hp":100,
	"ad":45,
	"win":function(){
		console.log("Jigglypuff Win!");
	}
};

turno = Math.floor(Math.random()*2);

while(Pikachu.hp > 0 && Jigglypuff.hp > 0){
	if (turno == 1){
		Jigglypuff.hp = Jigglypuff.hp - Pikachu.ad;
		console.log("Ataque de Pikachu");
		turno = 0;
	}else{
		Pikachu.hp = Pikachu.hp - Jigglypuff.ad;
		console.log("Ataque de Jigglypuff");
		turno = 1;
	}
}

if(Pikachu.hp <= 0){
	Jigglypuff.win()
}else{
	Pikachu.win()
}