const cipher = {
  encode: function (offset, string) {
    let palavraDividida = string.split("")
    let palavraCifrada = ""
    for (let i = 0; i < palavraDividida.length; i++) {
      let valDeslC = offset % 26
      let numDeslocadoC = (letras.indexOf(palavraDividida[i]) + valDeslC) % 26
      let numEmLetraC = letras.charAt(numDeslocadoC)
      palavraCifrada = palavraCifrada + numEmLetraC
    }
    return palavraCifrada
  },
  decode: function (offset, string) {
    let palavraDividida = string.split("")
    let palavraDecifrada = ""
    for (let i = 0; i < palavraDividida.length; i++) {
      let numDeslocadoD = (letras.indexOf(palavraDividida[i]) - offset)
      if (numDeslocadoD < 0)
        numDeslocadoD = 26 - (numDeslocadoD * -1) % 26
      numDeslocadoD = numDeslocadoD % 26
      let numEmLetraD = letras.charAt(numDeslocadoD)
      palavraDecifrada = palavraDecifrada + numEmLetraD

    }
    return palavraDecifrada
  }
};
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
export default cipher;