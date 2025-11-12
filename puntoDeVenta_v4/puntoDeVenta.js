calcularValorTotal = function () {
    
    let nombreProducto;
    let precioProducto; 
    let cantidad; 
    let porcentajeDescuento;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    
    nombreProducto=recuperarTexto("txtProducto");
    
    precioProducto=recuperarFloat("txtPrecio");
    
    cantidad=recuperarInt("txtCantidad");
    
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    valorSubtotal=calcularSubTotal(precioProducto, cantidad);
    
    mostrarTexto("lblSubtotal", valorSubtotal);
    
    valorDescuento=calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
    
    valorIVA=calcularIVA(valorSubtotal-valorDescuento);
    
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
    
    valorTotal=calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    
    mostrarTexto("lblTotal", valorTotal.toFixed(2));

    const res = cantidad==1?`Valor a pagar por 1 ${nombreProducto} con ${porcentajeDescuento}% de descuento: USD ${valorTotal}`
    :`Valor a pagar por ${cantidad} ${nombreProducto}s con ${porcentajeDescuento}% de descuento: USD ${valorTotal}`;
    mostrarTexto("lblResumen", res);
}
limpiar = function () {
    mostrarTexto("lblResumen", "");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblDescuento", "0%");
    mostrarTexto("lblSubtotal", "0.0");

    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTextoEnCaja("txtPorcentajeDescuento", "");
}