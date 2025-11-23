let personas=[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5}
];

function encontrarMenor(){
    let personMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        if(personMenor.edad>elementoPersona.edad){
            personMenor=elementoPersona;
        }
    }
    return personMenor;
}

function determinarMenor(){
    const menor=encontrarMenor();
    mostrarTexto("lblMenor", `${menor.nombre}: ${menor.edad}`);
}

function encontrarMayor(){
    let personMayor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i];
        if(personMayor.edad<elementoPersona.edad){
            personMayor=elementoPersona;
        }
    }
    return personMayor;
}

function determinarMayor(){
    const mayor=encontrarMayor();
    mostrarTexto("lblMayor", `${mayor.nombre}: ${mayor.edad}`);
}

function agregarPersona(){
    const nombre=recuperarTexto("txtNombre");
    const edad=recuperarInt("txtEdad");
    let error=false;
    

    if(nombre.length<3){
        mostrarTexto("lblErrorNombre", "El nombre debe tener almenos 3 letras");
        error=true;
    }

    if(edad<0 || edad>100){
        mostrarTexto("lblErrorEdad", "La edad debe estar en el rango de 0-100");
        error=true;
    }

    let nuevaPersona={};
    if(!error){
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        alert("Persona agregada correctamente");
        console.log(personas);
        mostrarTabla();
    }
}

function mostrarTabla(){
    let cmpTabla=document.getElementById("tablaPersonas");
    let tabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th></tr>";

    for(let i=0;i<personas.length;i++){
        tabla+=`<tr>
        <td>${personas[i].edad}</td>
        <td>${personas[i].nombre}</td></tr>`;
    }
    tabla+="</table>";
    cmpTabla.innerHTML=tabla;
}