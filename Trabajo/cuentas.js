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

//TRANSACCION
function transaccion(){
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    mostrarComponente("divTransacciones");
}

ejecutarBusqueda=function(){
    const cuenta=recuperarTexto("txtTCuenta");
    const existe=buscarCuenta(cuenta);
    if(existe!=null){
        mostrarTexto("lblResultado",`Nombre: ${existe.nombre} ${existe.apellido}\nSaldo: ${existe.saldo}`);
        return;
    }

    alert(`La cuenta ${cuenta} no existe`);
}

depositar=function(numeroCuenta,monto){
    let cuentaAfectada=buscarCuenta(numeroCuenta);
    cuentaAfectada.saldo+=monto;
    mostrarTexto("lblSaldo",`Saldo actual: ${cuentaAfectada.saldo}`);
}

ejecutarDeposito=function(){
    const numeroCuenta=recuperarTexto("txtTCuenta");
    const monto=recuperarFloat("txtCantidad");
    depositar(numeroCuenta, monto);
    alert("Transaccion exitosa");
}

retirar=function(numeroCuenta,monto){
    let cuentaAfectada=buscarCuenta(numeroCuenta);
    if(cuentaAfectada.saldo>=monto){
        cuentaAfectada.saldo-=monto;
        mostrarTexto("lblSaldo",`Saldo actual: ${cuentaAfectada.saldo}`);
        alert("Transaccion exitosa");
        return;
    }
    alert("Saldo insuficiente");
}

ejecutarRetiro=function(){
    const numeroCuenta=recuperarTexto("txtTCuenta");
    const monto=recuperarFloat("txtCantidad");
    retirar(numeroCuenta, monto);
}

//MOVIMIENTOS

function movimientoss(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
}

movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]

function ejecutarMovimientos(){
    const cuenta=recuperarTexto("txtMCuenta");
    filtrarMovimientos(cuenta);
}

filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta=[];
    for(let i=0;i<movimientos.length;i++){
        if(numeroCuenta==movimientos[i].numeroCuenta){
            movimientosCuenta.push(movimientos[i]);
        }
    }
    mostrarMovimientos(movimientosCuenta);
}


mostrarMovimientos=function(misMovimientos){
    let cmpTabla=document.getElementById("tablaMovimientos");
    let tabla=`<table><tr>
    <th># Cuenta</th>
    <th>Monto</th>
    <th>Tipo</th></tr>`;

    for(let i=0;i<misMovimientos.length;i++){
        let mov = misMovimientos[i];
        let monto = mov.tipo === "D" ? -mov.monto : mov.monto;

        tabla+=`
        <tr>
            <td>${mov.numeroCuenta}</td>
            <td>${monto}</td>
            <td>${mov.tipo}</td>
        </tr>`;
    }

    tabla+="</table>";
    cmpTabla.innerHTML = tabla;
}
