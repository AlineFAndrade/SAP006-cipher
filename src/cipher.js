const cipher = {
  encode: function (offset, string) {
    let palavraDividida = string.split("")
    let palavraCifrada = ""
    for (let i = 0; i < palavraDividida.length; i++) {
      let valDeslC = offset % 26
      let numEmLetraC;
      if (palavraDividida[i].charCodeAt(0) >= 65 && palavraDividida[i].charCodeAt(0) <= 91) {
        let numDeslocadoC = (letras.indexOf(palavraDividida[i]) + valDeslC) % 26
        numEmLetraC = letras.charAt(numDeslocadoC)
      }
      else if (palavraDividida[i].charCodeAt(0) >= 97 && palavraDividida[i].charCodeAt(0) <= 123) {
        let numDeslocadoC = (letrasm.indexOf(palavraDividida[i]) + valDeslC) % 26
        numEmLetraC = letrasm.charAt(numDeslocadoC)
      }
      else if (!isNaN(parseInt(palavraDividida[i]))) { //ele é um número, só que não? ou ele é um o contrário de um não número?//
        alert("Digite apenas letras e símbolos, não números")
      }
      else (
        numEmLetraC = palavraDividida[i]
      )
      palavraCifrada = palavraCifrada + numEmLetraC
    }
    return palavraCifrada
  },
  decode: function (offset, string) {
    let palavraDividida = string.split("")
    let palavraDecifrada = ""
    for (let i = 0; i < palavraDividida.length; i++) {
      let numEmLetraD
      if (palavraDividida[i].charCodeAt(0) >= 65 && palavraDividida[i].charCodeAt(0) <= 91) {
        let numDeslocadoD = (letras.indexOf(palavraDividida[i]) - offset)
        if (numDeslocadoD < 0)
          numDeslocadoD = 26 - (numDeslocadoD * -1) % 26
        numDeslocadoD = numDeslocadoD % 26
        numEmLetraD = letras.charAt(numDeslocadoD)
      }
      else if (palavraDividida[i].charCodeAt(0) >= 97 && palavraDividida[i].charCodeAt(0) <= 123) {
        let numDeslocadoD = (letrasm.indexOf(palavraDividida[i]) - offset)
        if (numDeslocadoD < 0)
          numDeslocadoD = 26 - (numDeslocadoD * -1) % 26
        numDeslocadoD = numDeslocadoD % 26
        numEmLetraD = letrasm.charAt(numDeslocadoD)
      }
      else if (!isNaN(parseInt(palavraDividida[i]))) { //ele é um número, só que não? ou ele é um o contrário de um não número?//
        alert("Digite apenas letras e símbolos, não números")
      }
      else {
        numEmLetraD = palavraDividida[i]
      }
      palavraDecifrada = palavraDecifrada + numEmLetraD
    }
    return palavraDecifrada
  }
};
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const letrasm = "abcdefghijklmnopqrstuvwxyz"
export default cipher;



