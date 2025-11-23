cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    mostrarCuentas();
}

mostrarCuentas=function(){
    
    let cmpTabla=document.getElementById("lblTabla");
    let tabla=`<table><tr>
    <th>Numero Cuenta</th>
    <th>Nombre</th>
    <th>Saldo</th></tr>`;

    for(let i=0;i<cuentas.length;i++){
        tabla+=`<tr>
        <td>${cuentas[i].numeroCuenta}</td>
        <td>${cuentas[i].nombre} ${cuentas[i].apellido}</td>
        <td>${cuentas[i].saldo}</td></tr>`;
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}

buscarCuenta=function(numeroCuenta){
    for(let i=0;i<cuentas.length;i++){
        if(cuentas[i].numeroCuenta==numeroCuenta) return cuentas[i];
    }
    return null;
}

agregarCuenta=function(cuenta){

    if(buscarCuenta(cuenta.numeroCuenta)!=null){
        alert("La cuenta ya existe");
        return;
    }
    
    cuentas.push(cuenta);
    alert("La cuenta se agrego exitosamente");

}

agregar=function(){
    
    let cuenta={};
    const cedula=recuperarTexto("txtCedula");
    const nombre=recuperarTexto("txtNombre");
    const apellido=recuperarTexto("txtApellido");
    const numeroCuentauenta=recuperarTexto("txtCuenta");
    cuenta.numeroCuenta=numeroCuentauenta;
    cuenta.cedula=cedula;
    cuenta.nombre=nombre;
    cuenta.apellido=apellido;
    cuenta.saldo=0.0;

    agregarCuenta(cuenta);
    mostrarCuentas();

}
