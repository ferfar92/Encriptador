// Inicializamos variables
let resultado;
let botonEncriptar;
let mensaje;
let mensajeM;
//Obtener os objetos de la acción del botón
botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click", encriptarM);

botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click",desencriptar);

//Función de encriptar
function encriptarM(mensaje){
    mensaje = document.getElementById("mensaje");
    resultado = document.getElementById("resultado");

    let mensaje1 = mensaje.value;
    let mensajeM = minusculas(mensaje1);

    //Compraración y remplazo con .replace
    mensajeM = mensajeM.replace(/e/g,'enter');
    mensajeM = mensajeM.replace(/i/g,'imes');
    mensajeM = mensajeM.replace(/a/g,'ai');
    mensajeM = mensajeM.replace(/o/g,'ober');
    mensajeM = mensajeM.replace(/u/g,'ufat');

    //Insercción del nuevo mensaje en HTML
    mensaje.value = "";
    resultado.innerHTML= `
    <h2 class= "txtEncabezado"><strong>Texto Encriptado: </strong></h2>
    <div class="txtEncriptado">${mensajeM}</div>
    <input type="submit" value="Copiar" class="copiar" id="copiar"> `;

    //Función copiar texto en el portapapeles
    if(mensajeM != ""){
        let copiar = document.getElementById("copiar");
        copiar.addEventListener("click", function(e){
            navigator.clipboard.writeText(mensajeM);
            alert("Se copió el texto: " + mensajeM);
        });
    }

}

//Función de desencriptar
function desencriptar(mensaje){
    mensaje = document.getElementById("mensaje");
    resultado = document.getElementById("resultado");

    let mensaje1 = mensaje.value;
    let mensajeM = minusculas(mensaje1);

    //Compraración y remplazo con .replace
    mensajeM = mensajeM.replace(/enter/g,'e');
    mensajeM = mensajeM.replace(/imes/g,'i');
    mensajeM = mensajeM.replace(/ai/g,'a');
    mensajeM = mensajeM.replace(/ober/g,'o');
    mensajeM = mensajeM.replace(/ufat/g,'u');

    //Insercción del nuevo mensaje en HTML
    mensaje.value = "";
    resultado.innerHTML= `
    <h2 class= "txtEncabezado"><strong>Texto Desencriptato: </strong></h2>
    <div class="txtEncriptado" id="mensajeD">${mensajeM}</div>
    <input type="submit" value="Copiar" class="copiar" id="copiar">`;

    //Función copiar texto en el portapapeles
    if(mensajeM != ""){
        let copiar = document.getElementById("copiar");
        copiar.addEventListener("click", function(e){
            navigator.clipboard.writeText(mensajeM);
            alert("Se copió el texto: " + mensajeM);
        });
    }
}

//Función para convertir en minúsculas el texto
function minusculas(mensaje1){
    return mensaje1.toLowerCase();
}

