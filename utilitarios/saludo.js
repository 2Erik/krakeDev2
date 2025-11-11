function saludar(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");

    let mensaje=`Bienvenido ${nombre} ${apellido}`;

    mostrarTexto("lblResultado", mensaje);

    mostrarImagen("imgSaludo", "./img/a.gif");

    mostrarTextoCaja("txtNombre", "");
}