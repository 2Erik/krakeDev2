function saludar(){
    const nombre=recuperarTexto("txtNombre");
    const apellido=recuperarTexto("txtApellido");

    const saludo=generarSaludo(nombre,apellido);
    mostrarTexto("lblResultado",saludo);
    console.log(saludo);
}