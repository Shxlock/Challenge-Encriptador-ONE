function encriptar() {
  let textoIngresado = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoEncriptado = textoIngresado
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (textoIngresado.length !== 0) {
    parrafo.textContent = textoEncriptado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    document.getElementById("texto").value = "";
    
    muñeco.src = "./assets/candado-cerrado.png";

    let mensajeEncriptadoDiv = document.querySelector('.mensaje-encriptado');
    
    let botonCopiar = document.createElement('button');
    botonCopiar.classList.add('btn-copiar');
    botonCopiar.textContent = 'Copiar Texto';
    botonCopiar.onclick = copiarTexto;
    mensajeEncriptadoDiv.appendChild(botonCopiar);
  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
  


}

function desencriptar() {
  let textoIngresado = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  
  let textoDesencriptado = textoIngresado
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (textoIngresado.length !== 0) {
    parrafo.textContent = textoDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    document.getElementById("texto").value = "";
    muñeco.src = "/assets/candado-abierto.png"

    let botonCopiar = document.querySelector('.btn-copiar');
    if (botonCopiar) {
      botonCopiar.parentNode.removeChild(botonCopiar);
    }

  } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
  

}

function copiarTexto() {
  let texto = document.getElementById("parrafo").textContent;
  if (texto !== "") {
    navigator.clipboard.writeText(texto)
    swal("¡Texto Copiado!", "El texto ha sido copiado al portapapeles.", "success"); 
  }
}

