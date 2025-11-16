ejecutarPrueba1 = function(){
    let mensaje=recuperarTexto("txtCadena");
    recorerCadena(mensaje);
}

ejecutarPrueba2 = function(){
    let mensaje=recuperarTexto("txtCadena");
    cadenaInversa(mensaje);
}

ejecutarPrueba3 = function(){
    let mensaje=recuperarTexto("txtCadena");
    let letra=recuperarTexto("txtLetra");
    buscarLetra(mensaje, letra);
}



recorerCadena = function(cadena){
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
}

cadenaInversa = function(cadena){
    let inversa="";
    let caracter;
    for(let i=cadena.length -1;i>=0;i--){
        caracter=cadena.charAt(i);
        inversa += caracter;
    }
    console.log(inversa);
}

buscarLetra = function(cadena, letra){
    let existeLetra=false;
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]==letra){
            existeLetra=true;
        }
    }
    if(existeLetra) return true;
    else return false;
}