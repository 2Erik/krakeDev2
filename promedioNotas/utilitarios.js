function mostrarTextoCaja(idComponente, mensaje){
    let cmp=document.getElementById(idComponente);
    cmp.value = mensaje;
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

function mostrarTexto(idComponente, mensaje){
    let cmp=document.getElementById(idComponente);
    cmp.innerText = mensaje;
}

function mostrarImagen(idComponente, rutaImg){
    let cmp=document.getElementById(idComponente);
    cmp.src = rutaImg;
}