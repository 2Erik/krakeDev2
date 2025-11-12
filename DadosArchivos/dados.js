function jugar(){
    const aleatorio=lanzarDado();
    cambiarTexto("lblNumero", aleatorio);

    if(aleatorio>3) cambiarTexto("lblResultado","GANASTES");
    else cambiarTexto("lblResultado", "ESTAS DE MALAS");
}

function lanzarDado(){
    const aleatorio=Math.floor(Math.random()*6)+1;
    return aleatorio
}