const pagina1=document.getElementById("pagina1");
const pagina2=document.getElementById("pagina2");
const btningresar=document.getElementById('btningresar');
btningresar.addEventListener("click",()=>{
pagina1.style.display="none";
pagina2.style.display="block";
})

let textoDescifrado;
let desplazamiento;
let textoCifrado;
let resultadoCifrado;
let resultadoDescifrado;


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
document.getElementById("copy1").addEventListener("click",() => {
    let copiado1 = document.getElementById("descifrado");
    copiado1.select();
    document.execCommand('copy');
});
document.getElementById("copy2").addEventListener("click",() => {
    let copiado2 = document.getElementById("cifrado");
    copiado2.select();
    document.execCommand('copy');
});
document.getElementById("btnlimpiar1").addEventListener("click",() => {
    document.getElementById("descifrado").value = "";
});

document.getElementById("btnlimpiar2").addEventListener("click",() => {
    document.getElementById("cifrado").value = ""
});