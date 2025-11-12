function calcularValorDescuento(monto, porcentajeDescuento){ return monto*(porcentajeDescuento/100)}

function calcularIVA(monto){return monto * 0.12}

function calcularSubTotal(precio, cantidad){return precio*cantidad}

function calcularTotal(subTotal,descuento,iva){return subTotal-descuento+iva}