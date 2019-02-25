/* Acá va tu código */
const btningresar=document.getElementById('btningresar');
btningresar.addEventListener("click",()=>{
pagina1.style.display="none";
pagina2.style.display="block";
})
let textoDescifrado;
let desplazamiento;
let nuevoResultado;

document.getElementById('btncifrar').addEventListener("click",()=>{
textoDescifrado=document.getElementById('descifrado').value;
desplazamiento=parseInt(document.getElementById('number').value);
resultado=cipher.encode(textoDescifrado,desplazamiento);
document.getElementById('cifrado').value= resultado;
})
