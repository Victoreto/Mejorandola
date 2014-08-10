function start(){
	var peso = document.getElementById('peso');
	var divResul = document.getElementById('pesoEnMarte');
	peso = parseInt(peso.value);
    if(peso === 0 || peso === ''){
        alert('Porfavor ingrese su peso');
    }else{
        var pesoEnMarte = (peso/9.81) * 3.771;
        pesoEnMarte = Math.round(pesoEnMarte * 100) / 100;
        divResul.innerHTML = pesoEnMarte;
    }
}
