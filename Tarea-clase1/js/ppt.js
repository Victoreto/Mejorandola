var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
var mensaje = document.getElementById('mensaje');
var estado = document.getElementById('estado');

function ram(min, max){
	var numero = Math.floor( Math.random() * (max - min + 1) + min );
	return numero;
}

function decir(mensaje, resul){
	var ganar = 2;
	var empate = 1;
	var perder = 0;

	estado.innerHTML = mensaje;
	if(resul == 0){
		estado.classList.remove();
		estado.className = 'lose';
	}else if(resul == 1){
		estado.classList.remove();
		estado.className = 'draw';
	}else{
		estado.classList.remove();
		estado.className = 'win';
	}
}

function jugar(){
	var opcionUsuario = document.getElementById('selec').value;
	var opcionMaquina = ram(0,4);
	mensaje.innerHTML = opciones[opcionUsuario] + ' vs ' + opciones[opcionMaquina];

	if(opcionUsuario == piedra){
		if(opcionMaquina == piedra){
			decir('Empate', 1);
		}else if(opcionMaquina == papel){
			decir('Perdiste', 0);
		}else if(opcionMaquina == tijera){
			decir('Ganaste', 2);
		}else if(opcionMaquina == lagarto){
			decir('Ganaste', 2);
		}else{
			decir('Perdiste', 0);
		}
	}else if(opcionUsuario == papel){
		if(opcionMaquina == piedra){
			decir('Ganaste', 2);
		}else if(opcionMaquina == papel){
			decir('Empate', 1);
		}else if(opcionMaquina == tijera){
			decir('Perdiste', 0);
		}else if(opcionMaquina == lagarto){
			decir('Perdiste', 0);
		}else{
			decir('Ganaste', 2);
		}
	}else if(opcionUsuario == tijera){
		if(opcionMaquina == piedra){
			decir('Perdiste', 0);
		}else if(opcionMaquina == papel){
			decir('Ganaste', 2);
		}else if(opcionMaquina == tijera){
			decir('Empate', 1);
		}else if(opcionMaquina == lagarto){
			decir('Ganaste', 2);
		}else{
			decir('Perdiste', 0);
		}
	}else if(opcionUsuario == lagarto){
		if(opcionMaquina == piedra){
			decir('Perdiste', 0);
		}else if(opcionMaquina == papel){
			decir('Ganaste', 2);
		}else if(opcionMaquina == tijera){
			decir('Perdiste', 0);
		}else if(opcionMaquina == lagarto){
			decir('Empate', 1);
		}else{
			decir('Ganaste', 2);
		}
	}else{
		if(opcionMaquina == piedra){
			decir('Ganaste', 2);
		}else if(opcionMaquina == papel){
			decir('Perdiste', 0);
		}else if(opcionMaquina == tijera){
			decir('Ganaste', 2);
		}else if(opcionMaquina == lagarto){
			decir('Perdiste', 0);
		}else{
			decir('Empate', 1);
		}
	}
}
