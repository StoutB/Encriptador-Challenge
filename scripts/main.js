//elementos

const resultado = document.getElementById("resultado");
const input = document.getElementById("usertext");
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const copiarBtn = document.getElementById('copiar');
const muneco = document.querySelector('.muneco');
const letras = /^[a-z0-9 ]*$/;

copiarBtn.style.display = "none";
//funciones

function encriptar() {
    if (!letras.test(input.value) || input.value.length === 0)
    {
        alert('Solo se permite el uso de minusculas');
    }
    else{
        let userMsj = input.value;    
        let encryptedMsj = userMsj
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/ober/g, "o")
        .replace(/u/g, "u");
        resultado.value = encryptedMsj;
        muneco.style.display = "none";
        copiarBtn.style.display = "inline";
    }
}

function desencriptar() {
    let userMsj = input.value;    
    let desencryptedMsj = userMsj
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    resultado.value = desencryptedMsj;
}


function copiar() {
    navigator.clipboard.writeText(resultado.value);
    alert("Texto copiado");
}

function validar() {
    let frase = input.value; 
    for(var i = 0; i < frase.length; i++)
{
    var letraActual = miPalabra.charAt(index);
    if(esMayuscula(letraActual))
    {
        alert("La letra " + letraActual + " es mayúscula");
    }

    if(esMinuscula(letraActual))
    {
        alert("La letra " + letraActual + " es minúscula");
    }       
}
}

//botones

encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
copiarBtn.onclick = copiar;
