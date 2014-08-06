var peso = document.getElementById('peso');
var divResul = document.getElementById('pesoEnMarte');

function start(){
    peso = parseInt(peso.value);
    if(peso == ''){
        alert('Porfavor ingrese su peso');
    }else{
        var pesoEnMarte = (peso/9.81) * 3.771;
        pesoEnMarte = Math.round(pesoEnMarte * 100) / 100;
        divResul.innerHTML = pesoEnMarte;
    }
}
