const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(steringEncriptado){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.bacgroundImage = "none"

}

function encriptar(steringEncriptado){
    let matrizCodigo = [["e","enter"],["i","inmes"],["a","ai"],["o","ober"],["u","ufat"]];
    steringEncriptado = steringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(steringEncriptado.includes(matrizCodigo[i][0])){
            steringEncriptado = steringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return steringEncriptado
}

function btnDesencriptar(steringDesencriptado){
    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
  
}

function desencriptar(steringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","inmes"],["a","ai"],["o","ober"],["u","ufat"]];
    steringDesencriptado = steringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(steringDesencriptado.includes(matrizCodigo[i][1])){
            steringDesencriptado = steringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return steringDesencriptado

}

function btncopiar(){
    mensaje.select();
    document.execCommand('copy');
    alert("copiado el texto")
   }


