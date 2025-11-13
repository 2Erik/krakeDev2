function calcularTasaInteres(ingresoAnual){
    if(ingresoAnual<300000) return 0.16;
    else if(ingresoAnual>=300000&&ingresoAnual<500000) return 0.15;
    else if(ingresoAnual>=500000&&ingresoAnual<1000000) return 0.14;
    else if(ingresoAnual>=1000000&&ingresoAnual<2000000) return 0.13;
    else if(ingresoAnual>=2000000) return 0.12;
    
}

function calcularCapacidadPago(edad, ingresos, egresos){
    const capacidadPago = ingresos-egresos;
    if(edad>50) return capacidadPago * 0.3;
    else return capacidadPago * 0.4;
}

function calcularDescuento(precio, cantidad){
    if(cantidad<3)return precio;
    else if(cantidad>=3&&cantidad<=5)return precio*0.02;
    else if(cantidad>=6&&cantidad<=11)return precio*0.03;
    else if(cantidad>=12)return precio*0.04;
}

function determinaColesterolILDL(nivelColesterol){
    if (nivelColesterol<100)return "Optimo";
    else if(nivelColesterol>=100 && nivelColesterol<=129)return "Casi Optimo";
    else if(nivelColesterol>=130 && nivelColesterol<=159)return "Limite Alto";
    else if(nivelColesterol>=160 && nivelColesterol<=189)return "Alto";
    else if(nivelColesterol>=190)return "Muy Alto";
}

function validarClave(calve){
    if(calve.length>=8 && calve.length<=16)return true;
    else return false;
}

function esMayuscula(caracter){
    if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90)return true;
    else return false;
}

function esMinuscula(caracter){
    if(caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122)return true;
    else return false;
}

function esDigito(caracter){
    if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57)return true;
    else return false;
}

function darPermiso(notaMatematica,notaFisica,notaGemetria){
    if(notaMatematica>90 || notaFisica>90 || notaGemetria>90)return true;
    else return false;
}

function otorgarPermiso(notaMatematica,notaFisica,notaGemetria){
    if(notaMatematica>90 || notaFisica>90 && notaGemetria>80)return true;
    else return false;
}

function dejarSalir(notaMatematica,notaFisica,notaGemetria){
    if(notaMatematica>90 && notaFisica>90 || notaGemetria>90){
        if(notaFisica>notaMatematica) return true;
    }else return false;
}