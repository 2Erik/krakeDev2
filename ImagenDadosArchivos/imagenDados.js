let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarLanzamientos();
    modificarPuntos(resultado);

    if(puntos>15 || lanzamientos==0){
        limpiar();
    }
}

function modificarPuntos(numero){
    puntos+=numero;
    mostrarTexto("lblPuntos", puntos);
    if(puntos>15) {
        mostrarTexto("lblResultado", "GANASTES");
    }
}

function modificarLanzamientos(){
    lanzamientos--;
    mostrarTexto("lblLanzamientos", lanzamientos);
    if(lanzamientos==0) {
        mostrarTexto("lblResultado", "GAME OVER");
    }
}

function limpiar(){
    mostrarTexto("lblPuntos",0);
    mostrarTexto("lblLanzamientos",5);
    lanzamientos=5;
    puntos=0;
}

//Funcion mostrar Cara
function mostrarCara(numero){
    if(numero==1)mostrarImagen("imgDados", "dados1.png");
    else if(numero==2)mostrarImagen("imgDados", "dados2.png");
    else if(numero==3)mostrarImagen("imgDados", "dados3.png");
    else if(numero==4)mostrarImagen("imgDados", "dados4.png");
    else if(numero==5)mostrarImagen("imgDados", "dados5.png");
    else if(numero==6)mostrarImagen("imgDados", "dados6.png");
    
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}