function mostrarNumeros(){
    console.log("antes del for");

    for(let i =0;i<4;i++){
        console.log(i);
    }

    console.log("despues del for");
}

function mostrarNumero2(){
    console.log("antes del for");

    for(let i =0;i<=5;i++){
        console.log(i);
    }

    console.log("despues del for");
}

function mostrarPares(){
    console.log("antes del for");

    for(let i =0;i<=10;i+=2){
        console.log(i);
    }

    console.log("despues del for");
}

function mostrarInversa(){
    console.log("antes del for");

    for(let i =10;i>=0;i--){
        console.log(i);
    }

    console.log("despues del for");
}

function hackeaNasaPelis(){
    for(let i=0; i<=100;i+=10){
        console.log(`Nasa hakedad ${i}%`);
    }
    console.log("La nasa ha sido hackeada :D");
}

function mostrarImpares(){
    console.log("antes del for");

    for(let i=1;i<=21;i+=2){
        console.log(i);
    }

    console.log("despues del for");
}