window.cipher = {                                   // exportar del elemento window
  encode: (textoDescifrado,desplazamiento) => {
   /* Acá va tu código */
  let ascii;
  let resultado=" ";

   for(let i = 0 ; i < textoDescifrado.length ; i++){
     console.log(ascii =textoDescifrado[i].charCodeAt());
    if( 65 <= ascii <= 90 ){
     nuevoResultado = String.fromCharCode((ascii - 65 + desplazamiento) % 26 + 65);
    console.log(resultado += nuevoResultado);
  }
  }
   return resultado;
  },
  decode: () => {
    /* Acá va tu código */
  }
};
