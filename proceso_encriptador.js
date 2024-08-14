// Función para encriptar
function encriptar(texto) {
    let encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
    return encriptado;
}

// Función para desencriptar
function desencriptar(texto) {
    let desencriptado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    return desencriptado;
}

// Función para el boton de copiar
function copiarTexto() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
}

// Función para validar el texto ingresado sea solo letras minúsculas y espacios
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función para verificar el estado de los botones de encriptar y desencriptar
function verificarBotones() {
    let inputText = document.getElementById("input-text").value;
    let btnEncriptar = document.getElementById("btn-encriptar");
    let btnDesencriptar = document.getElementById("btn-desencriptar");

    if (validarTexto(inputText) && inputText.trim() !== "") {
        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = false;
    } else {
        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = true;
    }
}

// Función para manejar el evento de entrada de texto sea la correcta
document.getElementById("input-text").addEventListener("input", function() {
    let inputText = document.getElementById("input-text").value;
    let advertencia = document.getElementById("advertencia");

    if (validarTexto(inputText)) {
        advertencia.style.color = "black";
    } else {
        advertencia.style.color = "red";
    }
    
    verificarBotones(); 
});

// Llamar a verificarBotones al cargar la página para asegurar el estado inicial de los botones
document.addEventListener("DOMContentLoaded", function() {
    verificarBotones();
});

// Función para manejar la visibilidad del resultado
function mostrarResultado() {
    let inputText = document.getElementById("input-text").value;
    let mensajeInicial = document.getElementById("mensaje-inicial");
    let resultado = document.getElementById("resultado");

    if (inputText !== "") {
        mensajeInicial.style.display = "none";
        resultado.style.display = "block";
    } else {
        mensajeInicial.style.display = "block";
        resultado.style.display = "none";
    }
}

// Función para el botón de copiar
function verificarTextoCopiar() {
    let outputText = document.getElementById("output-text").value;
    let btnCopiar = document.getElementById("btn-copiar");

    btnCopiar.disabled = outputText === "";
}

// Agregar eventos a los botones de encriptar, desencriptar y copiar texto 
document.getElementById("btn-encriptar").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let resultadoTexto = encriptar(inputText);
    document.getElementById("output-text").value = resultadoTexto;
    mostrarResultado();
    verificarTextoCopiar();
});

document.getElementById("btn-desencriptar").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let resultadoTexto = desencriptar(inputText);
    document.getElementById("output-text").value = resultadoTexto;
    mostrarResultado();
    verificarTextoCopiar();
});

document.getElementById("btn-copiar").addEventListener("click", copiarTexto);
