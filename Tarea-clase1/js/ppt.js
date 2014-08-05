function ram(min, max){
	var numero = Math.floor( Math.random() * (max - min + 1) + min );
	return numero;
}

function jugar(){

	var piedra = 0;
	var papel = 1;
	var tijera = 2;

	var opciones = ['Piedra', 'Papel', 'Tijera'];
	var opcionMaquina = ram(0,2);
	var opcionUsuario = document.getElementById('selec').value;
	var mensaje = document.getElementById('mensaje');

	mensaje.innerHTML = opciones[opcionUsuario] + ' vs ' + opciones[opcionMaquina];

	if (opcionUsuario == piedra){
		if (opcionMaquina == piedra){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Empate!</h2>';

		}else if(opcionMaquina == papel){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Perdiste!</h2>';

		}else if(opcionMaquina == tijera){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Ganaste!</h2>';

		}
	}else if (opcionUsuario == papel){
		if (opcionMaquina == piedra){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Ganaste!</h2>';

		}else if(opcionMaquina == papel){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Empate!</h2>';

		}else if(opcionMaquina == tijera){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Perdiste!</h2>';

		}
	}else {
		if (opcionMaquina == piedra){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Perdiste!</h2>';

		}else if(opcionMaquina == papel){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Ganaste!</h2>';

		}else if(opcionMaquina == tijera){

			mensaje.innerHTML = mensaje.innerHTML + '<br/>' + '<h2>Empate!</h2>';

		}
	}

}
