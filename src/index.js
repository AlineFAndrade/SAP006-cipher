import cipher from "./cipher.js"

document.getElementById("cifrar").onclick = cifrarTexto
document.getElementById("decifrar").onclick = decifrarTexto

function cifrarTexto() {
  let offset = parseInt(document.getElementById("quantasPosicoesC").value)
  let textoCifrar = document.getElementById("textoCifrar").value
  document.getElementById("espacoC").innerHTML = cipher.encode(offset, textoCifrar)
}

function decifrarTexto() {
  let offset = parseInt(document.getElementById("quantasPosicoesD").value)
  let textoDecifrar = document.getElementById("textoDecifrar").value
  document.getElementById("espacoD").innerHTML = cipher.decode(offset, textoDecifrar)
}
