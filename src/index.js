const letras ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function cifrarTexto (){
  let textoImputC = textoCifrar.value

  let palavraDividida = textoImputC.split("")
  let palavraCifrada = ""
  for (i=0; i < palavraDividida.length; i++){
    let valDeslC = quantasPosicoesC.value % 26
    let  numDeslocadoC =  (letras.indexOf(palavraDividida[i]) + valDeslC) % 26
    let  numEmLetraC = letras.charAt(numDeslocadoC)
    palavraCifrada = palavraCifrada + numEmLetraC
   
  }
  document.getElementById ("espacoC").innerHTML=palavraCifrada
}

function decifrarTexto (){
    let textoImputD = textoDecifrar.value
    let palavraDividida = textoImputD.split("")
    let palavraDecifrada = ""
    for (i=0; i < palavraDividida.length; i++){
     let valDeslD = quantasPosicoesD.value
     let  numDeslocadoD =  (letras.indexOf(palavraDividida[i]) - valDeslD) 
    if (numDeslocadoD < 0)
        numDeslocadoD = numDeslocadoD * -1
        numDeslocadoD = numDeslocadoD % 26     
    let  numEmLetraD = letras.charAt(numDeslocadoD) 
    palavraDecifrada = palavraDecifrada + numEmLetraD
   
    }
    
    document.getElementById ("espacoD").innerHTML=palavraDecifrada
  }
  










//const letras = "ABCDEFGHIJKLMNO
//defined                        

//import cipher from './cipher.js';//

//console.log(cipher);//