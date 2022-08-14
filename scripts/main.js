//elementos

var resultado = document.getElementById("resultado");
var input = document.getElementById("usertext");
var encriptarBtn = document.getElementById('encriptar');
var desencriptarBtn = document.getElementById('desencriptar');
var copiarBtn = document.getElementById('copiar');
var muneco = document.querySelector('.muneco');

copiarBtn.style.display = "none";
//funciones

function encriptar() {
    var userMsj = input.value;    
    var encryptedMsj = userMsj
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/ober/g, "o")
    .replace(/u/g, "u");
    resultado.value = encryptedMsj;
    muneco.style.display = "none";
    copiarBtn.style.display = "inline";
}

function desencriptar() {
    var userMsj = input.value;    
    var desencryptedMsj = userMsj
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    resultado.value = desencryptedMsj;
}

function borrarMuneco(){
    muneco.isConnected;
    muneco.remove;
    muneco.isConnected;
}

function copiar() {
    navigator.clipboard.writeText(resultado.value);
    alert("Texto copiado");
}

//botones

encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
copiarBtn.onclick = copiar;
