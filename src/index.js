/* Acá va tu código */
const btningresar=document.getElementById('btningresar');
btningresar.addEventListener("click",()=>{
pagina1.style.display="none";
pagina2.style.display="block";
})

let textoDescifrado;
let desplazamiento;
let textoCifrado;


document.getElementById('btncifrar').addEventListener("click",()=>{
textoDescifrado=document.getElementById('descifrado').value;
desplazamiento=parseInt(document.getElementById('number').value);
resultadoCifrado=cipher.encode(textoDescifrado,desplazamiento);
document.getElementById('cifrado').value= resultadoCifrado.trim();
})

document.getElementById('btndescifrar').addEventListener("click",()=>{
textoCifrado=document.getElementById('cifrado').value;
desplazamiento=parseInt(document.getElementById('number').value);
resultadoDescifrado=cipher.decode(textoCifrado,desplazamiento);
document.getElementById('descifrado').value=resultadoDescifrado.trim();

})
