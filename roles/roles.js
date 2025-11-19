let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"0884632123",nombre:"Manuel",apellido:"Paredes",sueldo:800.0}
]

let esNuevo=false;

function mostrarOpcionEmpleado(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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

function ejecutarNuevo(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true;
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

