function start(){
	var peso = document.getElementById('peso');
	var divResul = document.getElementById('pesoEnMarte');
    var mensaje = document.getElementById('mensaje');
	peso = parseInt(peso.value);
    if(peso === 0 || peso === ''){
        alert('Porfavor ingrese su peso');
    }else{
        var pesoEnMarte = (peso/9.81) * 3.771;
        pesoEnMarte = Math.round(pesoEnMarte * 100) / 100;
        mensaje.className = 'alert alert-success';
        mensaje.innerHTML = '<strong>Tu peso en marte sería: ' + pesoEnMarte + ' Kg.</strong>';
    }
}
