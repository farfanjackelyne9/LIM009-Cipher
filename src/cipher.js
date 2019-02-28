window.cipher = {
  encode: (textoDescifrado,desplazamiento) => {
    /* Acá va tu código */
   let asciiDescifrado;
   let nuevoResultadoCifrado;
   let resultadoCifrado="";

    for(let i = 0 ; i < textoDescifrado.length ; i++){
      asciiDescifrado =textoDescifrado[i].charCodeAt();
     if( asciiDescifrado<=65 && asciiDescifrado <= 90 ){
      nuevoResultadoCifrado = String.fromCharCode((asciiDescifrado - 65 + desplazamiento) % 26 + 65);
     resultadoCifrado += nuevoResultadoCifrado;
      }
    }
    return resultadoCifrado;
  },

  decode: (textoCifrado,desplazamiento) => {
    /* Acá va tu código */
    let nuevoNumero;
    let nuevoResultadoDescifrado;
    let nuevoNumeroCifrado;
    let asciiCifrado;
    let resultadoDescifrado="";

   for(let i = 0 ; i < textoCifrado.length ; i++){
     asciiCifrado=textoCifrado[i].charCodeAt();
       if( asciiCifrado<=65 && asciiCifrado<=90){
         nuevoNumero=(asciiCifrado-65-desplazamiento);
        }  while (nuevoNumero < 0){
          nuevoNumero=nuevoNumero + 26;
          }
          nuevoNumeroCifrado = nuevoNumero % 26 + 65;
          nuevoResultadoDescifrado=String.fromCharCode(nuevoNumeroCifrado);
          resultadoDescifrado += nuevoResultadoDescifrado;
     }
    return resultadoDescifrado;
  }
}
