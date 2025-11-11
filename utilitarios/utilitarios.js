function saludar(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
}

function recuperarTexto(idComponente){
    let cmp;
    let valorIngresado;
    cmp=document.getElementById(idComponente);
    valorIngresado=cmp.value;

    return valorIngresado;
}

function recuperarInt(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let numeroEntero=parseInt(valorCaja);

    return numeroEntero;
}

function recuperarFloat(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let numeroFloat=parseFloat(valorCaja);

    return numeroFloat;
}