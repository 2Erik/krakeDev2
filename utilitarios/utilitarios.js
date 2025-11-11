function saludar(){
    let nombre=recuperarTecto("txtNombre");
    let apellido=recuperarTecto("txtApellido");
    console.log(nombre, apellido);
}

function recuperarTecto(idComponente){
    let cmp;
    let valorIngresado;
    cmp=document.getElementById(idComponente);
    valorIngresado=cmp.value;
    return valorIngresado;
}