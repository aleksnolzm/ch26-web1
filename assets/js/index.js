

function getNameOfClient(){
    const clientName = prompt("Ingresa tu nombre: ");
    return clientName;
}

function getReferenceOfIdGreetings(){
    return document.getElementById("texto-saludo");
}

function getReferenceOfButton(){
    return document.getElementById("evento");
}

function changeGreetings(){
    //Obteniendo etiqueta H1
    const textoSaludo = getReferenceOfIdGreetings();

    //Obteniendo etiqueta de Boton
    const boton = getReferenceOfButton();

    boton.addEventListener("click", ()=>{
        let nuevoNombre =  getNameOfClient();
        textoSaludo.innerText = `Hola ${nuevoNombre}`;
    });
}

changeGreetings();