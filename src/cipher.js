window.cipher = {
  encode: (textoDescifrado,desplazamiento) => {
   
   let asciiDescifrado;
   let resultadoCifrado="";

    for(let i = 0 ; i < textoDescifrado.length ; i++){
      asciiDescifrado =textoDescifrado[i].charCodeAt();
      if(asciiDescifrado>=65 && asciiDescifrado<=90){
      resultadoCifrado += String.fromCharCode((asciiDescifrado - 65 + desplazamiento) % 26 + 65);
       }else {
        resultadoCifrado += String.fromCharCode(asciiDescifrado);
      }  
    }
    return resultadoCifrado;
  },

  decode: (textoCifrado,desplazamiento) => {
    
    let asciiCifrado;
    let resultadoDescifrado="";

   for(let m = 0 ; m < textoCifrado.length ; m++){
     asciiCifrado=textoCifrado[m].charCodeAt();
      if(asciiCifrado>=65 && asciiCifrado<=90){
     resultadoDescifrado += String.fromCharCode((asciiCifrado-desplazamiento+65)%26+65);
     }else{
      resultadoDescifrado += String.fromCharCode(asciiCifrado);
    } 
    }
    return resultadoDescifrado;
  }
}