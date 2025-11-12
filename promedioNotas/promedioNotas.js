function calcularPromedioNotas(){
    const nota1=recuperarFloat("txtNota1");
    const nota2=recuperarFloat("txtNota2");
    const nota3=recuperarFloat("txtNota3");

    const promedio=calcularPromedio(nota1, nota2, nota3);

    mostrarTexto("lblNota", promedio.toFixed(2));

    if(promedio>7) mostrarImagen("imgAprobado", "a.gif");
    else mostrarImagen("imgAprobado", "b.gif");
}