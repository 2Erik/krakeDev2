let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0884632123",nombre:"Manuel",apellido:"Paredes",sueldo:800.0}
]

function mostrarOpcionEmpleado(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

function mostrarOpcionRol(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

function mostrarOpcionResumen(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

function mostrarEmpleados(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let tabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th></tr>";

    for(let i=0;i<empleados.length;i++){
        tabla+="<tr>"+
        "<td>"+empleados[i].cedula+"</td>"+
        "<td>"+empleados[i].nombre+"</td>"+
        "<td>"+empleados[i].apellido+"</td>"+
        "<td>"+empleados[i].sueldo+"</td></tr>";
    }

    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}

