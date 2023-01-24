
let resultado;
let botonEncriptar;
let mensaje;
let mensajeM;
botonEncriptar = document.getElementById("encriptar");
botonEncriptar.addEventListener("click", encriptarM);

botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.addEventListener("click",desencriptar);



function encriptarM(mensaje){
    mensaje = document.getElementById("mensaje");
    resultado = document.getElementById("resultado");

    let mensaje1 = mensaje.value;
    let mensajeM = minusculas(mensaje1);

    mensajeM = mensajeM.replace(/e/g,'enter');
    mensajeM = mensajeM.replace(/i/g,'imes');
    mensajeM = mensajeM.replace(/a/g,'ai');
    mensajeM = mensajeM.replace(/o/g,'ober');
    mensajeM = mensajeM.replace(/u/g,'ufat');

    mensaje.value = "";
    resultado.innerHTML= `
    <h2 class= "txtEncabezado"><strong>Texto Encriptado: </strong></h2>
    <div class="txtEncriptado">${mensajeM}</div>
    <input type="submit" value="Copiar" class="copiar" id="copiar"> `;

}

function desencriptar(mensaje){
    mensaje = document.getElementById("mensaje");
    resultado = document.getElementById("resultado");

    let mensaje1 = mensaje.value;
    let mensajeM = minusculas(mensaje1);

    mensajeM = mensajeM.replace(/enter/g,'e');
    mensajeM = mensajeM.replace(/imes/g,'i');
    mensajeM = mensajeM.replace(/ai/g,'a');
    mensajeM = mensajeM.replace(/ober/g,'o');
    mensajeM = mensajeM.replace(/ufat/g,'u');

    mensaje.value = "";
    resultado.innerHTML= `
    <h2 class= "txtEncabezado"><strong>Texto Desencriptato: </strong></h2>
    <div class="txtEncriptado" id="mensajeD">${mensajeM}</div>
    <input type="submit" value="Copiar" class="copiar" id="copiar">`;

    if(mensajeM != null){
        let copiar = document.getElementById("copiar");
        copiar.addEventListener("click", function(e){
            let copytext = document.getElementById("mensajeD");
            copytext.focus();
            copytext.setSelectionRange(0, 999999); // For mobile devices
          
             // Copy the text inside the text field
            navigator.clipboard.writeText(copytext.value);
          
            // Alert the copied text
            alert("Copied the text: " + copytext.value);
        });
    }
}

function minusculas(mensaje1){
    return mensaje1.toLowerCase();
}

