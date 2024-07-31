function encriptar(){
    const textoUsuario = document.getElementById("text").value;
    const resultado = document.getElementById("enc");
    
    if(!verificarMinusculas(textoUsuario)){
        alert("Inserta solo minúsculas.");
    }else{
        var textEnc = textoUsuario
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    
        resultado.value = textEnc;
        mostrarTexto();
    }
}

function desencriptar(){
    const textoUsuario = document.getElementById("text").value;
    const resultado = document.getElementById("enc");

    if(!verificarMinusculas(textoUsuario)){
        alert("Inserta solo minúsculas.");
    }else{
        var textEnc = textoUsuario
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        resultado.value = textEnc;
        mostrarTexto();
    }
}

function verificarMinusculas(texto) {
    return /^[a-z\s\n]*$/.test(texto);
  }

function limpiar(){
    const resultado = document.getElementById("enc");
    const imagen = document.getElementById("imagen");
    document.getElementById("text").value = "";
    resultado.value = "";
    imagen.hidden = false;
    resultado.hidden = true;
}

function mostrarTexto(){
    const resultado = document.getElementById("enc");
    const imagen = document.getElementById("imagen");
    imagen.hidden = true;
    resultado.hidden = false;
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
