function encriptar(){
    const textoUsuario = document.getElementById("text").value;
    
    if(!verificarMinusculas(textoUsuario)){
        alert("Inserta solo minúsculas.");
    }else{
        var textEnc = textoUsuario
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    
        mostrarTexto(textEnc);
    }
}

function desencriptar(){
    const textoUsuario = document.getElementById("text").value;

    if(!verificarMinusculas(textoUsuario)){
        alert("Inserta solo minúsculas.");
    }else{
        
        var textEnc = textoUsuario
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        mostrarTexto(textEnc);
    }
}

function verificarMinusculas(texto) {
    return /^[a-z\s\n]*$/.test(texto);
  }

function limpiar(){
    const resultado = document.getElementById("enc");
    const imagen = document.querySelector("#elementos");
    const copia = document.getElementById("copia");
    const limpia = document.getElementById("limpia");
    document.getElementById("text").value = "Inserta el texto aquí";
    resultado.value = "";
    imagen.style.display = "";
    resultado.hidden = true;
    copia.hidden = true;
    limpia.hidden = true;
}

function mostrarTexto(textEnc){
    const resultado = document.getElementById("enc");
    const imagen = document.getElementById("elementos");
    const copia = document.getElementById("copia");
    const limpia = document.getElementById("limpia");
    imagen.style.display = "none";
    resultado.hidden = false;
    copia.hidden = false;
    limpia.hidden = false;
    resultado.value = textEnc;
}

function copiar(){
    const textoRespuesta = document.getElementById("enc").value;
    navigator.clipboard.writeText(textoRespuesta);
}

let textoUser = document.getElementById("text");
textoUser.addEventListener('click', (event) => {
    if (textoUser.value == "Inserta el texto aquí") {
        document.getElementById("text").value = "";
    }    
});

textoUser.addEventListener('blur',(event)=> {
    if (textoUser.value == "") {
        textoUser.value="Inserta el texto aquí";
    }
}); 
